# Recursion
Recursion is a programming technique in which a function calls itself with a smaller version of the same problem, until the problem is small enough to be solved directly. 

To solve a recursion problem in JavaScript, follow these steps:

Identify the `base case`: The base case is the point at which the recursion should **stop**. It is important to identify the base case because without it, the recursion will never end and you will get an infinite loop.

Write the `recursive case`: The recursive case is the logic that should be executed when the problem is *not small enough to be solved directly*. In the `recursive case`, you should **call the function again with a smaller version of the same problem**.

`Return the result`: After the recursive call, you should return the result of the recursive call, either directly or after performing some additional processing on it.

*Example*
```javascript
function factorial(n) {
  // Base case: If n is 0 or 1, return 1
  if (n === 0 || n === 1) {
    return 1;
  }

  // Recursive case: Return n * factorial(n - 1)
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
```
- In this example, the **base case** is ```n === 0 || n === 1,``` and the **recursive case** is return `n * factorial(n - 1)`. The function calls itself with` n - 1` as the argument until the base case is reached, at which point it returns 1. The result of the recursive call is then used to calculate the final result, which is returned to the caller.



## Challenge 1
>Write a recursive function `countdown` that accepts a positive integer n as an input and logs every number from n (inclusive) to 0 (exclusive) to the console.
```javascript
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
```

## Challenge 2
>Write a recursive function `sum` that calculates the sum of an array of integers.
```javascript
function sum(array) {

    //Base Case:
    if (array.length === 0) {
        return 0;
    } else {
        return array[ 0 ] + sum(array.slice(1))
    }

    //Recursive Case:
}
```
## Challenge 3
>Write a recursive function `palindrome` that accepts a string as an input and returns true if that string is a `palindrome` (the string is the same forward and backwards). The input string may have punctuation and symbols, but that should not affect whether the string is a `palindrome`.
```javascript
function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z]/g, "");  // remove punctuation and convert to lower case

  if (str.length <= 1) {  // base case: if the string is empty or has only one character, it is a palindrome
    return true;
  } else if (str[0] !== str[str.length - 1]) {  // base case: if the first and last characters don't match, it is not a palindrome
    return false;
  } else {
    return isPalindrome(str.slice(1, -1));  // recursive case: check if the string without the first and last characters is a palindrome
  }
}
console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
console.log(palindrome("llama mall")); //-> true
console.log(palindrome("jmoney")); //-> false
```
- *Note*: To replace punctuation marks in a string, use regex. Using the method **replace**.A simple regex combination would be as follows: 
```javascript
let testString = "kdsljf-=-=/?>,rjewiwfjwa"
testString.replace(/[^a-z]/g,"");
```
- `[` start of the block
-  `^` **NOT** these characters 
-  `/g` Match all of these instances with `""` , essentially nothing. 
-  This is saying, for all the characters in the string testString, EXCEPT letters **"a-z"**, replace it with nothing. 

> However, we can optimize this function further, because every call, to the paliindrome isPalindrome function, is converting the input to lowercase and replacing punctuation again. We can fix this by adding in a helper function. 
```javascript
function palindrome(input) {
    //Convert input to lowercase and remove all punctuation 
    input = input.toLowerCase().replace(/[^a-z]/g, "");
    return helper(input);

}
function helper(word) {
    //Base Case: If input is 1 or 0 letters, then it IS a palindrome 
    if (word.length <= 1) {
        return true;
    }
    //Base Case 2: If first and last letter are not the same, then it is NOT a palindrome
    else if (word[ 0 ] !== word[ word.length - 1 ]) {
        return false;
    } 
    //Recursive Case: Call the function again, but remove the first and last letters. 
    else {
        return helper(word.slice(1, -1))
    }

}
```


## Challenge 4
>Write a recursive function `isPrime` that determines if a number is prime and returns true if it is.
```javascript

```
## Challenge 5
>Write a recursive function `pathFinder` that takes an object and array as inputs and returns the value with the given path.
```javascript
const obj = {first:{second:{third:"finish"}}, second:{third:"wrong"}};
const arr = ["first","second","third"];
pathFinder(obj,arr);   //-> "finish"
```

```javascript
function pathFinder(obj, path) {
  if (path.length === 0) {
    return obj;
  }
  const [key, ...rest] = path;
  return pathFinder(obj[key], rest);
}

const arr = [ "first", "second", "third" ];
console.log(pathFinder(obj, arr));   //-> "finish"

```
- The function uses *destructuring* to get the first element of the `path` array and assign it to the variable `key`, and ther est of the array to the variable `rest`. 
- It then checks if the `path` array is empty. If it is, it returns the object itself. 
- If the `path` array is not empty, the function retrieves the value at the `key` in the object `obj` and calls itself with this value and the `rest` array as arguments. This process continues until the `path` array is empty, at which point the function returns the final value. 



## Challenge 6
>Write a recursive function `flattenRecursively` that flattens a nested array. Your function should be able to handle varying levels of nesting.
```javascript
function flattenRecursively(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattenRecursively(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;

console.log(flattenRecursively([ 1, [ 2, 3, [ 4 ] ] ])); //-> [1, 2, 3, 4]
console.log(flattenRecursively([ 1, {}, [ 3, [ [ 4 ] ] ] ])); //-> [1, {}, 3, 4]
}
```
- This function iterates through the elements of the array and checks if each element is an array. If it is, it calls itself with this array as an argumetn adn concetenates the result with the `result` array. If the element is not an array, it simply pushes it to the `result` array. 

## Challenge 7
>Write a recursive function `findInOrderedSet` that determines if a number is in an ordered array. Assume the array is sorted. *BONUS*: Write the function in such a way that fully iterating through the array to check isn't necessary.
```javascript
function findInOrderedSet(arr, target) {
    if (arr.length === 0) {
        return false;
    }
    if (arr.length === 1) {
        return arr[ 0 ] === target;
    }
    const mid = Math.floor(arr.length / 2);
    if (arr[ mid ] === target) {
        return true;
    }
    if (target < arr[ mid ]) {
        return findInOrderedSet(arr.slice(0, mid), target);
    }
    return findInOrderedSet(arr.slice(mid + 1), target);
}

const nums = [ 1, 4, 6, 7, 9, 17, 45 ];
console.log(findInOrderedSet(nums, 4));  //-> true
console.log(findInOrderedSet(nums, 2));  //-> false
```
- This function uses a binary search algorithm to find the target number in the array. It first checks if the array is empty or has a single element. If either is the case, it returns `false` or checks if the element is equal to the target, respectively.
- If the array has more than one element, the function calculates the midpoint adn checks if the elemnt at this index is equal to the target, the function checks if the target is less than the element. IF it is, it calls itself with the first half o f the array as an argument. If the target is greater than the element, it calls itself with the second half of the array as an argument. 

## Challenge 8
>There are `n` stairs. A person standing at the bottom wants to reach the top. The person can climb either **1** or **2** stairs at a time. Write a function `countWaysToReachNthStair` to count the number of ways the person can reach the top (order does matter). See test cases for examples.
```javascript
function countWaysToReachNthStair(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  return countWaysToReachNthStair(n - 1) + countWaysToReachNthStair(n - 2);
}
console.log(countWaysToReachNthStair(1)) //-> 1 (only one way to climb 1 stair)
console.log(countWaysToReachNthStair(2)) //-> 2 ((1, 1), (2))
console.log(countWaysToReachNthStair(4)) //-> 5 ((1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (2, 2))

```
- This function uses the fact that the number of ways to reach the `nth` stair is equal to the sum of the number of ways to reach the `(n-1)`th stair and the number of ways to reach the `(n-2)`th stair. If the nth stair is the first or second stair, there is only 1 way to reach it (by climbing 1 or 2 stairs, respectively).
## Challenge 9
>Given a collection of distinct integers, write a function `getPermutations` to return all possible permutations.
```javascript
Input:[1, 2, 3]
Output:[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
```
```javascript
function getPermutations(arr) {
  if (arr.length === 0) {
    return [[]];
  }
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const rest = arr.slice(0, i).concat(arr.slice(i + 1));
    const subPermutations = getPermutations(rest);
    for (let j = 0; j < subPermutations.length; j++) {
      result.push([element].concat(subPermutations[j]));
    }
  }
  return result;
}
console.log(getPermutations([ 1, 2 ])) //-> [[1, 2], [2, 1]]
console.log(getPermutations([ 1, 2, 3 ])) //-> [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
```
- This function uses a recursive approach to generate all permutations of the array. It first checks if the array is empty, in which case it returns an empty array.

If the array is not empty, the function iterates through the elements of the array and generates all permutations of the rest of the array (i.e., the array without the current element). It then concatenates the current element with each of these permutations and adds the result to the result array.

Finally, the function returns the result array, which contains all the permutations of the original array.

## Challenge 10
>Write a function `getRangeBetween` that returns an array of all integers between values x and y, not including x and y.
```javascript
function getRangeBetween(x, y) {
    if (x + 1 === y) {
        return [];
    }
    return [ x + 1 ].concat(getRangeBetween(x + 1, y));
}


console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]

```
- This function works by adding `x + 1` to the beginning of the array and then concatenating the result of calling the function again with `x + 1` as the first argument and `y` as the second. The base case is when `x + 1` is equal to `y`, in which case the function returns an empty array.