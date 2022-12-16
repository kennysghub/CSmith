#Callbacks

>1.Filtering an array of data based on a specific condition, such as finding all numbers that are greater than a certain threshold or all strings that contain a certain substring.

>2.Transforming an array of data by applying a specific transformation to each element, such as converting all strings to uppercase or multiplying all numbers by a certain factor.

>3.Summarizing or aggregating the data in an array, such as computing the average of all numbers or counting the number of occurrences of each unique value.

>4.Sorting an array of data based on a specific criterion, such as sorting strings alphabetically or numbers in ascending or descending order.

>5.Implementing custom logic for certain operations, such as checking if an element is included in an array or determining the maximum or minimum value in an array.

These problems can be solved using the built-in JavaScript methods that accept callback functions, such as Array.prototype.filter, Array.prototype.map, Array.prototype.reduce, and Array.prototype.sort, or by writing your own functions that accept callback functions as arguments. Solving these problems can help you understand how to use callback functions effectively and efficiently in your own code.

```javascript
function forEach(array, callback) {
    for (let index in array) {
        callback(array[ index ])
    }
}

function mapWith(array, callback) {
    const resultsArr = [];
    forEach(array, function (element) {
        resultsArr.push(callback(element));
    })
    return resultsArr;

}

console.log(mapWith([ 1, 2, 3 ], n => n + 5))
```
>forEach performs a function on each element in an array
>mapWith calls the forEach function passing in an array and a callback function

- Things can get confusing so it's best to take it one step at a time and walk through the JavaScript single thread of execution.

- First, two functions are declared in global mememory **forEach** and **maWith**. Remember we don't enter the function body until the function is called.
- At the bottom we have **mapWith**() 
- So we enter in a new execution context
- Matching the arguments with the environment, 
  -> array:[1,2,3] is passed in as *array*
  -> function: n => n + 5 is passed in as *callback*

-  Next in local memory of mapWith's context, we are declaring a constant variable *resultsArr*
-  then we are calling the function **forEach**
-  new execution context 
-  We are passing in the SAME array that was passed into **mapWith** -> [1,2,3]
-  **forEach**'s second parameter is a function as well. But remember since forEach's job is to to perform a task on each item/element in the array, the function we pass to forEach allows us to handle or decide what we want to do with each changed element from the **forEach** function. 
-  So we pass it a function that pushes the result of the **forEach**


### Challenge: Reduce

-Create a function called `reduce` that takes an `array` and reduces the elements to a single value. For example it can sum all the numbers, multiply them, or any operation that you can put into a function.
```javascript
const nums = [4, 1, 3];
const add = function(a, b) { return a + b; }
reduce(nums, add, 0);   //-> 8
```
Here's how it works. The function has an "`accumulator value"` which starts as the `initialValue` and accumulates the output of each loop. The array is iterated over, passing the `accumulator` and the next array element as arguments to the `callback`. The `callback`'s return value becomes the new `accumulator` value. The next loop executes with this new `accumulator` value. In the example above, the `accumulator` begins at 0. add(0,4) is called. The `accumulator`'s value is now 4. Then add(4, 1) to make it 5. Finally add(5, 3) brings it to 8, which is returned.

#### Solution
```javascript
function reduce(array, callback, initialValue) {
    let accumulator = initialValue;
    
    forEach(array, function (element) {
        accumulator = callback(accumulator, element)
    })

    return accumulator;
}

const add = function (a, b) { return a + b; }

console.log(reduce([ 4, 1, 3 ], add, 0)) // -> 8......   (0,4) add (4,1) add (5,3) => 8
```

### Challenge: Intersection
Construct a function `intersection` that takes in an array of arrays, compares the inner arrays, and returns a new `array` with elements found in all of them. BONUS: Use reduce!


### Challenge: Union
>Construct a function `union` that takes in an array of arrays, compares the inner arrays, and returns a new array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first array. BONUS: Use reduce!

``` javascript
function union(arrays) {
  return arrays.reduce((acc, array) => {
    array.forEach(element => {
      if (!acc.includes(element)) {
        acc.push(element);
      }
    });
    return acc;
  }, []);
}
```

### Challenge 9: Obj of Matches


>Construct a function `objOfMatches` that accepts two arrays and a callback. `objOfMatches` will build an object and return it. To build the object, `objOfMatches` will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.


### Challenge 10: Multimap
>Construct a function `multiMap` that will accept two arrays: an array of values and an array of callbacks. `multiMap` will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.

```javascript
function multiMap(values, callbacks) {
  // Create an empty result object
  const result = {};

  // Iterate over the values
  for (let i = 0; i < values.length; i++) {
    const value = values[i];

    // Create an empty array to store the outputs from the callbacks
    result[value] = [];

    // Iterate over the callbacks
    for (let j = 0; j < callbacks.length; j++) {
      const callback = callbacks[j];

      // Apply the current callback to the current value and store the result in the result array
      result[value].push(callback(value));
    }
  }

  // Return the result object
  return result;
}
```


### Challenge 11: objectFilter
>Construct a function `objectFilter` that accepts an object as the first parameter and a callback function as the second parameter. `objectFilter` will return a new object. The new object will contain only the properties from the input object such that the property's value is equal to the property's key passed into the callback.


### Challenge 12: majority
>Create a function `majority` that accepts an array and a callback. The callback will return either true or false. `majority` will iterate through the array and perform the callback on each element until it can be determined if the `majority` of the return values from the callback are true. If the number of true returns is equal to the number of false returns, majo`rity should return false.

```javascript
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
```


### Challenge 13:  prioritize 
>Create a function `prioritize` that accepts an array and a callback. The callback will return either `true` or `false`. `prioritize` will iterate through the array and perform the callback on each element, and return a new array, where all the elements that yielded a return value of `true` come first in the array, and the rest of the elements come second.
```javascript
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

```


### Challenge 14: countBy
>Create a function `countBy` that accepts an `array` and a `callback`, and returns an `object`. `countBy` will iterate through the `array` and perform the `callback` on each element. Each return value from the `callback` will be saved as a `key` on the object. The value associated with each `key` will be the number of times that particular return value was returned.

```javascript
function countBy(array, callback) {
    //Create an object 
    const obj = {};
    //Iterate over array and apply the callback to each element
    array.forEach(element => {
        //Store the result of callback on elements in a var called "key" to be clear 
        const key = callback(element)
        //Add key to object. If it doesn't exist initialize it with a value: 0 
        if (!obj[ key ]) {
            obj[ key ] = 0;
        }
        //Else if the key does exist, increment the value associated with the key 
        obj[ key ]++;
    })
    //Return the object 
    return obj;
}

```

### Challenge 15: groupBy 
>Create a function `groupBy` that accepts an `array` and a `callback`, and returns an `object`. `groupBy` will iterate through the `array` and perform the `callback` on each element. Each return value from the `callback` will be saved as a `key` on the object. The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the `callback`.

```javascript
function groupBy(array, callback) {
    const obj = {};
    //Iterate through array performing callback on each element
    array.forEach(element => {
        //Each Return value from callback will be saved as -> key on object 
        result = callback(element);
        //Value of each key is an array of all elements that resulted in that return value from callback
        if (!obj[ result ]) {
            obj[ result ] = [ element ];
        } else {
            obj[ result ].push(element)
        }
    })
    return obj;
}


```

### Challenge 16: goodKeys
>Create a function `goodKeys` that accepts an `object` and a `callback`. The `callback` will return either `true` or `false`. goodKeys will iterate through the object and perform the `callback` on each value. goodKeys will then return an `array` consisting only the keys whose associated values yielded a true return value from the `callback`.

```javascript

function goodKeys(obj, callback) {
    //callback returns true or false 
    const arr = [];
    //Iterate through object and perform callback on each value 
    for (key in obj) {
        let results = callback(obj[ key ]) //obj[key] => value , key=key 
        if (results) {
            arr.push(key)
        }
    }
    return arr;

    //Return an array of only the keys whose values yielded true from callback 
}
```


### Challenge 17: commutative 
>Create a function `commutative` that accepts two callbacks and a value. `commutative` will return a boolean indicating if the passing the value into the first function, and then passing the resulting output into the second function, yields the same output as the same operation with the order of the functions reversed (passing the value into the second function, and then passing the output into the first function).


```javascript
function commutative(func1, func2, value) {
    //commutative returns a boolean
    // true if value into func1 and then passing resulting value into func2 yields same result as 
    let one = func2(func1(value))
    if (one === func1(func2(value))) {
        // console.log("testing: " + one)
        return true;
    }
    return false;
    // console.log("one" + one)
    // passing value into func2 and then passing resulting value into func1 
}

```

### Challenge 18: objFilter
>Create a function `objFilter` that accepts an `object` and a `callback`. `objFilter` should make a new object, and then iterate through the passed-in object, using each `key` as input for the `callback`. If the output from the `callback` is equal to the corresponding value, then that key-value pair is copied into the new object. `objFilter` will return this new object.

```javascript
function objFilter(obj, callback) {
    //Make a new obj 
    const newObj = {};
    //Iterate through passed-in object, passing in each key to callback function 
    for (key in obj) {
        let result = callback(key);
        if (result === obj[ key ]) {
            newObj[ key ] = obj[ key ]
        }
    }
    return newObj;
    // If output from callback is equal to the key's value (key was cb's input)
    //Then that key-value pair is copied into new object . 
    //Return new object 
}
```

### Challenge 19: rating
>Create a function `rating` that accepts an array (of functions) and a value. All the functions in the array will return `true` or `false`. `rating` should return the percentage of functions from the array that return true when the value is used as input.

```javascript
function rating(arrOfFuncs, value) {
    //Funcs in array return true or false 
    let count = 0;
    arrOfFuncs.forEach(func => {
        if (func(value)) {
            count++;
        }
    })
    return (count / arrOfFuncs.length * 100)
    //Rating() should return the percentage of functions from the array that return true when the value is used as input 

}

// /*** Uncomment these to check your work! ***/
const isEven = n => n % 2 === 0;
const greaterThanFour = n => n > 4;
const isSquare = n => Math.sqrt(n) % 1 === 0;
const hasSix = n => n.toString().includes('6');
const checks = [ isEven, greaterThanFour, isSquare, hasSix ];
console.log(rating(checks, 64)); // should log: 100
console.log(rating(checks, 66)); // should log: 75
```
### Challenge 20: pipe
>Create a function `pipe` that accepts an `array` (of functions) and a `value`. `pipe` should input the value into the first function in the `array`, and then use the `output` from that function as `input` for the `second` function, and then use the output from that function as input for the `third` function, and so forth, until we have an output from the last function in the array. `pipe` should return the final output.

```javascript
function pipe(functions, value) {
  return functions.reduce((accumulator, currentFunction) => currentFunction(accumulator), value);
}


const capitalize = str => str.toUpperCase();
const addLowerCase = str => str + str.toLowerCase();
const repeat = str => str + str;
const capAddlowRepeat = [ capitalize, addLowerCase, repeat ];
console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'
```
- This implementation uses the `reduce` method to iterate over the `array` of functions and apply them to the accumulator value, which is *initialized to the value argument passed to pipe*. The `reduce` method applies the current function to the accumulator, and the result of that function becomes the new accumulator value for the next iteration.

### Challenge 21: highestFunc
>Create a function `highestFunc` that accepts an `object` (which will contain functions) and a subject (which is any value). highestFunc should return the `key` of the object whose associated value (which will be a function) returns the largest number, when the subject is given as input.

```javascript
function highestFunc(funcs, subject) {
  let highestKey = null;
  let highestValue = -Infinity;

  for (const key in funcs) {
    const value = funcs[key](subject);
    if (value > highestValue) {
      highestKey = key;
      highestValue = value;
    }
  }

  return highestKey;
}
```
- This implementation iterates over the keys in the funcs object and applies the corresponding function to the subject value. It then compares the result of each function to the current highest value and updates the highestKey and highestValue variables if a larger value is found.

