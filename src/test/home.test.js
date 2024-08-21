import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom"; // for extended matchers
import Home from "../home";

jest.mock("highcharts/highcharts-3d");

describe("<Home />", () => {
  it("renders <Home /> component in root", () => {
    render(<Home />);
  });
});
