class CheckoutPage {
  visit() {
    cy.visit("/index.php?route=checkout/checkout");
  }

  selectGuestCheckout() {
    cy.get('input[value="guest"]').check({ force: true });
  }

  continueAsGuest() {
    cy.get("#button-account").click();
  }

  fillBillingDetails(data) {
    cy.get("#input-payment-firstname").should("be.visible");
    cy.get("#input-payment-firstname").clear().type(data.firstName);
    cy.get("#input-payment-lastname").clear().type(data.lastName);
    cy.get("#input-payment-email").clear().type(data.email);
    cy.get("#input-payment-telephone").clear().type(data.telephone);
    cy.get("#input-payment-address-1").clear().type(data.address);
    cy.get("#input-payment-city").clear().type(data.city);
    cy.get("#input-payment-postcode").clear().type(data.postcode);
    cy.get("#input-payment-country").select(data.country);
    cy.get("#input-payment-zone").select(data.zone);
  }

  continueBilling() {
    cy.get("#button-guest").click();
    cy.get("#button-shipping-method").should("be.visible");
  }

  continueDelivery() {
    cy.get("#button-shipping-method").click();
    cy.get("#button-payment-method").should("be.visible");
  }

  continuePayment() {
    cy.get("#button-payment-method").click();
    cy.get("#button-confirm").should("be.visible");
  }

  agreeToTermsAndConditions() {
    cy.get('input[name="agree"]').check({ force: true });
  }

  confirmOrder() {
    cy.get("#button-confirm").click();
  }

  verifyOrderPlaced() {
    cy.url().should("include", "route=checkout/success");
    cy.get("#content h1").should("contain.text", "Your order has been placed!");
  }
}

export default new CheckoutPage();
