module.exports = function each(array, callback) {

    for (var key in array) {

        // skip loop if the property is from prototype
        if (!array.hasOwnProperty(key)) continue;

        var obj = array[key];
        // console.log(obj)

        callback(obj);

    }

}
