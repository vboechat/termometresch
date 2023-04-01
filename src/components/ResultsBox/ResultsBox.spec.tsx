import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ResultsBox from ".";

describe("ResultsBox", () => {
  it("should render successfully with correct temperature values", () => {
    const { findByText, findByRole } = render(
      <ResultsBox celsius={0} fahrenheit={32} kelvin={273.15} />
    );

    expect(findByRole("heading", { name: "Results" })).toBeTruthy();
    expect(findByRole("heading", { name: "Celsius:" })).toBeTruthy();
    expect(findByText(0)).toBeTruthy();
    expect(findByRole("heading", { name: "Fahrenheit:" })).toBeTruthy();
    expect(findByText(32)).toBeTruthy();
    expect(findByRole("heading", { name: "Kelvin:" })).toBeTruthy();
    expect(findByText(273.15)).toBeTruthy();
  });
});
