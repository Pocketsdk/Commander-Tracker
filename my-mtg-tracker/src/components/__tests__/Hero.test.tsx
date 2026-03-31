import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Hero from "../Hero";
import "@testing-library/jest-dom";
import React from "react";

describe("Hero", () => {
  test("renders correctly", () => {
    render(<Hero />);
    const heroElement = screen.getByText(
      "Search and other functions coming soon..."
    );
    expect(heroElement).toBeDefined();
  });
});
