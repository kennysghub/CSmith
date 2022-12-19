# CSX Recursion 

## Challenge: Repeater 
- Write a function that takes an input character and returns that character repeated 5 times using recursion. For example, if the input is 'g', then the output should be 'ggggg'.
```javascript
Input: {String} char
Output: {String} char
```
```javascript
console.log('Hello, world!');

function repeater(char) {
    //Base Case: If length of char is 5, return char
    if(char.length===5){
        return char;
    }
    //Recursive Case: Call the function again and add the first letter until the whole string reaches 5 charactes 
    return repeater(char + char[0])
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(repeater('g'));
console.log(repeater('j'));
```
## Challenge Factorial 
- Write a function that returns the factorial of a number.

> EXAMPLE4! = 4 * 3 * 2 * 1 = 24, so calling `factorial(4)` should return 24.
```javasript
Input: {Number} num - number whose factorial is sought
Output: {Number}
```
```javascript
function factorial(num) {
    //Base Case: If number was 1, 1 * 1 = 1. So return 1. 
    if (num === 1) {
        return 1;
    }
    // Recursive Case 
    else {
        return num * factorial(num - 1)
    }
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(factorial(4)); // -> 24
console.log(factorial(6)); // -> 720
```
- Return num * factorial(num-1)
`factorial(4)`

- Factorial (4): 4 * factorial(3)
- Factorial (3): 3 * factorial(2)
- Factorial (2): 2 * factorial(1)
- Factorial (1): Returns 1 

- Factorial (2): 2 * `[ `Factorial(1) = 1 `]` => 2
- Factorial (3): 3 * `[ `Factorial(2) = 2 `]` => 6
- Factorial (4): 4 * `[ `Factorial(3) = 6 `]` => 24

## Challenge: getLength
Get the length of an array using recursion without accessing its length property.
```javascript
Input: {Array} array - array whose length is sought
Output: {Number}
```

```javascript
function getLength(array) {
    //Base Case:
    if(array[0] === undefined){
        return length;
    }
    length++;
    //Recursive Case:
    return getLength(array.slice(1), length);
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0
```
- Base Case: if input is an empty array `[]`, return 0 
- So we want to do something to slowly reduce our array to an empty array

## Challenge: POW
- Write a function that takes two inputs, a base and an exponent, and returns the expected value of base ^ exponent. For instance, if our base is 2 and our exponent is 3, then return 8 because 2^3 = 2*2*2 = 8.
```javascript
Input 1: {Number} base - base number raised to the exponent
Input 2: {Number} exponent - exponent the base is raised to
Output: {Number} - expected value of base raised to exponent
```
```javascript
function pow(base, exponent) {
    if(exponent===1){
        return base
    }
    return base * pow(base, exponent-1)
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(pow(2, 4)); // -> 16
console.log(pow(3, 5)); // -> 243
```