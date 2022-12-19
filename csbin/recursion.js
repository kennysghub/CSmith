// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function countdown(n) {
    //Logs every number from n -> 0 
    //Base Case: When n = 0
    if (n === 0) {
        return 1;
    }
    console.log(n)
    //Recursive Case 
    return countdown(n - 1)

}

// To check if you've completed it, uncomment these console.logs!
countdown(5);
countdown(10);




console.log("challenge 2________");
// Challenge 2
function sum(array) {

    //Base Case:
    if (array.length === 0) {
        return 0;
    } else {
        return array[ 0 ] + sum(array.slice(1))
    }

    //Recursive Case:
}


// uncomment these to check your work
console.log(sum([ 1, 1, 1 ])); // -> returns 3
console.log(sum([ 1, 2, 3, 4, 5, 6 ])); // -> returns 21

// Challenge 3
function palindrome(str) {
    str = str.toLowerCase().replace(/[^a-z]/g, "");  // remove punctuation and convert to lower case

    if (str.length <= 1) {  // base case: if the string is empty or has only one character, it is a palindrome
        return true;
    } else if (str[ 0 ] !== str[ str.length - 1 ]) {  // base case: if the first and last characters don't match, it is not a palindrome
        return false;
    } else {
        return palindrome(str.slice(1, -1));  // recursive case: check if the string without the first and last characters is a palindrome
    }
}
let testing = "123456";
console.log(testing.slice(1, -1));

console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
console.log(palindrome("llama mall")); //-> true
console.log(palindrome("jmoney")); //-> false

console.log("___Challenge 4____")
// Challenge 4
// Cannot be divded by any whole number, so for sure odds 
// Can only be divided by 1 and itself 
console.log("__isPrime Challenge__")
let isPrime = (n, i = 2) => {
    //Check if number is less than or equal 2  
    if (n <= 2) {
        //if number is equal to 2 then return true
        return (n == 2) ? true : false;
    }

    //if number is divisible by any number then return false
    if (n % i === 0) {
        return false;
    }

    //if number is greater than square root of the given number this return true
    // it is same as i > Math.sqrt(n)
    // if (i * i > n) {
    if (i > Math.sqrt(n)) {
        return true;
    }

    //call the same function with incremented value of i  
    return isPrime(n, i + 1);
}
// function prime(n){

// }
console.log(Math.sqrt(4));
console.log(isPrime(1)); //-> false
console.log(isPrime(2)); //-> true
console.log(isPrime(3)); //-> true
console.log(isPrime(4)); //-> false


// //Challenge 5y
// function pathFinder(obj, array) {
//     if (array.length === 0) {
//         return obj;
//     }
//     const [ key, ...rest ] = array;
//     return pathFinder(obj[ key ], rest);
// }


// const obj = {
//     first: {
//         second:
//             { third: "finish" }
//     },
//     second: { third: "wrong" }
// };
// const arr = [ "first", "second", "third" ];
// console.log(pathFinder(obj, arr));   //-> "finish"


// //Challenge 6
// function flattenRecursively(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[ i ])) {
//             result = result.concat(flattenRecursively(arr[ i ]));
//         } else {
//             result.push(arr[ i ]);
//         }
//     }
//     return result;
// }


// console.log(flattenRecursively([ 1, [ 2, 3, [ 4 ] ] ])); //-> [1, 2, 3, 4]
// console.log(flattenRecursively([ 1, {}, [ 3, [ [ 4 ] ] ] ])); //-> [1, {}, 3, 4]


// //Challenge 7
// function findInOrderedSet(arr, target) {
//     if (arr.length === 0) {
//         return false;
//     }
//     if (arr.length === 1) {
//         return arr[ 0 ] === target;
//     }
//     const mid = Math.floor(arr.length / 2);
//     if (arr[ mid ] === target) {
//         return true;
//     }
//     if (target < arr[ mid ]) {
//         return findInOrderedSet(arr.slice(0, mid), target);
//     }
//     return findInOrderedSet(arr.slice(mid + 1), target);
// }

// const nums = [ 1, 4, 6, 7, 9, 17, 45 ];
// console.log(findInOrderedSet(nums, 4));  //-> true
// console.log(findInOrderedSet(nums, 2));  //-> false


// //Challenge 8
// function countWaysToReachNthStair(n) {
//     if (n === 0) {
//         return 0;
//     }
//     if (n === 1) {
//         return 1;
//     }
//     if (n === 2) {
//         return 2;
//     }
//     return countWaysToReachNthStair(n - 1) + countWaysToReachNthStair(n - 2);
// }

// console.log(countWaysToReachNthStair(1)) //-> 1 (only one way to climb 1 stair)
// console.log(countWaysToReachNthStair(2)) //-> 2 ((1, 1), (2))
// console.log(countWaysToReachNthStair(4)) //-> 5 ((1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (2, 2))


// //Challenge 9
// function getPermutations(arr) {
//     if (arr.length === 0) {
//         return [ [] ];
//     }
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[ i ];
//         const rest = arr.slice(0, i).concat(arr.slice(i + 1));
//         const subPermutations = getPermutations(rest);
//         for (let j = 0; j < subPermutations.length; j++) {
//             result.push([ element ].concat(subPermutations[ j ]));
//         }
//     }
//     return result;
// }

// console.log(getPermutations([ 1, 2 ])) //-> [[1, 2], [2, 1]]
// console.log(getPermutations([ 1, 2, 3 ])) //-> [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]


// //Challenge 10
// function getRangeBetween(x, y) {
//     if (x + 1 === y) {
//         return [];
//     }
//     return [ x + 1 ].concat(getRangeBetween(x + 1, y));
// }


// console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
// console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]
