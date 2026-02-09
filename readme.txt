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


Exercise 2: API test
Option 2: Pet CRUD in petstore.swagger.io


Objective:
Test the API endpoints for CRUD operations for pets. 
- Create a new pet
- Retrieve the pet by id
- Update the pet's name and it's status to 'sold'
- Get by status and find the modified pet.

Prerequisites:
- Node.js v16 or higher
- npm

Installation:
1. Clone the repository
2. Navigate to the api-petstore folder
3. Run: npm install

Running the Tests:
- Headless mode: npm test
- Interactive mode (Cypress UI): npm run cypress:open

What the test does:
Tests Create, Read and Update operations on https://petstore.swagger.io.
1. Creates a pet using test data from fixtures and a test id, then retrieves the pet using the test id.
2. Creates a pet as before, updates name and status, then retrieves all pets that have status as 'sold' and confirms the created pet exists.

Project Structure
cypress/
  e2e/                  - Test spec file
  fixtures/             - Test data (pet)
  support/              - Cypress support files
cypress.config.js       - Cypress configuration

Documentation: 

For detailed test documentation, inputs, outputs and variables, read the document at: api-petstore/api-test-documentation.md

