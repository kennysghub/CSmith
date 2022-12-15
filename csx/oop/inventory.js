function Inventory(item, price) {
    this[ item ] = {
        price: price,
        quantity: 1,
    }
}

Inventory.prototype.addItem = function (item, price) {
    if (this[ item ]) {
        this[ item ].quantity++;
    }
    console.log(item)
}

Inventory.prototype.deleteItem = function (string) {

}

Inventory.prototype.checkItem = function (string) {
    if (Inventory[ string ]) {
        return this[ item ]
    }
}

const myInventory = new Inventory('cucumber', 2);

// Uncomment these lines to check your work!
myInventory.addItem('carrot', 1);
console.log(myInventory.checkItem('cucumber')); // Logs: { price: 2, quantity: 1 }
myInventory.addItem('cucumber', 3);
console.log(myInventory.checkItem('cucumber'));

console.log(myInventory.deleteItem('carrot')); // Logs: 'Deleted'
console.log(myInventory.deleteItem('carrot')); // Logs: 'Nothing to delete'
console.log(myInventory); // Logs: { cucumber: { price: 3, quantity: 2 }, carrot: { price: 1, quantity: 0 } }
console.log(myInventory.checkItem('radish')); // Logs: 'Item is not in inventory'
