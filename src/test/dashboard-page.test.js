import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom"; // for extended matchers
import Dashboard from "../dashboard-page";

describe("<Dashboard />", () => {
  it("renders <Dashboard /> component in root", () => {
    // Render the component
    render(<Dashboard />);
  });
});
