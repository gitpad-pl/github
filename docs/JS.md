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

