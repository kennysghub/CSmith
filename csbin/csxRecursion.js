console.log('Hello, world!');

function repeater(char) {
    //Base Case: If length of char is 5, return char 
    if (char.length === 5) {
        return char;
    }

    //Recursive Case:
    return repeater(char + char[ 0 ])
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(repeater('g'));
console.log(repeater('j'));

function recurse(counter = 0) {
    if (counter === 2) {
        return 'done'
    }
    const newCounter = counter + 1;
    return recurse(newCounter);
}
const output = recurse();
console.log(output)




function factorial(num) {
    if (num === 1) {
        return 1;
    }
    else {
        return num * factorial(num - 1)
    }
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(factorial(4)); // -> 24             1 x 2 x 3 x 4
console.log(factorial(6)); // -> 720
console.log("_getLength")
// function getLength(array, length = 0) {
//     //Base Case:
//     if (array[ 0 ] === undefined) {
//         return length;
//     }
//     length++;

//     //Recursive Case: 
//     return getLength(array.slice(1), length)
// }

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(getLength([ 1 ])); // -> 1


function getLength(array, length = 0) {
    //Base Case:If array is empty, return0 
    if (array[ 0 ] === undefined) {
        return length;
    }
    length++;
    return getLength(array.slice(1), length)
}


console.log(getLength([ 1, 2 ])); // -> 2
console.log(getLength([ 1, 2, 3, 4, 5 ])); // -> 5
console.log(getLength([])); // -> 0
console.log("__POW Challenge__")
function pow(base, exponent) {
    //Base Case: If exponent is 1, return base. 
    if (exponent === 1) {
        return base;
    }

    //Recursive Case: 
    return base * pow(base, exponent - 1)


}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(pow(5, 1))
console.log(pow(2, 4)); // -> 16
console.log(pow(3, 5)); // -> 243

function flow(input, funcArray) {
    //Base Case: if array only has 1 left, return the input from that callback 
    if (funcArray.length === 1) {
        return funcArray[ 0 ](input)
    }
    let newInput = funcArray[ 0 ](input)
    //Recursive Case: Decrease the length of array 
    return flow(newInput, funcArray.slice(1))
}

// To check if you've completed the challenge, uncomment this code!
function multiplyBy2(num) { return num * 2; }
function add7(num) { return num + 7; }
function modulo4(num) { return num % 4; }
function subtract10(num) { return num - 10; }
const arrayOfFunctions = [ multiplyBy2, add7, modulo4, subtract10 ];
console.log(flow(2, arrayOfFunctions)); // -> -7

// const testArray = [ multiplyBy2 ]
// console.log(flow(2, testArray))