# Closure

- In JavaScript, a closure is a function that retains access to the variables and parameters of its outer function even after the outer function has returned. This is possible because JavaScript has lexical scoping, which means that inner functions have access to the variables and parameters of their outer functions.

*Example*
```javascript
function outerFunction(x) {
  let outerVariable = x;

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closure = outerFunction(10);
closure(); // Output: 10
```
- In this example, the innerFunction has access to the outerVariable even after the outerFunction has returned. This is because the innerFunction is a closure, and it retains access to the variables and parameters of its outer function.
- Closures in JavaScript are often used to create private variables and methods.

*Example*
```javascript
function createCounter() {
  let count = 0;

  return {
    increment: function() {
      count++;
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();
counter.increment();
console.log(counter.getCount()); // Output: 1

```
- In this example, the `increment` and `getCount` functions are `closures` that retain access to the `count` variable even after the `createCounter` function has returned. This allows the count variable to be private, as it can only be modified or accessed through the increment and getCount functions.







### Challenge 1
>Create a function `createFunction` that creates and returns a function. When that created function is called, it should print "hello". When you think you completed `createFunction`, un-comment out those lines in the code and run it to see if it works.
```javascript
function createFunction() {
    return function () {
        console.log('hello')
    }
}

// /*** Uncomment these to check your work! ***/
const function1 = createFunction();
function1(); // => should console.log('hello');

```

### Challenge 2
> Create a function `createFunctionPrinter` that accepts one input and returns a function. When that created function is called, it should print out the input that was used when the function was created.
```javascript
function createFunctionPrinter(input) {
    return function () {
        console.log(input)
    }
}

// /*** Uncomment these to check your work! ***/
const printSample = createFunctionPrinter('sample');
printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter('hello');
printHello(); // => should console.log('hello');


```
### Challenge 3
> Examine the code for the outer function. Notice that we are returning a function and that function is using variables that are outside of its scope.
>Uncomment those lines of code. Try to deduce the output before executing.

```javascript
function outer() {
    let counter = 0; // this variable is outside incrementCounter's scope
    function incrementCounter() {
        counter++;
        console.log('counter', counter);
    }
    return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

willCounter();
willCounter();
willCounter();

jasCounter();
willCounter();
```
>```javascript
>counter 1
>counter 2
>counter 3
>counter 1
>counter 4
>```
-  Now we are going to create a function addByX that returns a function that will add an input by x.
```javascript

function addByX(x) {
    return function (input) {
        return x + input
    }
}
```
### Challenge 4
>Write a function `once` that accepts a `callback` as input and returns a function. When the returned function is called the `first` time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.
```javascript

const once = (callback) => {
    let count = 0;
    let numberToSave = 0;
    return function(num){
        count++;
        if(count === 1){
            numbertoSave = callback(num)
        }
        return numberToSave;
    }
}

```
### Challenge 5
>Write a function `after` that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.




### Challenge 6
>Write a function delay that accepts a callback as the first parameter and the wait in milliseconds before allowing the callback to be invoked as the second parameter. Any additional arguments after wait are provided to func when it is invoked. HINT: research setTimeout();
### Challenge 7
>Write a function rollCall that accepts an array of names and returns a function. The first time the returned function is invoked, it should log the first name to the console. The second time it is invoked, it should log the second name to the console, and so on, until all names have been called. Once all names have been called, it should log 'Everyone accounted for'.
```javascript
function rollCall(names) {
    let count = 0;
    function innerFunction() {
        if (count === names.length) {
            return console.log('Everyone accounted for')
        }
        console.log(names[ count ])
        count++

    }
    return innerFunction;
}
// /*** Uncomment these to check your work! ***/
const rollCaller = rollCall([ 'Victoria', 'Juan', 'Ruth' ])
rollCaller() // => should log 'Victoria'
rollCaller() // => should log 'Juan'
rollCaller() // => should log 'Ruth'
rollCaller() // => should log 'Everyone accounted for'
```
### Challenge 8
>Create a function `saveOutput` that accepts a function (that will accept one argument), and a string (that will act as a password). `saveOutput` will then return a function that behaves exactly like the passed-in function, except for when the password string is passed in as an argument. When this happens, the returned function will return an object with all previously passed-in arguments as keys, and the corresponding outputs as values.


### Challenge 9
>Create a function `cycleIterator` that accepts an `array`, and returns a `function`. The returned function will accept zero arguments. When first invoked, the returned function will return the first element of the array. When invoked a second time, the returned function will return the second element of the array, and so forth. After returning the last element of the array, the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.
```javascript
function cycleIterator(array) {
    let counter = 0;

    function innerFunction() {
        if (counter === array.length) {
            counter = 0;
        }
        let cache = array[ counter ];
        counter++;
        return cache;
        //return element of array 
        //if end is reached, restart 
    }
    return innerFunction;
}


// /*** Uncomment these to check your work! ***/
const threeDayWeekend = [ 'Fri', 'Sat', 'Sun' ];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'
```

### Challenge 10
>Create a function `defineFirstArg` that accepts a function and an argument. Also, the function being passed in will accept at least one argument. `defineFirstArg` will return a new function that invokes the passed-in function with the passed-in argument as the passed-in function's first argument. Additional arguments needed by the passed-in function will need to be passed into the returned function.
```javascript
function defineFirstArg(func, arg) {

    function innerFunction(...args) {
        //invokes the passed-in function with the passed-in arguments as 1st argument 
        let result = func(arg, ...args)
        //Additional arguments needed by passed-in function will need to be passed into returned funciton
        return result;
    }
    return innerFunction;
}

// /*** Uncomment these to check your work! ***/
const subtract = function (big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // => should log 15
```
### Challenge 11
> Create a function `dateStamp` that accepts a function and returns a function. The returned function will accept however many arguments the passed-in function accepts, and return an `object` with a `date` key that contains a timestamp with the time of invocation, and an output key that contains the result from invoking the passed-in function. HINT: You may need to research how to access information on `Date` objects.

### Challenge 12
 >Create a function `censor` that accepts no arguments. `censor` will return a function that will accept either two strings, or one string. When `two` strings are given, the returned function will hold onto the two strings as a pair, for future use. When `one` string is given, the returned function will return the same string, except all instances of first strings (of saved pairs) will be replaced with their corresponding second strings (of those saved pairs).
### Challenge 13
>There's no such thing as private properties on a JavaScript object! But, maybe there are? Implement a function `createSecretHolder(secret)` which accepts any value as secret and returns an object with ONLY two methods. `getSecret()` which returns the secret `setSecret()` which sets the secret
```javascript
function createSecretHolder(secret){
    //Declare a private variable to hold the secret
    let _secret = secret;

    //Return an object with getSecret and setSecret methods
    return {
        getSecret: function(){
            return _secret;
        },
        setSecret: function(newSecret){
            _secret = newSecret;
        }
    }
}
/*** Uncomment these to check your work! ***/
obj = createSecretHolder("my secret");
console.log(secretHolder.getSecret()); // 'my secret'
secretHolder.setSecret('new secret')
console.log(secretHOlder.getSecret());//'new secret'


```
### Challenge 14
>Write a function, `callTimes`, that returns a new function. The new function should return the number of times it’s been called.

### Challenge 15
>Create a function `roulette` that accepts a number (let us call it `n`), and returns a function. The returned function will take no arguments, and will return the string 'spin' the first `n - 1` number of times it is invoked. On the very next invocation (the `nth` invocation), the returned function will return the string 'win'. On every invocation after that, the returned function returns the string 'pick a number to play again'.
```javascript
function roulette(n){
    let counter = 0;
    
    function innerFunction(){
        counter ++;
        if(counter <n){
            return 'spin'
        }else if(counter === n){
            return 'win'
        }else{
            return 'pick a number to play again'
        }
    }
    return innerFunction
// /*** Uncomment these to check your work! ***/
const play = roulette(3);
console.log(play()); // => should log 'spin'
console.log(play()); // => should log 'spin'
console.log(play()); // => should log 'win'
console.log(play()); // => should log 'pick a number to play again'
console.log(play()); // => should log 'pick a number to play again'
}


```
### Challenge 16 : average
>Create a function `average` that accepts no arguments, and returns a function (that will accept either a number as its lone argument, or no arguments at all). When the returned function is invoked with a number, the output should be average of all the numbers have ever been passed into that function (duplicate numbers count just like any other number). When the returned function is invoked with no arguments, the `current average` is outputted. If the returned function is invoked with no arguments before any numbers are passed in, then it should return `0`.
```javascript
function average() {
    let count = 0;
    let total = 0;

    function inner(num = null) {
        if (num !== null) {
            count++;
            total += num;
            return total / count;
        } else if (count === 0) {
            return 0;
        } else {
            return total / count;
        }
    }
    return inner
}

// /*** Uncomment these to check your work! ***/
const avgSoFar = average();
console.log(avgSoFar()); // => should log 0
console.log(avgSoFar(4)); // => should log 4
console.log(avgSoFar(8)); // => should log 6
console.log(avgSoFar()); // => should log 6
console.log(avgSoFar(12)); // => should log 8
console.log(avgSoFar()); // => should log 8
```
### Challenge 17: makeFuncTester
>Create a function `makeFuncTester` that accepts an array (of two-element sub-arrays), and returns a function (that will accept a callback). The returned function should return `true` if the first elements (of each sub-array) being passed into the callback all yield the corresponding second elements (of the same sub-array). Otherwise, the returned function should return `false`.
```javascript 
function makeFuncTester(arrOfTests) {
    //Accepts array of two-element sub-arrays 
    function innerFunction(cb) {
        //If 1st elements of each sub array passed into the callback, 
        for (sub in arrOfTests) {
            let result = cb(arrOfTests[ sub ][ 0 ])
            if (result !== arrOfTests[ sub ][ 1 ]) {
                return false;
            }
        }
        return true;
        // Yield the same value as the second element in respective sub-arrays,
        //Return true 

    }
    return innerFunction;
}

// /*** Uncomment these to check your work! ***/
const capLastTestCases = [];
capLastTestCases.push([ 'hello', 'hellO' ]);
capLastTestCases.push([ 'goodbye', 'goodbyE' ]);
capLastTestCases.push([ 'howdy', 'howdY' ]);
const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
const capLastAttempt1 = str => str.toUpperCase();
const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true
```
## Challenge 18: makeHistory
>Create a function `makeHistory` that accepts a `number` (which will serve as a `limit`), and returns a function (that will accept a `string`). The returned function will save a history of the most recent "limit" number of strings passed into the returned function (one per invocation only). Every time a `string` is passed into the function, the function should return that same string with the word '`done`' after it (separated by a space). However, if the string '`undo`' is passed into the function, then the function should delete the last action saved in the history, and return that deleted string with the word '`undone`' after (separated by a space). If '`undo`' is passed into the function and the function's history is *empty*, then the function should return the string '`nothing to undo`'.

```javascript
function makeHistory(limit) {
  const history = [];

  return function(string) {
    if (string === 'undo') {
      if (history.length === 0) {
        return 'nothing to undo';
      } else {
        const lastAction = history.pop();
        return `${lastAction} undone`;
      }
    } else {
      history.push(string);
      return `${string} done`;
    }
  }
}


```


### Challenge 19: blackjack
>Inspect the commented out test cases carefully if you need help to understand these instructions.

>Create a function `blackjack` that accepts an array (which will contain numbers ranging from 1 through 11), and returns a DEALER function. The DEALER function will take two arguments (both numbers), and then return yet ANOTHER function, which we will call the PLAYER function.

>On the FIRST invocation of the PLAYER function, it will return the sum of the two numbers passed into the DEALER function.

>On the SECOND invocation of the PLAYER function, it will return either:

1. the first number in the array that was passed into blackjack PLUS the sum of the two numbers passed in as arguments into the DEALER function, IF that sum is 21 or below, OR
2. the string 'bust' if that sum is over 21.

> If it is 'bust', then every invocation of the PLAYER function AFTER THAT will return the string 'you are done!' (but unlike 'bust', the 'you are done!' output will NOT use a number in the array). If it is NOT 'bust', then the next invocation of the PLAYER function will return either:

1. the most recent sum plus the next number in the array (a new sum) if that new sum is 21 or less, OR
the string 'bust' if the new sum is over 21.

2. And again, if it is 'bust', then every subsequent invocation of the PLAYER function will return the string 'you are done!'. Otherwise, it can continue on to give the next sum with the next number in the array, and so forth.
You may assume that the given array is long enough to give a 'bust' before running out of numbers.

> BONUS: Implement blackjack so the DEALER function can return more PLAYER functions that will each continue to take the next number in the array after the previous PLAYER function left off. You will just need to make sure the array has enough numbers for all the PLAYER functions.
```javascript
function blackjack(array) {
    let dealerCount = 0;
    function dealer(a, b) {
        let playerCount = 0;
        let total = a + b;
        function player() {
            if (total === "bust") return "you are done!";
            dealerCount++;
            playerCount++;
            if (playerCount === 1) return total;
            total += array[ dealerCount - 2 ];
            if (total > 21) {
                total = "bust";
                dealerCount--;
            }
            return total;
        }
        return player;
    }
    return dealer;
}
const deal = blackjack([ 2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11 ]);

/*** PLAYER 1 ***/
const i_like_to_live_dangerously = deal(4, 5);
console.log(i_like_to_live_dangerously()); // => should log 9
console.log(i_like_to_live_dangerously()); // => should log 11
console.log(i_like_to_live_dangerously()); // => should log 17
console.log(i_like_to_live_dangerously()); // => should log 18
console.log(i_like_to_live_dangerously()); // => should log 'bust'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
```