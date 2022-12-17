# Boiler Plate 

## Array Methods

### `forEach`
 
```javascript
const items = [ "item1", "item2", "item3" ];
const copyItems = [];

// before
for (let i = 0; i < items.length; i++) {
    copyItems.push(items[ i ]);
}
// after
items.forEach( (item) => {
    copyItems.push(item);
});
```
>Note: You don't always have to use a forEach loop. When using callback functions, returns don't exit the forEach loop because it will be returning to the callback. The **forEach** loop will not finish until it hits the end of the array. 

### `filter`
```javascript
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]


```



>The filter() method is an iterative method. It calls a **provided callbackFn** function once for each element in an array, and constructs a `new array` of all the values for which callbackFn returns a `truthy` value. Array elements which do *not* pass the callbackFn test are *not* included in the new array.

### `reduce`
>The `reduce()` method is an iterative method. It runs a "reducer" callback function over all elements in the array, in ascending-index order, and accumulates them into a single value. Every time, the return value of callbackFn is passed into callbackFn again on next invocation as `accumulator`. The final value of accumulator (which is the value returned from callbackFn on the `final` iteration of the array) becomes the `return value` of reduce().

**Reduce With an Initial Value**
- Here we reduce the same array using the same algorithm, but with an `initialValue` of **10** passed as the second argument to reduce():
```javascript
[15, 16, 17, 18, 19].reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  10, //<- second argument to reduce()
);
//95
```
**Sum of Values in an Object Array**
> To sum up the values contained in an array of objects, you must supply an initialValue, so that each item passes through your function.
```javascript
const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  0,
);
console.log(sum); // 6
```
**Flatten an Array of arrays**
```javascript
const flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
// flattened is [0, 1, 2, 3, 4, 5]

```
### `map` 
```javascript
const numbers = [1, 4, 9];
const doubles = numbers.map((num) => num * 2);

console.log(doubles); // [2, 8, 18]
console.log(numbers); // [1, 4, 9]
```