/**
 * multiple phoneNumbers
 * joining 2 tables and get the result like Customer purchase what sort of things in last quarter
 * Aggregation function like sum(), avg() on single document to get information
 * Views, Cursor, Trigger analogical things here in MongoDB
 * alias use for the name of the Column or field
 */

//Exact match search
db.Customers.find({ "name.first_name": "Prashant" }).pretty(); // for the name match equals
db.Customers.find({ "name.first_name": "Prashant" }).pretty().count(); // counting the number of object

/**
 * selecting only some of the fields not the entire object
 * search in all the records that have the "verma" has the last_name
 */
db.Customers.find({ "name.last_name": "verma" }, { address: 1 }).pretty(); // only the address object
db.Customers.find(
  { "name.last_name": "verma" },
  { name: { first_name: 1 } }
).pretty(); //only the first_name
db.Customers.find(
  { "name.last_name": "verma" },
  { name: { first_name: 1 }, age: 1 }
).pretty(); //only the first_name

//suppress ID field which is being returned by default
db.Customers.find(
  { "name.last_name": "verma" },
  { name: { first_name: 1 }, age: 1, _id: 0 }
).pretty(); //only the first_name

db.Customers.find({ "name.first_name": /.*ra.*/ }, { name: { first_name: 1 } }); //will return "Prashant"

//searching for all the data that 'a' in the name.first_name
db.Customers.find(
  { "name.first_name": /a/ },
  { name: { first_name: 1 } }
).pretty();

//Prashant, varsha for below
db.Customers.find(
  { "name.first_name": /.*s.*a.*/ },
  { name: { first_name: 1 } }
);

//searching for couple of the values you need to create text index on the field.
db.Customers.createIndex({ "name.first_name": "text" });
//searching for the prashant / reena / jaxy like that
db.Customers.find(
  { $text: { $search: "prashant reena jaxy" } },
  { name: { first_name: 1 }, age: 1 }
).pretty();

//Searching whether field exists or not
db.Customers.find({ phone: null }).pretty(); //searching for the null value in the phoneNumber
db.Customers.find({ phone: { $exists: false } }).pretty(); //searching based on the existence of the field

db.Customers.find({ phone: /98*/ }).pretty(); //searching based on the existence of the field

//finding all the records that have the phone number starting from ^8
//this is brute force approach here we have to see that regex works with string so have to change the phone
//number to the string before making a comparison.
db.Customers.find(
  function () {
    if (this.phone) {
      return /^8/.test(this.phone + "");
    }
  },
  { name: { first_name: 1 }, phone: 1 }
).pretty();

//using $where for the comparison
db.Customers.find(
  { $where: "/^8.*/.test(this.phone+'')" },
  { "name.first_name": 1, phone: 1 }
).pretty();

//printing the result on the screen rather than returning
db.Customers.find({ phone: { $exists: true } }).forEach(function (doc) {
  let phoneNumber = doc.phone + "";
  if (/^8.*/.test(phoneNumber)) {
    print(
      doc.name.first_name + "'s phone number : " + doc.phone + " has match "
    );
  }
});

/**
 * Getting the Customers between <=46  and >=70 years of age
 * and sort them out in the descending Order.
 */
db.Customers.find(
  { age: { $gte: 46, $lte: 70 } },
  { name: { first_name: 1 }, age: 1 }
).sort({ age: -1 });

//Phone number that are above 9870000000
db.Customers.find(
  { phone: { $gt: 9870000000 } },
  { name: { first_name: 1 }, phone: 1 }
);

