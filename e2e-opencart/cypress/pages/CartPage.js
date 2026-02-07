class CartPage {
  visit() {
    cy.visit('/index.php?route=checkout/cart');
  }

  verifyProductInCart(productName) {
    cy.get('.table-responsive table tbody').should('contain.text', productName);
  }

  clickCheckout() {
    cy.get('.buttons .pull-right a[href*="checkout/checkout"]').click();
  }
}

export default new CartPage();
