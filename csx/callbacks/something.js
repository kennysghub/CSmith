// ADD CODE HERE
function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[ i ])
    }
}
function map(arr, call) {
    const resultsArray = [];
    forEach(arr, function (element) {
        resultsArray.push(call(element))

    })
    return resultsArray
}
// Uncomment these to check your work!
console.log(typeof forEach); // should log: 'function'
forEach([ 'a', 'b', 'c' ], i => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof map); // should log: 'function'
console.log(map([ 3, 4, 5 ], n => n - 2)); // should log: [1, 2, 3]

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

function countBy(array, callback) {
    //Create an object 
    const obj = {};
    //Iterate over array performing callback on each element 
    array.forEach(element => {
        const key = callback(element);
        if (!obj[ key ]) {
            obj[ key ] = 0;
        }
        //Add the result of callback as a key on object 
        obj[ key ]++;
    })
    return obj;


    //If the key exists increment the value of the key 
}

console.log(countBy([ 1, 2, 3, 4, 5 ], function (num) {
    if (num % 2 === 0) return 'even';
    else return 'odd';
})); // should log: { odd: 3, even: 2 }
