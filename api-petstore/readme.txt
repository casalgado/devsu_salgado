Exercise 2: API Testing
Option 2: Pet CRUD in petstore.swagger.io

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

Objective:
Test the API endpoints for CRUD operations for pets. 
- Create a new pet
- Retrieve the pet by id
- Update the pet's name and it's status to 'sold'
- Get by status and find the modified pet.

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

