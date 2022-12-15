// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');

let nums = [ 1, 2, 3 ];

// Challenge 1
function addTwo(num) {
    return num + 2;
}

// To check if you've completed it, uncomment these console.logs!we
console.log(addTwo(3));
console.log(addTwo(10));


// Challenge 2
function addS(word) {
    return word + 's'
}

// uncomment these to check your work
console.log(addS('pizza'));
console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
    let newArr = [];
    for (let index in array) {
        newArr.push(callback(array[ index ]))
    }
    return newArr;
}

console.log(map([ 1, 2, 3 ], addTwo));


// Challenge 4
function forEach(array, callback) {
    for (let index in array) {
        callback(array[ index ])
    }
}

// see for yourself if your forEach works!
forEach([ 'a', 'b', 'c' ], i => console.log(i))//undefined because doesn't return anything

// Challenge 5
function mapWith(array, callback) {
    const resultsArr = [];
    forEach(array, function (element) {
        resultsArr.push(callback(element));
    })
    return resultsArr;

}

console.log(mapWith([ 1, 2, 3 ], n => n + 5))
//

// Challenge 6
function reduce(array, callback, initialValue) {

    let accumulator = initialValue;

    forEach(array, function (element) {
        accumulator = callback(accumulator, element)
    })

    return accumulator;

}

const add = function (a, b) { return a + b; }

console.log(reduce([ 4, 1, 3 ], add, 0)) // -> 8......   (0,4) add (4,1) add (5,3) => 8

// Challenge 7
function intersection(arrayOfArrays) {
    //Set accumulator to initialValue usually , arrays.pop() gets the first val of array 
    let accumulator = arrayOfArrays.pop()
    while (arrayOfArrays.length) {
        const current = arrayOfArrays.pop();
        const newArr = [];

        forEach(current, function (element) {
            if (accumulator.includes(element)) {
                newArr.push(element);
            }
        })
        accumulator = newArr;
    }
    return accumulator;
}

console.log(intersection([ [ 5, 10, 15, 20 ], [ 15, 88, 1, 5, 7 ], [ 1, 10, 15, 5, 20 ] ]));// should log: [5, 15]

// Challenge 8
function union(arrays) {
    return arrays.reduce((accumulator, array) => {
        array.forEach(element => {
            if (!accumulator.includes(element)) {
                accumulator.push(element);
            }
        })
        return accumulator
    }, [])
}

console.log(union([ [ 5, 10, 15 ], [ 15, 88, 1, 5, 7 ], [ 100, 15, 10, 1, 5 ] ]));
// should log: [5, 10, 15, 88, 1, 7, 100]






// Challenge 9
function objOfMatches(array1, array2, callback) {
    const obj = {};
    //Iterate over first array using cb to see if output matches corresponding indexed element of 2nd arr 
    // for (let element in array1) {
    //     let result = callback(array1[ element ])
    //     if (result === array2[ element ]) {
    //         obj[ array1[ element ] ] = array2[ element ]
    //     }
    // }
    return obj;
    //if match, element 1st arr becomes key in object 

    //element from 2nd arr becoems the corresponding value 
}

console.log(objOfMatches([ 'hi', 'howdy', 'bye', 'later', 'hello' ], [ 'HI', 'Howdy', 'BYE', 'LATER', 'hello' ], function (str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// Challenge 10
function multiMap(arrOfValues, arrOfCallbacks) {
    // Create an empty result object
    const result = {};

    // Iterate over the arrOfValues
    for (let i = 0; i < arrOfValues.length; i++) {
        const value = arrOfValues[ i ];

        // Create an empty array to store the outputs from the arrOfCallbacks
        result[ value ] = [];

        // Iterate over the arrOfCallbacks
        for (let j = 0; j < arrOfCallbacks.length; j++) {
            const callback = arrOfCallbacks[ j ];

            // Apply the current callback to the current value and store the result in the result array
            result[ value ].push(callback(value));
        }
    }

    // Return the result object
    return result;
}
console.log(multiMap([ 'catfood', 'glue', 'beer' ], [ function (str) { return str.toUpperCase(); }, function (str) { return str[ 0 ].toUpperCase() + str.slice(1).toLowerCase(); }, function (str) { return str + str; } ]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }







// Challenge 11
function objectFilter(obj, callback) {
    //new object will contain only the properties from the input obj such that the property's value is equal to the property's key passed into the callback
    const newObj = {};
    for (key in obj) {
        let result = callback(obj[ key ])
        if (result === obj[ key ]) {
            newObj[ obj[ key ] ] = result
        }
    }
    return newObj;
}

const cities = {
    London: 'LONDON',
    LA: 'Los Angeles',
    Paris: 'PARIS',
};
console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}


// Challenge 12
function majority(array, callback) {
    //iterate through array and perfm cb on each element 
    let trueCount = 0;
    let falseCount = 0;

    array.forEach(element => {
        if (callback(element)) {
            trueCount++;
        } else {
            falseCount++;
        }
    })
    if (trueCount > falseCount) {
        return true;
    }
    return false;

}

// /*** Uncomment these to check your work! ***/
const isOdd = function (num) { return num % 2 === 1; };
console.log(majority([ 1, 2, 3, 4, 5 ], isOdd)); // should log: true
console.log(majority([ 2, 3, 4, 5 ], isOdd)); // should log: false


// Challenge 13
function prioritize(array, callback) {
    //iterate through array and perform callback on each element and return new Array 
    let trueArray = [];
    let falseArray = [];


    array.forEach((element) => {
        let result = callback(element)

        if (result === true) {
            trueArray.push(element)
        } else {
            falseArray.push(element)
        }
    })
    //true elements come first 
    return trueArray.concat(falseArray);
    //rest of the elements come second 
}

// /*** Uncomment these to check your work! ***/
const startsWithS = function (str) { return str[ 0 ] === 's' || str[ 0 ] === 'S'; };
console.log(prioritize([ 'curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends' ], startsWithS)); // should log:
// [ 'seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends' ]


// Challenge 14
function countBy(array, callback) {
    const obj = {};

    array.forEach(element => {
        const key = callback(element)
        if (!obj[ key ]) {
            obj[ key ] = 0;
        }
        obj[ key ]++;
    })
    return obj;
}

// /*** Uncomment these to check your work! ***/
console.log(countBy([ 1, 2, 3, 4, 5 ], function (num) {
    if (num % 2 === 0) return 'even';
    else return 'odd';
})); // should log: { odd: 3, even: 2 }


// Challenge 15
function groupBy(array, callback) {

}

// /*** Uncomment these to check your work! ***/
// const decimals = [1.3, 2.1, 2.4];
// const floored = function(num) { return Math.floor(num); };
// console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }


// Challenge 16
function goodKeys(obj, callback) {

}

// /*** Uncomment these to check your work! ***/
// const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
// const startsWithBird = function(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
// console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']


// Challenge 17
function commutative(func1, func2, value) {

}

// /*** Uncomment these to check your work! ***/
// const multBy3 = n => n * 3;
// const divBy4 = n => n / 4;
// const subtract5 = n => n - 5;
// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false


// Challenge 18
function objFilter(obj, callback) {

}

// /*** Uncomment these to check your work! ***/
// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = n => n / 2;
// console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }


// Challenge 19
function rating(arrOfFuncs, value) {

}

// /*** Uncomment these to check your work! ***/
// const isEven = n => n % 2 === 0;
// const greaterThanFour = n => n > 4;
// const isSquare = n => Math.sqrt(n) % 1 === 0;
// const hasSix = n => n.toString().includes('6');
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75


// Challenge 20
function pipe(arrOfFuncs, value) {

}

// /*** Uncomment these to check your work! ***/
// const capitalize = str => str.toUpperCase();
// const addLowerCase = str => str + str.toLowerCase();
// const repeat = str => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'


// Challenge 21
function highestFunc(objOfFuncs, subject) {

}

// /*** Uncomment these to check your work! ***/
// const groupOfFuncs = {};
// groupOfFuncs.double = n => n * 2;
// groupOfFuncs.addTen = n => n + 10;
// groupOfFuncs.inverse = n => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'


// Challenge 22
function combineOperations(startVal, arrOfFuncs) {

}

function add100(num) {
    return num + 100;
}

function divByFive(num) {
    return num / 5;
}

function multiplyByThree(num) {
    return num * 3;
}

// /*** Uncomment these to check your work! ***/
// console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
// console.log(combineOperations(0, [divByFive, multiplyFive, addTen])); // Should output 10


// Challenge 23
function myFunc(array, callback) {

}

const numbers = [ 2, 3, 6, 64, 10, 8, 12 ];
const evens = [ 2, 4, 6, 8, 10, 12, 64 ];

// function isOdd(num) {
//     return (num % 2 !== 0);
// }

// /*** Uncomment these to check your work! ***/
// console.log(myFunc(numbers, isOdd)); // Output should be 1
// console.log(myFunc(evens, isOdd)); // Output should be -1


// Challenge 24
function myForEach(array, callback) {

}

let sum = 0;

function addToSum(num) {
    sum += num;
}

// /*** Uncomment these to check your work! ***/
// const nums = [1, 2, 3];
// myForEach(nums, addToSum);
// console.log(sum); // Should output 6
