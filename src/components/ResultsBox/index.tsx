import { Heading, Text } from "@chakra-ui/react";
import React from "react";

type TemperaturesUnit = "celsius" | "fahrenheit" | "kelvin";
type Temperatures = Record<TemperaturesUnit, number>;

const ResultsBox = ({ celsius, fahrenheit, kelvin }: Temperatures) => {
  return (
    <>
      <Heading as="h2" fontSize="3xl" textAlign="center">
        Results
      </Heading>
      <Heading as="h3" fontSize="xl">
        Celsius:
      </Heading>
      <Text>{celsius}</Text>
      <Heading as="h3" fontSize="xl" mt={2}>
        Fahrenheit:
      </Heading>
      <Text>{fahrenheit}</Text>
      <Heading as="h3" fontSize="xl" mt={2}>
        Kelvin:
      </Heading>
      <Text>{kelvin}</Text>
    </>
  );
};

export default ResultsBox;
