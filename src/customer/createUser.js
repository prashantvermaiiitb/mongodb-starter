/**
 * Script for creating the user after DB has been created
 */
db.createUser({
  user: "prashant",
  pwd: "1234",
  roles: ["readWrite", "dbAdmin"],
});

/**
 * post that we have to create the collections == table in the RDBS
 */

db.createCollections("customers");

/**
 * Getting all the collections created by the user.
 */
show collections 

/**
 * Next step is to add on the customer in customer collection
 * @todo what about any validation that's needed before putting this data here.
 */
db.customers.insert({first_name:'prashant',last_name:'verma', });
db.customers.insert({first_name:'shiv',last_name:'shanker', });
db.customers.insert({first_name:'bhaskar',last_name:'roy', });
db.customers.insert({first_name:'ganesh',last_name:'ji', });
db.customers.insert({first_name:'reena',last_name:'devi', });

/**
 * Then we can see all the records or objects
 * You do not have to worry about the id field for the customer records 
 * that will be automatically created and used in the DB 
 */
db.customers.find();
db.customers.find().pretty();
db.customers.find({first_name:'prashant'});

/**
 * To insert multiple records
 */
db.customers.insert([{first_name:'ganesh',last_name:'ji', },{first_name:'vighnesh',last_name:'maharaj', },{first_name:'jighnesh',last_name:'ji', }]);

/**
 * possible to extend the schema i.e. add new fields on the fly
 */
db.customers.insert({first_name:'baba',last_name:'verma',gender:'male' });

/**
 * Updating the particular object
 */
//this will replace the entire old object with the new one
//object id remains the same 5f7ec425b8de6f250de21de6 while the details are changed
db.customers.update({'first_name':'prashant'},{first_name:'prashantvermaiiitb'}); 

/**
 * if we want to add a specific field rather then use set operator
 * @todo this will add new JSON key-value pair 
 */
 db.customers.update({'first_name':'prashantvermaiiitb'},{$set:{gender:'male'}}); 

 /**
  * Incrementing numeric values for us 
  * first let's add the age 
  * increment the age +5
  */

db.customers.find({first_name:'prashantvermaiiitb'})

db.customers.update({'first_name':'prashantvermaiiitb'},{$set:{age:45}}); 

db.customers.find({first_name:'prashantvermaiiitb'})

db.customers.update({'first_name':'prashantvermaiiitb'},{$inc:{age:5}}); 

db.customers.find({first_name:'prashantvermaiiitb'})

/**
 * Removing a field using unset
 * use unset() here 
 */
db.customers.update({first_name:'prashantvermaiiitb'},{$unset:{age:1}})
db.customers.find({first_name:'prashantvermaiiitb'}).pretty()

/**
 * Now we will try to update something that's not being present there in the
 * object.
 */
//this will not insert any record or update anything because there is no record
//will be found 
db.customers.update({first_name:'baba bhole'},{first_name:'mahadev',last_name:'ji'})

//but if we want the record to be inserted then use upsert.
db.customers.update({first_name:'baba bhole'},{first_name:'mahadev',last_name:'ji'},{upsert:true})

/**
 * rename the already defined JSON key using $rename
 * this will update the last_name attribute to lname
 */
db.customers.update({first_name:'mahadev'},{$rename:{'last_name':'lname'}});

/**
 * To remove the documents
 * This will delete all the objects with first_name as prashantvermaiiitb
 */
db.customers.remove({first_name:'prashantvermaiiitb'})
/**
 * removing only the one record for the page, the first one it finds
 */
db.customers.remove({first_name:'prashantvermaiiitb'},{justOne :true})

/**
 * find()
 */
db.customers.find({first_name:'bhaskar'})
db.customers.find({$or:[{first_name:'bhaskar'},{first_name:'reena'}]}).pretty() //or operator
// using greater or lesser operator
db.customers.update({first_name:'ganesh'},{$set:{age:20}})
db.customers.find({age:{$gt:10}}) //using gt operator
db.customers.find({age:{$gte:10}}) //using gt operator
db.customers.find({age:{$lt:30}}) //using gt operator
db.customers.find({age:{$lte:30}}) //using gt operator

// inserting data with multiple nesting
db.customers.insert({first_name:'prashant',last_name:'verma',address:{flat:'g-1505',landmark:'hanuman murti',colony:'sector-78'}})
// searching based on the address.flat field
db.customers.find({"address.flat":'g-1505'})

db.customers.insert({first_name:'prashant',last_name:'verma',address:{flat:'g-1505',landmark:'hanuman murti',colony:'sector-78'},membership:['mem1','mem2']})
//searching the data array
db.customers.find({"membership":'mem1'})


/** 
 * Sorting 
 */

 db.customers.find().sort({last_name:1}) // ascending 
 db.customers.find().sort({last_name:-1}) //descending 

 /**
  * Count documents
  */

  db.customers.find().count()
  db.customers.find({first_name:'prashantvermaiiitb'}).count() // finding and counting specific

  /**
   * Limiting the number of records
   */
  db.customers.find().limit(4);
  db.customers.find().limit(4).sort({last_name:-1});

  /** 
   * iterations as well we can do on the stuff
   */
  db.customers.find().forEach(function(doc){
      print('Customer first name'+doc.first_name);
  });