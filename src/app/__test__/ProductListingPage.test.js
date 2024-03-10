import { fireEvent, render, screen } from "@testing-library/react";
import ProductListingPage from "../page";
import "@testing-library/jest-dom";
import { MOCK_DATA } from "../mock/productListingMock";
describe("ProductListingPage", () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(MOCK_DATA),
    })
  );
});
it("renders loading text initially", async () => {
  render(<ProductListingPage />);

  expect(screen.getByText("Loading...")).toBeInTheDocument();

  // Wait for products to be loaded
  await screen.findByTestId("product-card");

  expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
});

it("renders product cards with correct data", async () => {
  render(<ProductListingPage />);

  // Wait for products to be loaded
  await screen.findByTestId("product-card");

  expect(screen.getAllByTestId("product-card")).toHaveLength(1);

  // Check if product titles are rendered
  expect(
    screen.getByText("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
  ).toBeInTheDocument();

  // Check if product categories are rendered
  expect(screen.getByText("men's clothing")).toBeInTheDocument();

  // Check if product prices are rendered
  expect(screen.getByText("$109.95")).toBeInTheDocument();

  // Check if product ratings are rendered
  expect(screen.getByText("3.9⭐")).toBeInTheDocument();
});

it("navigates to product details page when clicked", async () => {
  render(<ProductListingPage />);

  await screen.findByTestId("product-card");

  const productLink = screen.getByText(
    "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
  );

  fireEvent.click(productLink);
  expect(
    screen.getByText("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
  ).toBeInTheDocument();
});
