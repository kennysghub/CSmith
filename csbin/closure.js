// CHALLENGE 1
function createFunction() {
    return function () {
        console.log('hello')
    }
}

// /*** Uncomment these to check your work! ***/
const function1 = createFunction();
function1(); // => should console.log('hello');


// CHALLENGE 2
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


// CHALLENGE 3
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

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
willCounter();
willCounter();
willCounter();

jasCounter();
willCounter();


function addByX(x) {
    //returns a function that will add an input by x 
    return function (input) {
        return x + input
    }
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
addByTwo(1); // => should return 3
addByTwo(2); // => should return 4
addByTwo(3); // => should return 5

const addByThree = addByX(3);
addByThree(1); // => should return 4
addByThree(2); // => should return 5

const addByFour = addByX(4);
addByFour(4); // => should return 8
addByFour(5); // => should return 9


// CHALLENGE 4
// ADD CODE HERE
const once = (callback) => {
    let count = 0;
    let numberToSave = 0;
    return function (num) {
        count++;
        if (count === 1) {
            numberToSave = callback(num)
        }
        return numberToSave;
    }
}

// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
console.log(onceFunc(4));  // => should log 6
console.log(onceFunc(10));  // => should log 6
console.log(onceFunc(9001));  // => should log 6


// CHALLENGE 5
function after(count, func) {
    let counter = 0;
    function inner() {
        counter++;
        if (counter === count) {
            func();
        }
    }
    return inner;
}

// /*** Uncomment these to check your work! ***/
const called = function () { console.log('hello') };
const afterCalled = after(3, called);
afterCalled(); // => nothing is printed
afterCalled(); // => nothing is printed
afterCalled(); // => 'hello' is printed


// CHALLENGE 6
function delay(func, wait) {
    setTimeout(func, wait)
}


// CHALLENGE 7
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


// CHALLENGE 8
function saveOutput(func, magicWord) {
    //create an object
    const obj = {};

    function innerFunction(word) {
        if (word !== magicWord) {
            obj[ word ] = func(word)
        } else if (word === magicWord) {
            return obj
        }
        //return object with inputs to callback as keys and outputs as values 
    }
    return innerFunction;
}

// /*** Uncomment these to check your work! ***/
const multiplyBy2 = function (num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // => should log 4
console.log(multBy2AndLog(9)); // => should log 18
console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }


// CHALLENGE 9
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


// CHALLENGE 10
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


// CHALLENGE 11
function dateStamp(func) {

}

// // /*** Uncomment these to check your work! ***/
// const stampedMultBy2 = dateStamp(n => n * 2);
// console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }


// CHALLENGE 12
function censor() {
    let cache = {};
    function innerFunction(string1, string2) {
        //Two strings given: hold onto the two strings as pair 
        if (string2) {
            cache[ string1 ] = string2;
            return;
        }
        Object.keys(cache).forEach(key => {
            string1 = string1.replace(key, cache[ key ])
        })
        return string1
        //One string given: reutrn same string, except, all string1s of saved pairs will be replaced with their corresponding second strings of those saved pairs 
    }
    return innerFunction;
}

// /*** Uncomment these to check your work! ***/
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'


// CHALLENGE 13
// function createSecretHolder(secret) {
//     //Create an object 
//     let cache = secret
//     //Returns an object with ONLY two methods. 
//     return {
//         getSecret: function () {
//             return cache;
//         },
//         setSecret: function (input) {
//             let cache = input
//             return cache;
//         }
//     }
//     //getSecret() which returns the secret -> getSecret() which sets the secret 
// }
function createSecretHolder(secret) {
    // Declare a private variable to hold the secret
    let _secret = secret;

    // Return an object with getSecret and setSecret methods
    return {
        getSecret: function () {
            return _secret;
        },
        setSecret: function (newSecret) {
            _secret = newSecret;
        }
    }
}

const secretHolder = createSecretHolder('my secret');

console.log(secretHolder.getSecret()); // 'my secret'

secretHolder.setSecret('new secret');

console.log(secretHolder.getSecret()); // 'new secret'





// /*** Uncomment these to check your work! ***/
obj = createSecretHolder(5)
console.log(obj.getSecret()) // => returns 5
obj.setSecret(2)
obj.getSecret() // => returns 2


// CHALLENGE 14
function callTimes() {
    let counter = 0;
    function innerFunction() {
        //Return the number of times innerFunction has been called 
        counter++;
        return counter;
    }
    return innerFunction;
}

// /*** Uncomment these to check your work! ***/
let myNewFunc1 = callTimes();
let myNewFunc2 = callTimes();
myNewFunc1(); // => 1
console.log(myNewFunc1()); // => 2
myNewFunc2(); // => 1
myNewFunc2(); // => 2
console.log(myNewFunc2()) //=> 3

// CHALLENGE 15
function roulette(n) {
    //Counter records the number of times innerFunction has been invoked 
    let counter = 0;
    function innerFunction() {
        //Return the string "spin" the first (n-1) number of times it's invoked 
        counter++;
        if (counter < n) {
            return 'spin'
        } else if (counter === n) {

            return 'win'
        } else {
            return 'pick a number to play again';
        }


        //On the next invocation(the nth invocation),
        //The returned function will return the string "win"
        //On every invocation after that, the returned function returns "pick a number to play again"
    }
    return innerFunction;
}

// /*** Uncomment these to check your work! ***/
const play = roulette(3);
console.log(play()); // => should log 'spin'
console.log(play()); // => should log 'spin'
console.log(play()); // => should log 'win'
console.log(play()); // => should log 'pick a number to play again'
console.log(play()); // => should log 'pick a number to play again'


// CHALLENGE 16
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

console.log("____________________")
// CHALLENGE 17
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


// CHALLENGE 18
function makeHistory(limit) {
    let newArr = [];
    newArr.length = limit;
    let len = newArr[ limit ]
    function innerFunction(string) {
        //Save a history of the most recent "limit" number of strings passed in 
        if (string !== "undo") {
            newArr.push(string)
            //Everytime a string is passed in, ->return same string + "done" 
            return string + " done";
        } else if (string === "undo") {
            if (newArr.length === 0) {
                return "nothing to undo"
            }
            else if (newArr.length) {
                let cache = newArr.pop()
                newArr.pop()
                return cache + " undone"
            }
        }
        //BUT, if "undo" is passed in, delete the last string saved in history by 
        //Returning that string + "undone" 
        //BUT, if "undo" is passed into the function and history is empty, 
        //Return "nothing to undo" 
    }
    return innerFunction;
}

/*** Uncomment these to check your work! ***/
const myActions = makeHistory(2);
console.log(myActions('jump')); // => should log 'jump done'
console.log(myActions('undo')); // => should log 'jump undone'
console.log(myActions('walk')); // => should log 'walk done'
console.log(myActions('code')); // => should log 'code done'
console.log(myActions('pose')); // => should log 'pose done'
console.log(myActions('undo')); // => should log 'pose undone'
console.log(myActions('undo')); // => should log 'code undone'
console.log(myActions('undo')); // => should log 'nothing to undo'












// CHALLENGE 19
function blackjack(array) {
    //Rounds variable to track number of rounds 
    let rounds = 0;
    function dealer(card1, card2) {//i_live_dangerously 

        function player() {
            //1st player call: return sum of two numbers passed into DEALER 
            rounds++;
            let sumRoundOne = card1 + card2;
            if (rounds === 0) {
                rounds++;
                return sumRoundOne;
                //2nd player call: return either
            } else if (rounds > 0) {
                rounds++;
                //A) 1st number in the array passed into blackjack + sum of two numbers passed into DEALER if sum < 21
                if (sumRoundOne + array[ rounds - 2 ] <= 21) {
                    let someRound = sumRoundOne + array[ rounds - 2 ]
                    rounds++;
                    return someRound;
                } else if (sumRoundOne + array[ rounds - 2 ] > 21) {
                    rounds++;
                    return 'bust'
                }

            }
            //Next player call will return either: 
            //Recent sum + next number in array etc... 

            //B) return "bust" if sum > 21
            //If "bust" then every player call after that returns "you are done!"
            // ->Will not use a number in the array 
        }
        return player;
    }
    return dealer;
}

// /*** Uncomment these to check your work! ***/

/*** DEALER ***/
const deal = blackjack([ 2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11 ]);
/*** PLAYER 1 ***/
const i_like_to_live_dangerously = deal(4, 5);
console.log(i_like_to_live_dangerously()); // => should log 9 //player call() 
console.log(i_like_to_live_dangerously()); // => should log 11
console.log(i_like_to_live_dangerously()); // => should log 17
console.log(i_like_to_live_dangerously()); // => should log 18
console.log(i_like_to_live_dangerously()); // => should log 'bust'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
// const i_TOO_like_to_live_dangerously = deal(2, 2);
// console.log(i_TOO_like_to_live_dangerously()); // => should log 4
// console.log(i_TOO_like_to_live_dangerously()); // => should log 15
// console.log(i_TOO_like_to_live_dangerously()); // => should log 19
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

// /*** PLAYER 3 ***/
// const i_ALSO_like_to_live_dangerously = deal(3, 7);
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!

