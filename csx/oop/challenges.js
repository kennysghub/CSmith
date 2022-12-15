
// input - item (string) and price (num) output - object 
// returned object should include key with name of item passed in - ex. cucumber
// value of key with name passed in should be another object with 2 properties: 
// price with price passed in as value and quantity initially set to 1 
// ex.  { cucumber: { price: 3, quantity: 2 }, carrot: { price: 1, quantity: 0 } }

function Inventory(item, price) {
    this[ item ] = {
        price: price,
        quantity: 1
    }
}
// each object returned from Inventory constructor should have access to 3 methods 

// method addItem adds additional items to the object returned from constructor 
// addItem accepts 2 arguments: item and price 
// when invoked, addItem checks to see if Inventory object is called upon has the property, if it does, add 1 
// if not, create new property and set it to another item object 
// replace the price with whatever number was passed in 
Inventory.prototype.addItem = function (item, price) {
    if (this[ item ]) {
        this[ item ].quantity += 1;
        this[ item ].price = price;
    } else {
        this[ item ] = {
            price: price,
            quantity: 1
        }
    }
}

Inventory.prototype.deleteItem = function (item) {
    if (this[ item ].quantity >= 1) {
        this[ item ].quantity - 1;
        return 'Deleted'
    } else if (this[ item ].quantity === 0) {
        return 'Nothing to delete'
    } else {
        return 'Item is not in inventory'
    }
}

// method checkItem accepts 1 argument, a string 
// check to see if string exists as a property on the Inventory object 
// if it exists, return the object for that item 
// if not, return the string 'Item is not in inventory'
Inventory.prototype.checkItem = function (item) {
    if (this[ item ]) {
        return this[ item ];
    } else {
        return 'Item is not in inventory'
    }
}
const myInventory = new Inventory('cucumber', 2);


// Uncomment these lines to check your work!
myInventory.addItem('carrot', 1);

console.log(myInventory.checkItem('cucumber')); // Logs: { price: 2, quantity: 1 }
myInventory.addItem('cucumber', 3);
console.log(myInventory.deleteItem('carrot')); // Logs: 'Deleted'
console.log(myInventory.deleteItem('carrot')); // Logs: 'Nothing to delete'
console.log(myInventory); // Logs: { cucumber: { price: 3, quantity: 2 }, carrot: { price: 1, quantity: 0 } }
console.log(myInventory.checkItem('radish')); // Logs: 'Item is not in inventory