function each(array, callback, limit, is_last, is_first) {

    // limit = 5;
    var count = 1;

    if (is_first) {
        var obj = firstArray(array);
        callback(obj);

    } else if (is_last) {
        var obj = lastArray(array);
        callback(obj);

    } else {

        for (var key in array) {

            // skip loop if the property is from prototype
            if (!array.hasOwnProperty(key)) continue;
            if (count > limit) continue;
            count++;

            var obj = array[key];

            // console.log(obj);
            // console.log(limit, count);

            callback(obj);
        }
    }
    // return this;
}
