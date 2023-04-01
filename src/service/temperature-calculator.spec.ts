import { describe, expect, it } from "vitest";

import {
  calculateTemperatures,
  convertCelsiusToFahrenheit,
  convertCelsiusToKelvin,
  convertFahrenheitToCelsius,
  convertKelvinToCelsius,
} from "./temperature-calculator";

describe("TemperatureCalculator", () => {
  describe("Celsius to Fahrenheit", () => {
    it("Should convert Celsius to Fahrenheit", () => {
      const convertedValue = convertCelsiusToFahrenheit(5);

      expect(convertedValue).toEqual(41);
    });

    it("Should fix number", () => {
      const convertedValue = convertCelsiusToFahrenheit(1.1);

      expect(convertedValue).toEqual(33.98);
    });
  });

  describe("Fahrenheit to Celsius", () => {
    it("Should convert Fahrenheit to Celsius", () => {
      const convertedValue = convertFahrenheitToCelsius(41);

      expect(convertedValue).toEqual(5);
    });

    it("Should fix number", () => {
      const convertedValue = convertFahrenheitToCelsius(33.98);

      expect(convertedValue).toEqual(1.1);
    });
  });

  describe("Celsius to Kelvin", () => {
    it("Should convert Celsius to Kelvin", () => {
      const convertedValue = convertCelsiusToKelvin(300);

      expect(convertedValue).toEqual(573.15);
    });

    it("Should fix number", () => {
      const convertedValue = convertCelsiusToKelvin(0.11111);

      expect(convertedValue).toEqual(273.26111);
    });
  });

  describe("Kelvin to Celsius", () => {
    it("Should convert Kelvin to Celsius", () => {
      const convertedValue = convertKelvinToCelsius(573.15);

      expect(convertedValue).toEqual(300);
    });

    it("Should fix number", () => {
      const convertedValue = convertKelvinToCelsius(273.26111);

      expect(convertedValue).toEqual(0.11);
    });
  });

  describe("Calculate Temperature", () => {
    it("Should return correct values for Celsius", () => {
      const calculatedTemperatures = calculateTemperatures("celsius", 5);

      expect(calculatedTemperatures).toEqual({
        celsius: 5,
        fahrenheit: 41,
        kelvin: 278.15,
      });
    });

    it("Should return correct values for Fahrenheit", () => {
      const calculatedTemperatures = calculateTemperatures("fahrenheit", 5);

      expect(calculatedTemperatures).toEqual({
        celsius: -15,
        fahrenheit: 5,
        kelvin: 258.15,
      });
    });

    it("Should return correct values for Kelvin", () => {
      const calculatedTemperatures = calculateTemperatures("kelvin", 5);

      expect(calculatedTemperatures).toEqual({
        celsius: -268.15,
        fahrenheit: -450.67,
        kelvin: 5,
      });
    });
  });
});
