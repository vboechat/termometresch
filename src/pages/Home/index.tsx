import { Center } from "@chakra-ui/react";
import { FormEvent, useState } from "react";

import CalculatorForm from "../../components/CalculatorForm";
import Card from "../../components/Card";
import ResultsBox from "../../components/ResultsBox";
import { calculateTemperatures } from "../../service/temperature-calculator";

export default function Home() {
  type TemperaturesUnit = "celsius" | "fahrenheit" | "kelvin";
  type ResultsObject = Record<TemperaturesUnit, number>;

  const [temperatureUnit, setTemperatureUnit] =
    useState<TemperaturesUnit>("celsius");
  const [temperature, setTemperature] = useState<number>(0);
  const [result, setResult] = useState<ResultsObject>();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const calculatedResult = calculateTemperatures(
      temperatureUnit,
      temperature
    );

    return setResult(calculatedResult);
  };

  return (
    <Center height="100vh" flexDirection="column" gap={6}>
      <Card>
        <CalculatorForm
          onTemperatureUnitChange={(event) =>
            setTemperatureUnit(event.target.value as TemperaturesUnit)
          }
          onTemperatureChange={(event) =>
            setTemperature(Number(event.target.value))
          }
          onSubmit={(event) => handleSubmit(event)}
        />
      </Card>
      {result && (
        <Card>
          <ResultsBox
            celsius={result.celsius}
            fahrenheit={result.fahrenheit}
            kelvin={result.kelvin}
          />
        </Card>
      )}
    </Center>
  );
}
