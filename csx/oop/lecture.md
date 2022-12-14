// - new - keyword 

function UserCreator(name, score) {
    this.name = name;
    this.score = score;
}

UserCreator.prototype.increment = function () {
    this.score++;
}

UserCreator.prototype.login = function () {
    console.log("login");
}

const user1 = new UserCreator("Eva", 9);

user1.increment()

//*******************DOG CHALLENGE ******************************* */




function Dog(name, breed) {
    this.name = name;
    this.breed = breed;
    this.tricks = [];
}

Dog.prototype.learnTrick = function (string) {
    this.tricks.push(string)
}
Dog.prototype.performTrick = function (string) {
    if (this.tricks.includes(string)) {
        console.log(`${this.name} performed trick!`)
    } else {
        console.log(`${this.name} doesn't know that trick`)
    }
}

const fido = new Dog('Fido', 'poodle');

fido.learnTrick('fetch');
console.log(fido.tricks)
fido.performTrick('fetch'); // should log 'Fido performed fetch!'
fido.performTrick('sit'); // should log 'Fido doesn't know that trick.'

console.log("Inventory Challenge______")


function Inventory(item, price) {

    this.item = item
    this.price = price


}
Inventory.prototype.addItem = function (item, price) {
    //If Inventory Object that's called does not have property that = item,
    if (!(Inventory.item in Inventory)) {
        // Add item and set it to another item object 
        this.item = item
    }
    if (Inventory.item in Inventory) {
        this.item.quantity++
    }

    //If it does
    //Increment item's quantity property and replace price w/ price number passed in
}
Inventory.prototype.deleteItem = function (string) {
    //If matching property exists on the Inventory object, decrement quantity property 
    //If quantity is 0, return string 'nothing to delete'

}
Inventory.prototype.checkItem = function (string) {
    //If string exists as property on Inventory object
    //Return the object for that item

    //If not, return the string 'Item is not found in inventory'
}
const myInventory = new Inventory('cucumber', 2);
// Uncomment these lines to check your work!
myInventory.addItem('carrot', 1);
myInventory.addItem('cucumber', 1);

console.log(myInventory.checkItem('cucumber')); // Logs: { price: 2, quantity: 1 }
myInventory.addItem('cucumber', 3);
console.log(myInventory.deleteItem('carrot')); // Logs: 'Deleted'
console.log(myInventory.deleteItem('carrot')); // Logs: 'Nothing to delete'
console.log(myInventory); // Logs: { cucumber: { price: 3, quantity: 2 }, carrot: { price: 1, quantity: 0 } }
console.log(myInventory.checkItem('radish')); // Logs: 'Item is not in inventory'