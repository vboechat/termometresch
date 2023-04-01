import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Card from ".";

describe("Card", () => {
  it("should render a card", () => {
    const { findByText } = render(
      <Card>
        <h1>Test</h1>
      </Card>
    );

    expect(findByText("Test")).toBeDefined();
  });
});
