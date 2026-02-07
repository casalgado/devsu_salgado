class HomePage {
  visit() {
    cy.visit('/');
  }

  clickProduct(productName) {
    cy.get('#content .product-layout').contains('a', productName).click();
  }
}

export default new HomePage();
