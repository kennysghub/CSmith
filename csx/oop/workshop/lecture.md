# Classes and Prototypes

### Objects - store functions with their associated data!
- This is a principle of encapsulation.
- What alternative techniques do we have for creating objects?

```javascript
const user1 = {
    name: "Will",
    score: 3,
    increment: function() {
        user1.score++;
    }
}
user1.increment(); //user1.score => 4
```

### Creating user2 using **dot** notation
- Declare an emtpy object
- Ad properties with dot notation
  
```javascript 
const user2 = {}; //Create an empty object

// Assign properties to that object 
user2.name = "Tim";
user2.score = 6;
user2.increment = function(){
    user2.score++
}
```

### Creating user3 using Object.create
-Object.create is going to give us fine-grained contorl over our object later on 
- We're breaking our *DRY* principle 

```javascript
const user3 = Object.create(null);

user3.name = "Eva";
user3.score = 9;
user3.increment = function() {
    user3.score++;
}
```
> ```javascript
> `Global Memory`
>user1: {
>    name:will
>    score:3
>    increment: function
>}
>user2: {
>    name:tim
>    score: 6
>    increment: function
>}
>user3: {
>    name:Eva
>    score:9
>    increment:function
>}
>```

## Soution 1. Generate objects using a function

```javascript
function userCreator (name,score){
    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.increment = function(){
        newUser.score++;
    }
    return newUser;
}
const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment()
```
- `Problems`: Each time we create a new user we make space in our computer's memory for all our data and functions. But our functions are just copies. There is  a better way.
- `Pros`: Simple 

## Solution 2: Using the prototype chain
```javascript
function userCreator(name,score){
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
}
const userFunctionStore = {
    increment: function(){this.score++;}
    login: function(){console.log("Loggied in")}
}
const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment();
```
- `this` is whereever this method was ran from 

## Solution 3 - Introducing the keyword that automates the hard work : **new**

```javascript
const user1 = new userCreator("Eva", 9)
```

1. Create a new 

```javascript
function mutiplyeBy2(num){
    return num*2
}
multiplyBy2.stored = 5
multiplyBy2(3) //6

multiplyBy2.stored
multiplyBy2.prototype // {}
```
>All functions have a default property on their object version, `prototype`, which is itself an `object` - to replace our functionStore Object

Be careful with using arrow functions and *this* keyword

```javascript 
function userCreator(name,score){
    this.name = name;
    this.score = score;
}

userCreator.prototype.increment  = function() {
    this.score++;
}
userCreator.prototype.login = function(){

}
const user1 = new userCreator("Eva", 9)
user1.increment
```


## Solution 4: The class 'syntactic sugar' 
```javascript
class UserCreator {
constructor (name, score) {
    this.name = name;
    this.score = score;
}
increment {
    this.score++
}
login () {
    console.log("login");
7
const user1 = new UserCreator ("Eva", 9) ;
user1. increment () ;
```
