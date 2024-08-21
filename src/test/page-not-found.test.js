import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import PageNotFound from '../page-not-found';

jest.mock("highcharts/highcharts-3d");

describe("<PageNotFound />", () => {
  it("renders <PageNotFound /> component in root", () => {
    render(<PageNotFound />);
  });
});
