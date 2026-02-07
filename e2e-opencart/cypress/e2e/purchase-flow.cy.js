import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";

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
      HomePage.clickProduct(product.name);
      ProductPage.addToCart();
      ProductPage.verifySuccessAlert();
      HomePage.visit();
    });
  });

  it("verifies products in cart and proceeds to checkout", () => {
    CartPage.visit();
    products.forEach((product) => {
      CartPage.verifyProductInCart(product.name);
    });
    CartPage.clickCheckout();
  });
});
