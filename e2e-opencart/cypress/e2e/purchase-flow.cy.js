import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";

describe("Purchase Flow - Open Cart", () => {
  let products;
  let billing;

  before(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
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
      cy.screenshot(`added-${product.name}-to-cart`);
      HomePage.visit();
    });
  });

  it("verifies products in cart and proceeds to checkout", () => {
    CartPage.visit();
    products.forEach((product) => {
      CartPage.verifyProductInCart(product.name);
    });
    cy.screenshot("cart-contents");
    CartPage.clickCheckout();
  });

  it("completes guest checkout and verifies order placement", () => {
    CheckoutPage.visit();
    CheckoutPage.selectGuestCheckout();
    CheckoutPage.continueAsGuest();
    CheckoutPage.fillBillingDetails(billing);
    CheckoutPage.continueBilling();
    CheckoutPage.continueDelivery();
    CheckoutPage.agreeToTermsAndConditions();
    CheckoutPage.continuePayment();
    cy.screenshot("order-details");
    CheckoutPage.confirmOrder();
    CheckoutPage.verifyOrderPlaced();
    cy.screenshot("order-confirmation");
  });
});
