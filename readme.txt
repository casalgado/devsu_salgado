Exercise 1: E2E Automation
Option 3: Purchase Flow in http://opencart.abstracta.us/

Objective:
- Add two products to the cart
- Visualize the Cart
- Complete Checkout process as a guest: "Guest Checkout"
- Finalize the purchase until reaching confirmation: "Your order has been placed!"

Prerequisites:
- Node.js v16 or higher
- npm

Installation:
1. Clone the repository
2. Navigate to the e2e-opencart folder
3. Run: npm install

Running the Tests:
- Headless mode: npm test
- Interactive mode (Cypress UI): npm run cypress:open

What the test does:
Automates a complete purchase flow on http://opencart.abstracta.us/:
1. Adds two products (MacBook and iPhone) to the shopping cart
2. Navigates to the cart and verifies both products are present
3. Proceeds to checkout as a guest (Guest Checkout)
4. Fills in billing details and completes the checkout process
5. Confirms the order and verifies the message "Your order has been placed!"

Project Structure
cypress/
  e2e/                  - Test spec file
  fixtures/             - Test data (products, billing info)
  pages/                - Page Object classes (HomePage, ProductPage, CartPage, CheckoutPage)
  support/              - Cypress support files
  screenshots/          - Screenshots at key points of the testing flow
cypress.config.js       - Cypress configuration
