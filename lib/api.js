var firstArray = function (array) {
    var key = array.length - 1;
    return array[key];
    // return array.slice(1);
}

var lastArray = function (array) {
    // var key = array.length - 1;
    // return array[key];
    return array.slice(-1);
}

//  will return the n last elements from the array
var getLast = function (arr, n) {
    if (arr == null) return void 0;
    if (n === null) return arr[arr.length - 1];
    return arr.slice(Math.max(arr.length - n, 0));
};

var limitArray = function (array, limit) {
    var count = 1;
    var result = [];

    for (var key in array) {

        // skip loop if the property is from prototype
        if (!array.hasOwnProperty(key)) continue;
        if (count > limit) continue;
        count++;
        result.push(array[key]);
    }
    return result;
}


var Github = require("./github");


module.exports = {
    Github: Github,
    // each: each,
    // RepoList: RepoList,
    // ModelList: ModelList,
    // List: List,
    // model: {
    //     Repo: Repo,
    //     Org: Org,
    //     Dev: Dev,
    //     User: User
    // },
};
