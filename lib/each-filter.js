var eachFilter = function (array, callback, filter) {

    // limit = 5;
    var count = 1;

    // console.log("eachFilter", array);

    for (var key in array) {


        // skip loop if the property is from prototype
        if (!array.hasOwnProperty(key)) continue;

        // console.log("key");

        var obj = array[key];

        // console.log(typeof filter);
        if (typeof filter === 'function' && !filter(obj, count)) continue;

        // console.log("key2");

        // console.log(obj);
        // console.log(limit, count);

        callback(obj);

        count++;
    }
    // return this;
}
