/**
 * last_name is not present
 * age : in between certain limits
 * age : greater than or less than limits
 * phoneNumber : value above certain number or equals
 * multiple phoneNumbers
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
db.Customers.find({ phone: { $exists: false } }).pretty();//searching based on the existence of the field

db.Customers.find({ phone: /98*/}).pretty();//searching based on the existence of the field