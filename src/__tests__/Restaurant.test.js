import { render, screen } from "@testing-library/react";
import RestaurantCard, {
  withPromotedLabel,
} from "../components/RestaurantCard";
import MOCK_DATA from "../../mocks/data.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should load restaurant component", () => {
  render(
    <BrowserRouter>
      <RestaurantCard item={MOCK_DATA} />
    </BrowserRouter>
  );
  const data = screen.getByText("Prem Dhaba");
  expect(data).toBeInTheDocument();
});

test("Should render PromotedRestaurantCard component with props data", () => {
  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

  render(
    <BrowserRouter>
      <PromotedRestaurantCard item={MOCK_DATA} />
    </BrowserRouter>
  );

  const name = screen.getByText("Prem Dhaba");

  expect(name).toBeInTheDocument();
});
