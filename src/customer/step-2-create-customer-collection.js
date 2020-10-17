/**
 * Creating the customer collection
 * name / address / age : are the required fields
 * phone : has the limits defined
 * title and product_type : have the values defined
 * validation action / level : are being used to enforce the constraints
 */
db.createCollection("Customers", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "age", "address"],
      properties: {
        phone: {
          bsonType: "long",
          minimum: 7777777777,
          maximum: 9999999999,
          description: "Should be 10 digit not null number.",
        },
        name: {
          bsonType: "object",
          required: ["first_name"],
          properties: {
            first_name: {
              bsonType: "string",
              description: "must be string",
            },
            last_name: {
              bsonType: "string",
              description: "must be string",
            },
          },
        },
        age: {
          bsonType: "int",
          minimum: 5,
          maximum: 100,
          description: "Age should be integer and greater than 5.",
        },
        address: {
          bsonType: "object",
          required: ["house_number", "city"],
          properties: {
            house_number: {
              bsonType: "string",
              description: "House number cannot be blank string.",
            },
            city: {
              bsonType: "string",
              description: "must be a string and is required",
            },
          },
        },
        title: {
          enum: ["Gold", "Silver", "Platinum"],
          description: "can only be one of the enum values and is required",
        },
        product_types: {
          enum: ["life-n-style", "grocery", "electronics"],
          description: "can only be one of the enum values and is required",
        },
      },
    },
  },
  validationAction: "error",
  validationLevel: "strict",
});

/**
 * to check whether the customer collection has been created or not
 */
show collections

/**
 * @todo : Further data-points to explore :-
 * 
 * How to add the enums on the fly or after the addition ?
 * validation action / level : how to use them properly ?
 * What are other Data-types in the Mongo ? out of 16 
 */