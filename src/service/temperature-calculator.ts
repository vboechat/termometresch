/**
 * This file contains some functions to calculate a temperature to another unit.
 *  and a "global" function to calculate a temperature to every unit.
 */
const KELVIN_CONSTANT = 273.15;

export const convertCelsiusToFahrenheit = (celsius: number) => {
  const fahrenheit = (celsius / 5) * 9 + 32;
  const isInteger = fahrenheit % 1 === 0;

  return isInteger ? fahrenheit : Number(fahrenheit.toFixed(2));
};

export const convertFahrenheitToCelsius = (fahrenheit: number) => {
  const celsius = ((fahrenheit - 32) / 9) * 5;
  const isInteger = celsius % 1 === 0;

  return isInteger ? celsius : Number(celsius.toFixed(2));
};

export const convertCelsiusToKelvin = (celsius: number) => {
  return celsius + KELVIN_CONSTANT;
};

export const convertKelvinToCelsius = (kelvin: number) => {
  const celsius = kelvin - KELVIN_CONSTANT;
  const isInteger = celsius % 1 === 0;

  return isInteger ? celsius : Number(celsius.toFixed(2));
};

type ThermometricUnit = "celsius" | "fahrenheit" | "kelvin" | undefined;

export const calculateTemperatures = (
  unit: ThermometricUnit = "celsius",
  value: number
) => {
  switch (unit) {
    case "celsius":
      return {
        celsius: value,
        fahrenheit: convertCelsiusToFahrenheit(value),
        kelvin: convertCelsiusToKelvin(value),
      };
    case "fahrenheit":
      return {
        celsius: convertFahrenheitToCelsius(value),
        fahrenheit: value,
        kelvin: convertCelsiusToKelvin(convertFahrenheitToCelsius(value)),
      };
    case "kelvin":
      return {
        celsius: convertKelvinToCelsius(value),
        fahrenheit: convertCelsiusToFahrenheit(convertKelvinToCelsius(value)),
        kelvin: value,
      };
  }
};
