import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";

describe("Purchase Flow - Open Cart", () => {
  let products;
  let billing;

  before(() => {
    cy.fixture("products").then((data) => {
      products = data;
    });
    cy.fixture("billing").then((data) => {
      billing = data;
    });
  });

  it("adds two products to the cart", () => {
    HomePage.visit();

    products.forEach((product) => {
      HomePage.clickProduct(product);
      ProductPage.addToCart();
      ProductPage.verifySuccessAlert();
      HomePage.visit();
    });
  });
});
