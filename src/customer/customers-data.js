/**
 * Sample JSON information to be stored for the Customer for the Project
 */

let customer = [
  {
    name: {
      first: "john",
      last: "doe",
    },
    age: 45,
    type: "gold",
    items_purchased: ["cosmetics", "life-n-style"],
    payments: {
      cards: ["master-card", "visa"],
    },
    //date insertion
  },
  {
    name: {
      first: "jenny",
      last: "doyle",
    },
    age: 60,
    type: "silver",
    items_purchased: ["cosmetics"],
    payments: {
      cash: "dollars",
    },
    //date insertion
  },
  {
    name: {
      first: "ramesh",
      last: "kumar",
    },
    age: 30,
    type: "platinum",
    items_purchased: ["cosmetics", "life-n-style", "general"],
    payments: {
      cash: "dollars",
      cards: ["master-card", "visa"],
    },
    //date insertion
  },
];

var date = new Date();
var customer2 = {
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
};
