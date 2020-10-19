/**
 * Update the phone number for the Customers.
 * Can we have Array for the phone numbers which is now ?
 * Addition of more than one number for the Customer [].
 * No 2 customers should have the same Phone number i.e. phoneNumber unique, more than 1 constraint.
 * Addition of new 'email' field in the system for some of the customers, non-null & pattern for that.
 * Try wrong update of the age.
 * Try wrong update for the title and product_types.
 * Adding new title 'Diamond' in the enum.
 * Removing un-used product_types in the enum.
 * Updating the values of enum to another one.
 * setting default value in enum for the customers.
 * field to have default value
 * renaming the field name for the Customers i.e. title => customer_type
 * making product_types to have more than 1 value
 * test cases that can run on the MongoDB
 */

/**
 * Convert Phone field to mandatory
 * Convert Phone field to Array
 * Convert Phone field to unique array elements
 * @todo: Check Phone of each of the customers are different OR No 2 customers should have the same number ?
 */
db.runCommand({
  collMod: "Customers",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["phone"], //phone is required now 
      properties: {
        phone: {
          bsonType: ["array"], // should be an array
          uniqueItems: true, //should be unique items
          minItems: 1, //minimum limit
          maxItems: 5, //maximum limit
          description: "Must be an array of phone numbers",
          items: {
            bsonType: "long",
            minimum: 7777777777, //for each number min value
            maximum: 9999999999, //for each number max value
            description: "Should be 10 digit not null number.",
          },
        },
      },
    },
  },
});

//Not working - till you update the schema with "Phone" number changes
db.Customers.find({ phone: { $exists: true } }).forEach(function (myDocument) {
  db.Customers.update(
    { _id: myDocument._id },
    { $set: { phone: [myDocument.phone] } }
  );
});

//Not working - till you update the schema with "Phone" number changes
db.Customers.find({
  "name.first_name": "Prashant",
  phone: { $not: { $exists: true } },
}).forEach(function (myDocument) {
  print(myDocument.name.first_name + "has no phone attached ");
  db.Customers.update(
    { _id: myDocument._id },
    { $set: { phone: [NumberLong(9872357389)] } }
  );
});
