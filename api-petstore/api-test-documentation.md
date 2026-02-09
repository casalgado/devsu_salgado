# API Test Documentation - Petstore API

## Test Data

### Fixtures

- **File**: [pet.new.json](../api-petstore/cypress/fixtures/pet.new.json)
- **New Pet JSON Object**:

```json
{
  "category": {
    "id": 101,
    "name": "terriers"
  },
  "name": "Terry",
  "photoUrls": [
    "https://upload.wikimedia.org/wikipedia/commons/d/d6/The_Wizard_of_Oz_Judy_Garland_Terry_1939.jpg"
  ],
  "tags": [
    {
      "id": 1,
      "name": "famous"
    },
    {
      "id": 2,
      "name": "small"
    }
  ],
  "status": "available"
}
```
**Note**: The "id" property is omitted from the fixture and assigned dynamically using the `testPetId` variable in each test.

### Variables

- **testPetId**: Randomly generated number between 1-10000

---

## Test 1: Create pet and retrieve by ID

### Overview

Two requests: One POST request to create the pet, one GET request to retrieve by ID.

### POST /pet

#### Input

- **Endpoint**: `POST https://petstore.swagger.io/v2/pet`
- **Body**:

```json
{
  "id": {{testPetId}} // Example: 1789,
  "category": {
    "id": 101,
    "name": "terriers"
  },
  "name": "Terry",
  "photoUrls": [
    "https://upload.wikimedia.org/wikipedia/commons/d/d6/The_Wizard_of_Oz_Judy_Garland_Terry_1939.jpg"
  ],
  "tags": [
    {
      "id": 1,
      "name": "famous"
    },
    {
      "id": 2,
      "name": "small"
    }
  ],
  "status": "available"
}
```

#### Output

- **Status Code**: 200
- **Response Body**:

```json
{
  "id": {{testPetId}},
  "category": {
    "id": 101,
    "name": "terriers"
  },
  "name": "Terry",
  "photoUrls": [
    "https://upload.wikimedia.org/wikipedia/commons/d/d6/The_Wizard_of_Oz_Judy_Garland_Terry_1939.jpg"
  ],
  "tags": [
    {
      "id": 1,
      "name": "famous"
    },
    {
      "id": 2,
      "name": "small"
    }
  ],
  "status": "available"
}
```

#### Validation

- Response status equals 200
- Response body contains the created pet with matching ID

### GET /pet/{petId}

#### Input

- **Endpoint**: `GET https://petstore.swagger.io/v2/pet/{{testPetId}}`

#### Output

- **Status Code**: 200
- **Response Body**:

```json
{
  "id": {{testPetId}},
  "category": {
    "id": 101,
    "name": "terriers"
  },
  "name": "Terry",
  "photoUrls": [
    "https://upload.wikimedia.org/wikipedia/commons/d/d6/The_Wizard_of_Oz_Judy_Garland_Terry_1939.jpg"
  ],
  "tags": [
    {
      "id": 1,
      "name": "famous"
    },
    {
      "id": 2,
      "name": "small"
    }
  ],
  "status": "available"
}
```

#### Validation

- Response status equals 200
- Response body ID matches the created pet ID
- Response body ID matches testPetId variable
- Response body name matches fixture name ("Terry")
- Response body status matches fixture status ("available")
- Response body category deeply equals fixture category object
- Response body tags array deeply equals fixture tags array

---

## Test 2: Create pet, update name and status, then retrieve by status

### Overview

Three requests: One POST request to create the pet, one PUT request to update the pet, and one GET request to retrieve pets by status.

### POST /pet

#### Input

- **Endpoint**: `POST https://petstore.swagger.io/v2/pet`
- **Body**:

```json
{
  "id": {{testPetId}},
  "category": {
    "id": 101,
    "name": "terriers"
  },
  "name": "Terry",
  "photoUrls": [
    "https://upload.wikimedia.org/wikipedia/commons/d/d6/The_Wizard_of_Oz_Judy_Garland_Terry_1939.jpg"
  ],
  "tags": [
    {
      "id": 1,
      "name": "famous"
    },
    {
      "id": 2,
      "name": "small"
    }
  ],
  "status": "available"
}
```

#### Output

- **Status Code**: 200
- **Response Body**:

```json
{
  "id": {{testPetId}},
  "category": {
    "id": 101,
    "name": "terriers"
  },
  "name": "Terry",
  "photoUrls": [
    "https://upload.wikimedia.org/wikipedia/commons/d/d6/The_Wizard_of_Oz_Judy_Garland_Terry_1939.jpg"
  ],
  "tags": [
    {
      "id": 1,
      "name": "famous"
    },
    {
      "id": 2,
      "name": "small"
    }
  ],
  "status": "available"
}
```

#### Validation

- Response status equals 200
- Response body contains the created pet with matching ID

### PUT /pet

#### Input

- **Endpoint**: `PUT https://petstore.swagger.io/v2/pet`
- **Body**:

```json
{
  "id": 1234,
  "category": {
    "id": 101,
    "name": "terriers"
  },
  "name": "Toto",
  "photoUrls": [
    "https://upload.wikimedia.org/wikipedia/commons/d/d6/The_Wizard_of_Oz_Judy_Garland_Terry_1939.jpg"
  ],
  "tags": [
    {
      "id": 1,
      "name": "famous"
    },
    {
      "id": 2,
      "name": "small"
    }
  ],
  "status": "sold"
}
```

#### Output

- **Status Code**: 200
- **Response Body**:

```json
{
  "id": {{testPetId}},
  "category": {
    "id": 101,
    "name": "terriers"
  },
  "name": "Toto",
  "photoUrls": [
    "https://upload.wikimedia.org/wikipedia/commons/d/d6/The_Wizard_of_Oz_Judy_Garland_Terry_1939.jpg"
  ],
  "tags": [
    {
      "id": 1,
      "name": "famous"
    },
    {
      "id": 2,
      "name": "small"
    }
  ],
  "status": "sold"
}
```

#### Validation

- Response status equals 200
- Response body ID matches the created pet ID (1234)
- Response body ID matches testPetId variable
- Response body name equals updated value ("Toto")
- Response body status equals updated value ("sold")
- Response body category deeply equals the category object
- Response body tags array deeply equals the tags array

### GET /pet/findByStatus

#### Input

- **Endpoint**: `GET https://petstore.swagger.io/v2/pet/findByStatus?status=sold`

#### Output

- **Status Code**: 200
- **Response Body** (array containing the updated pet among others):

```json
[
  {
    "id": {{testPetId}},
    "category": {
      "id": 101,
      "name": "terriers"
    },
    "name": "Toto",
    "photoUrls": [
      "https://upload.wikimedia.org/wikipedia/commons/d/d6/The_Wizard_of_Oz_Judy_Garland_Terry_1939.jpg"
    ],
    "tags": [
      {
        "id": 1,
        "name": "famous"
      },
      {
        "id": 2,
        "name": "small"
      }
    ],
    "status": "sold"
  }
]
```

#### Validation

- Response status equals 200
- Response body is an array
- Array contains a pet with ID matching the created pet ID (1234)
- Found pet ID matches testPetId variable
- Found pet name equals "Toto"
- Found pet status equals "sold"
- Found pet category deeply equals the category object
- Found pet tags array deeply equals the tags array