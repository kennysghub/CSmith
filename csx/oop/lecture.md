```javascript 
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

```

1. First line we declare a fuinction UserCreator in global memory, but it also is an object.
   - on this UserCreator's object's form, it has an autopopulated property called ==prototype==, and it's value is an object as well. 
2. Next line we hit -> UserCreator.prototype.increment 
   - Javascript looks for UserCreator in global memory and finds it. JS sees the DOT . after UserCreator and knows that we are trying to access the OBJECT form of UserCreator. So it doesn't go to the function definition of UserCreator but instead it goes to the prototype property on the UserCreator's object form and then adds an increment method to that object. Then adds the **method** to that object. 
3. Next line (login) we add login to the prorotype object. 
4. Next line we are creating a constant named user1 and assigning it to the evaluated result of  new Object created from UserCreator which has the arguments ("Eva", 9)
5. Of course this creates a new execution context 
    - TWO automatic things happen when we use the - new - keyword.
    1. Creating a new object in local memory and automatically assigns it to *this*
    2. It has the dunder __proto__ points to the prototype object's of the Object Form of the Function ->  UserCreator which we are currently executing.



**Challenge: Dog Constructor**
- Declare a function `Dog` that creates a new instance of a `Dog` object when invoked with the `new` keyword. Each `Dog` object should have a `name` property and a `breed` property, both strings which are passed in as arguments when calling the Dog function. It should also have a property called `tricks`, set to an array representing all the `tricks` that dog knows. When a new object is initiated, tricks should be empty.
- All of your `Dog` objects must also have access to two methods that are stored on the constructor's `prototype`:
- The first method, `learnTrick`, should take in a string as an argument and add that string to the `tricks` array of the particular Dog object it was called on.
- The second method, `performTrick`, should also take a string as an argument. It should check to see if that string is in the `tricks` array belonging to the Dog `instance` it was called on; if so, it should log the string '`name` performed trick!' If not, log the string '`name` doesn't know that trick.


**Challenge Inventory**
Given Code:
```javascript
function Inventory(item, price) {
  // add code here
  
}

const myInventory = new Inventory('cucumber', 2);

// Uncomment these lines to check your work!
myInventory.addItem('carrot', 1);
console.log(myInventory.checkItem('cucumber')); // Logs: { price: 2, quantity: 1 }
myInventory.addItem('cucumber', 3); 
console.log(myInventory.deleteItem('carrot')); // Logs: 'Deleted'
console.log(myInventory.deleteItem('carrot')); // Logs: 'Nothing to delete'
console.log(myInventory); // Logs: { cucumber: { price: 3, quantity: 2 }, carrot: { price: 1, quantity: 0 } }
console.log(myInventory.checkItem('radish')); // Logs: 'Item is not in inventory'

```
-Declare a function Inventory that, when invoked with the new keyword, returns objects that keep track of an inventory. Your Inventory function should accept two arguments: item, a string, and price, a number. The object returned should contain a property whose key matches the passed-in item argument, and is set to another object with two properties: price (which will be set to the price argument the method was called with) and quantity, which should be initially set to 1.

-Each object returned from this Inventory constructor should, via the prototype chain, have access to three methods:

-The method addItem will add additional items to the object returned from the constructor. It should also accept an item and price argument, and when invoked, should check to see if the Inventory object it is called upon has a property that matches the passed-in item name. If it does not, add one, and set it to another item object, following the same format as above. If the Inventory object does have a property with that name, increment that item's quantity property by one, and replace the price with whatever number was just passed in.

-The method deleteItem should accept a string as an argument. If a matching property exists on the Inventory object, decrement its quantity by 1 and return the string 'Deleted'. If the quantity is already 0, return the string 'Nothing to delete'.

-The method checkItem should take a string as an argument and check to see whether that string exists as a property on the Inventory object. If so, return the object for that item. If not, return the string 'Item is not in inventory'.


