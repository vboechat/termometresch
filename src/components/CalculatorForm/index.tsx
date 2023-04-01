import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
} from "@chakra-ui/react";
import { ChangeEvent, FormEvent } from "react";

type CalculatorFormProps = {
  onTemperatureUnitChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  onTemperatureChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent) => void;
};

const CalculatorForm = ({
  onTemperatureUnitChange,
  onTemperatureChange,
  onSubmit,
}: CalculatorFormProps) => {
  return (
    <>
      <Heading as="h1" fontSize="3xl" textAlign="center">
        Termometresch
      </Heading>
      <FormControl role="form" as="form" mt={6} onSubmit={onSubmit}>
        <FormLabel htmlFor="temperature-select" m={0}>
          Unit
        </FormLabel>
        <Select
          id="temperature-select"
          data-testid="temperature-select"
          colorScheme="white"
          focusBorderColor="white"
          _placeholder={{ color: "white" }}
          onChange={onTemperatureUnitChange}
          required
        >
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
          <option value="kelvin">Kelvin</option>
        </Select>
        <FormLabel htmlFor="temperature" m={0} mt={4}>
          Temperature
        </FormLabel>
        <Input
          type="number"
          data-testid="temperature"
          id="temperature"
          colorScheme="white"
          placeholder="0"
          focusBorderColor="white"
          _placeholder={{ color: "white" }}
          onChange={onTemperatureChange}
          required
        />
        <Button
          type="submit"
          width="full"
          marginTop={4}
          color="black"
          backgroundColor="green.500"
          _hover={{ backgroundColor: "green.600" }}
        >
          Calculate
        </Button>
      </FormControl>
    </>
  );
};

export default CalculatorForm;
