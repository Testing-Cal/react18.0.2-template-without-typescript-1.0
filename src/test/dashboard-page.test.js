import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom"; // for extended matchers
import Dashboard from "../dashboard-page";

jest.mock("highcharts/highcharts-3d");

describe("<Dashboard />", () => {
  it("renders <Dashboard /> component in root", () => {
    // Render the component
    render(<Dashboard />);
  });
});
