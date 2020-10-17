/**
 * inserting single data-record in the customer table
 */
db.Customers.insert({
  name: {
    first_name: "Prashant",
    last_name: "verma",
  },
  age: NumberInt(38),
  address: {
    house_number: "flat#G1505, antriksh-golf-view#1, sector-78",
    city: "bhopal",
  },
  title: "Silver",
  product_types: "grocery",
});

/**
 * inserting many records
 */
db.Customers.insertMany([
  {
    name: {
      first_name: "Varsha",
      last_name: "verma",
    },
    age: NumberInt(33),
    address: {
      house_number: "lig-15, harshwardhan nagar",
      city: "bhopal",
    },
    title: "Silver",
    product_types: "life-n-style",
    phone: NumberLong(8447141479),
  },
  {
    name: {
      first_name: "Reena",
      last_name: "verma",
    },
    age: NumberInt(58),
    address: {
      house_number: "15/29. south t.t. nagar",
      city: "bhopal",
    },
    title: "Platinum",
    product_types: "electronics",
    phone: NumberLong(9431238810),
  },
  {
    name: {
      first_name: "Jagdish",
      last_name: "verma",
    },
    age: NumberInt(62),
    address: {
      house_number: "lig-15, harshwardhan nagar",
      city: "bhopal",
    },
    title: "platinum", // will give error as the value is 'P'latinum
    product_types: "grocery",
    phone: NumberLong(9435678810),
  },
  {
    name: {
      first_name: "John",
      last_name: "doe",
    },
    age: NumberInt(39),
    address: {
      house_number: "15- west street",
      city: "fremont",
    },
    title: "Silver",
    product_types: "life-n-style",
    phone: NumberLong(9874560089),
  },
  {
    name: {
      first_name: "Jenny",
      last_name: "Pax",
    },
    age: NumberInt(68),
    address: {
      house_number: "Block-89, Lou street",
      city: "ohio",
    },
    title: "Platinum",
    product_types: "electronics",
    phone: NumberLong(7894370928),
  },
  {
    name: {
      first_name: "Jolly",
      last_name: "daniels",
    },
    age: NumberInt(56),
    address: {
      house_number: "Neils-78, Boulvard street",
      city: "California",
    },
    title: "Platinum", // will give error as the value is 'P'latinum
    product_types: "grocery",
    phone: NumberLong(8927456078),
  },
  {
    name: {
      first_name: "Steve",
      last_name: "smith",
    },
    age: NumberInt(42),
    address: {
      house_number: "16-silent hill, boulvard road",
      city: "wakanda",
    },
    title: "Gold",
    product_types: "life-n-style",
    phone: NumberLong(8795430056),
  },
  {
    name: {
      first_name: "Tony",
      last_name: "stark",
    },
    age: NumberInt(41),
    address: {
      house_number: "18-silent hill, boulvard road",
      city: "milpitas",
    },
    title: "Gold",
    product_types: "life-n-style",
    phone: NumberLong(8795431156),
  },
  {
    name: {
      first_name: "Denny",
      last_name: "strange",
    },
    age: NumberInt(46),
    address: {
      house_number: "78-Notting hill, chasterlee",
      city: "dallas",
    },
    title: "Gold",
    product_types: "grocery",
    phone: NumberLong(7980950089),
  },
  {
    name: {
      first_name: "Black",
      last_name: "widow",
    },
    age: NumberInt(39),
    address: {
      house_number: "90-notting hill, hampshire",
      city: "North hampton",
    },
    title: "Silver",
    product_types: "life-n-style",
    phone: NumberLong(9456006721),
  },
  {
    name: {
      first_name: "Shaila",
      last_name: "Cox",
    },
    age: NumberInt(45),
    address: {
      house_number: "14-New avenue road",
      city: "bangalore",
    },
    title: "Platinum",
    product_types: "electronics",
    phone: NumberLong(8795431156),
  },
  {
    name: {
      first_name: "Jaxy",
      last_name: "billa",
    },
    age: NumberInt(79),
    address: {
      house_number: "79-barbados, bulwaeo street",
      city: "barbedos",
    },
    title: "Gold",
    product_types: "grocery",
    phone: NumberLong(7984562290),
  },
]);

/**
 * insert One record and the proper one that was not being done previously.
 */
db.Customers.insertOne({
  name: {
    first_name: "Jagdish",
    last_name: "verma",
  },
  age: NumberInt(62),
  address: {
    house_number: "lig-15, harshwardhan nagar",
    city: "bhopal",
  },
  title: "Platinum",
  product_types: "grocery",
  phone: NumberLong(9435678810),
});
