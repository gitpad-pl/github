# Information about programming in JS

https://zellwk.com/blog/looping-through-js-objects/

### Example with array

    const fruits = {
      apple: 28,
      orange: 17,
      pear: 54,
    }

#### Object.keys
creates an array that contains the properties of an object. Here’s an example.

    const keys = Object.keys(fruits)
    console.log(keys)

Results:

    [apple, orange, pear]


#### Object.values
creates an array that contains the values of every property in an object. Here’s an example:

    const values = Object.values(fruits)
    console.log(values)

Results:

    [28, 17, 54]

#### Object.entries
creates an array of arrays. Each inner array has two item. The first item is the property; the second item is the value.

    const entries = Object.entries(fruits)
    console.log(entries)

Results:

     [
       [apple, 28],
       [orange, 17],
       [pear, 54]
     ]




### Under ECMAScript 5, you can combine Object.keys() and Array.prototype.forEach():

    Object.keys(obj).forEach(function(key) {

      console.log(key, obj[key]);

    });



### In ES6 you can loop through an object like this: (using arrow function)

    Object.keys(myObj).forEach(key => {
        console.log(key);          // the name of the current key.
        console.log(myObj[key]);   // the value of the current key.
    });



### In ES7 you can use Object.entries instead of Object.keys and loop through an object like this:

    Object.entries(myObj).forEach(([key, val]) => {
        console.log(key);          // the name of the current key.
        console.log(val);          // the value of the current key.
    });
