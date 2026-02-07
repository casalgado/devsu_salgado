class ProductPage {
  addToCart() {
    cy.get('#button-cart').click();
  }

  verifySuccessAlert() {
    cy.get('.alert-success').should('be.visible');
  }
}

export default new ProductPage();
