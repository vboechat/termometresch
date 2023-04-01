import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import CalculatorForm from ".";

describe("CalculatorForm", () => {
  it("should render CalculatorForm and submit form", async () => {
    const { findByRole, findByTestId } = render(
      <CalculatorForm
        onTemperatureUnitChange={() => null}
        onTemperatureChange={() => null}
        onSubmit={() => null}
      />
    );

    const temperatureUnitSelect = findByTestId("temperature-select");
    const temperatureInput = findByTestId("temperature");
    const submitButton = findByRole("button");

    expect(findByRole("form")).toBeTruthy();
    expect(temperatureUnitSelect).toBeTruthy();
    expect(temperatureInput).toBeTruthy();
    expect(submitButton).toBeTruthy();
    expect(await temperatureUnitSelect).toHaveProperty("value", "celsius");
    expect(await temperatureInput).toHaveProperty("value", "");

    await userEvent.selectOptions(await temperatureUnitSelect, "fahrenheit");
    await userEvent.type(await temperatureInput, "100");

    expect(await temperatureUnitSelect).toHaveProperty("value", "fahrenheit");
    expect(await temperatureInput).toHaveProperty("value", "100");
  });
});
