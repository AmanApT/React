import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import "@testing-library/jest-dom";
import resList from "../../mocks/resList.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(resList);
    },
  });
});

test("Should show search button in Body Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const inputBox = screen.getByPlaceholderText("Search by Name");
  const clickToFilter = screen.getByText("Click to Filter");

  fireEvent.change(inputBox, { target: { value: "pizza" } });
  fireEvent.click(clickToFilter);

  const allDivs = screen.getAllByTestId("resCard");
  expect(allDivs.length).toBe(16);
});
