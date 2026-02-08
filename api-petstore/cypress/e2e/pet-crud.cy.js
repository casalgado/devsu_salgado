describe("Pet CRUD operations", () => {
  const testPetId = Math.floor(Math.random() * 10000);
  let newPetData;

  before(() => {
    cy.fixture("pet.new").then((data) => {
      newPetData = data;
    });
  });

  it("should create a new pet, then retrieve by id", () => {
    const createPetPayload = { ...newPetData, id: testPetId };
    cy.request("POST", "/pet", createPetPayload).then((response) => {
      expect(response.status).to.eq(200);
      const createdPetId = response.body.id;

      cy.request("GET", `/pet/${createdPetId}`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(createdPetId);
        expect(response.body.id).to.eq(testPetId);
        expect(response.body.name).to.eq(newPetData.name);
        expect(response.body.status).to.eq(newPetData.status);
        expect(response.body.category).to.deep.eq(newPetData.category);
        expect(response.body.tags).to.deep.eq(newPetData.tags);
      });
    });
  });

  it("should create a new pet, update name and status, then retrieve by status", () => {
    const createPetPayload = { ...newPetData, id: testPetId };
    cy.request("POST", "/pet", createPetPayload).then((response) => {
      expect(response.status).to.eq(200);
      const createdPetId = response.body.id;

      const updatePetPayload = {
        ...createPetPayload,
        name: "Toto",
        status: "sold",
      };

      cy.request("PUT", `/pet`, updatePetPayload).then(
        (response) => {
          expect(response.status).to.eq(200);
          expect(response.body.id).to.eq(createdPetId);
          expect(response.body.id).to.eq(testPetId);
          expect(response.body.name).to.eq(updatePetPayload.name);
          expect(response.body.status).to.eq(updatePetPayload.status);
          expect(response.body.category).to.deep.eq(updatePetPayload.category);
          expect(response.body.tags).to.deep.eq(updatePetPayload.tags);



          cy.request("GET", `/pet/findByStatus?status=sold`).then(
            (response) => {
              expect(response.status).to.eq(200);
              const foundPet = response.body.find((pet) => pet.id === createdPetId);
              expect(foundPet).to.exist;
              expect(foundPet.id).to.eq(createdPetId);
              expect(foundPet.id).to.eq(testPetId);
              expect(foundPet.name).to.eq(updatePetPayload.name);
              expect(foundPet.status).to.eq(updatePetPayload.status);
              expect(foundPet.category).to.deep.eq(updatePetPayload.category);
              expect(foundPet.tags).to.deep.eq(updatePetPayload.tags);
            });
        },
      );
    });
  });
});
