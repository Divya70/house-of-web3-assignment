import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import { MOCK_DATA } from "../mock/productDetailMock";
import ProductDetail from "../product/[id]/page";
import "@testing-library/jest-dom";
// Mock the fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

// Mock the useParams hook
jest.mock("next/navigation", () => ({
  useParams: () => ({
    id: "1", // your mock id
  }),
}));

// Mock the next/image component
jest.mock("next/image", () => ({ src, alt }) => <img src={src} alt={alt} />);

// Import your component

describe("ProductDetail component", () => {
  it("renders product details correctly", async () => {
    render(<ProductDetail />, { wrapper: MemoryRouter });

    // Wait for the product to be fetched
    await waitFor(() => screen.getByTestId("product-card"));
    const productTitle = screen.getByText(
      "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    );
    expect(productTitle).toBeInTheDocument();

    const productCategory = screen.getByText("men's clothing");
    expect(productCategory).toBeInTheDocument();
    const productPrice = screen.getByText("$109.95");
    expect(productPrice).toBeInTheDocument();
    const productRating = screen.getByText("3.9⭐");
    expect(productRating).toBeInTheDocument();
    const productDescription = screen.getByTestId("product-description");
    expect(productDescription).toBeInTheDocument();
  });
  it("should load add to cart button", async () => {
    render(<ProductDetail />, { wrapper: MemoryRouter });
    await waitFor(() => screen.getByTestId("product-card"));
    const addToCartButton = screen.getByRole("button");
    expect(addToCartButton).toBeInTheDocument();
  });
});
