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

  it("completes a full purchase flow as a guest", () => {
    cy.log("Step 1: Add products to cart");
    HomePage.visit();
    products.forEach((product) => {
      HomePage.clickProduct(product.name);
      ProductPage.addToCart();
      ProductPage.verifySuccessAlert();
      cy.screenshot(`added-${product.name}-to-cart`);
      HomePage.visit();
    });

    cy.log("Step 2: Verify cart contents and proceed to checkout");
    CartPage.visit();
    products.forEach((product) => {
      CartPage.verifyProductInCart(product.name);
    });
    cy.screenshot("cart-contents");
    CartPage.clickCheckout();

    cy.log("Step 3: Complete checkout as guest");
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
