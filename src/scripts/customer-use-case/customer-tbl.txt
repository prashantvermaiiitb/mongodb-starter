1) To get names DBs in the Mongo DB

> show dbs : 

2) To show the collections that 
https://docs.mongodb.com/manual/reference/command/listCollections/


> db.getCollectionInfos()  -- information about the collection 
> db.getCollectionNames()  -- information about the name of the collections

3) Creating the User with proper permissions 
https://docs.mongodb.com/manual/reference/method/db.createUser/

> db.createUser({
    user:'prashant',
    pwd:'verma@123',
     roles: [ "readWrite", "dbAdmin" ]
})

> show users -- will give you the users there in the DB 

4) Creating a collection 
https://docs.mongodb.com/manual/reference/method/db.createCollection/

>db.createCollection('customers') // for creating the customer collections
>show collections //for showing the collections

5) db.customers.insertMany([
...   {
...     name: {
...       first: "john",
...       last: "doe",
...     },
...     age: 45,
...     type: "gold",
...     items_purchased: ["cosmetics", "life-n-style"],
...     payments: {
...       cards: ["master-card", "visa"],
...     },
...     //date insertion
...   },
...   {
...     name: {
...       first: "jenny",
...       last: "doyle",
...     },
...     age: 60,
...     type: "silver",
...     items_purchased: ["cosmetics"],
...     payments: {
...       cash: "dollars",
...     },
...     //date insertion
...   },
...   {
...     name: {
...       first: "ramesh",
...       last: "kumar",
...     },
...     age: 30,
...     type: "platinum",
...     items_purchased: ["cosmetics", "life-n-style", "general"],
...     payments: {
...       cash: "dollars",
...       cards: ["master-card", "visa"],
...     },
...     //date insertion
...   },
... ]);

6) Inserting Date in a Document as below 

> create the date variable first 
var date = new Date();
db.customers.insert({
  name: {
    first: "kuldip",
    last: "tyagi",
  },
  age: 43,
  type: "Gold",
  items_purchased: ["life-n-style", "general"],
  payments: {
    cash: "dollars",
    cards: ["master-card", "visa","lola-card"],
  },
  timestamp: date,
});

7) Putting constraints on the fields that are already declared ? 
  -  like age cannot be negative and greater than 70
  -  name cannot be null 
  -  type by default should be 'general'
  -  items_purchased :[] cannot be empty array

8) Showing proper message in-case of failure or comply during the insert

9) 