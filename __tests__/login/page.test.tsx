import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import LoginPage from "../../app/login/page";

test("Login Page has a sign in heading and button", () => {
  render(<LoginPage />);
  expect(
    screen.getByRole("heading", { level: 1, name: "Sign in with Solid" }),
  ).toBeDefined();
  expect(
    screen.getByRole("button", { name: "Login with Solid" }),
  ).toBeDefined();
});
