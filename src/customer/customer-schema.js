//use <db-name>
// use customer_product

/**
 * Schema JS file for the customer table with validation.
 */

db.createCollection("customers", {
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
});

/**
 * command to modify the existing Documents.
 */
db.runCommand({
  collMod: "customers",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["age"],
      properties: {
        age: {
          bsonType: "int",
          description: "must be a string and is required",
        },
      },
    },
  },
  validationLevel: "moderate",
  validationAction: "warn",
});

db.customers.insertMany([
  {
    name: { first_name: "Prashant", last_name: "verma" },
    title: "silver",
    age: 20,
    address: {
      house_number: "flat#234",
      street: "mata-mandir road, bhopal",
      city: "bhopal",
    },
    product_types: ["grocery"],
  },
]);

db.customers.insert({
  name: { first_name: "Prashant", last_name: "verma" },
  age: NumberInt(20),
  address: {
    house_number: "flat#234",
    street: "mata-mandir road, bhopal",
    city: "bhopal",
  },
  title: "silver",
  product_types: "grocery",
});

//now update the DB collection schema to have the pincode in the address as the mandatory field

db.createCollection("cust_age", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["age"],
      properties: {
        age: {
          bsonType: "int",
          minimum: 5,
          maximum: 100,
          description: "should be number",
        },
      },
    },
  },
});

db.runCommand({
  collMod: "cust_age",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name"],
      properties: {
        name: {
          bsonType: "string",
          description: "must be a string and is required",
        },
      },
    },
  },
});

//9873210089 is not being under use because int is not able to cater the number
db.runCommand({
  collMod: "cust_age",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["phone"],
      properties: {
        phone: {
          bsonType: "long",
          description: "must be within limits.",
        },
      },
    },
  },
});

db.runCommand({
  collMod: "cust_age",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["address"],
      properties: {
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
      },
    },
  },
});

db.createCollection("tmp2", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "age", "address"],
      properties: {
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
      },
    },
  },
});

db.createCollection("tmp4", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name"],
      properties: {
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
        phone: {
          bsonType: "long",
          minimum: 7777777777,
          maximum: 9999999999,
          description: "Should be 10 digit not null number.",
        },
      },
    },
  },
});

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
