var List = function (array) {
    this.array = array;


    var $ = this;

    $.One = function () {
        return One(this.array)
    }

    $.All = function () {
        this.array;
    }

    $.Limit = function (limit) {
        this.array;
    }

    $.Sort = function (column, sort) {
        return Sort(this.array, column, sort)
    }


    $.Filter = function (key, value) {
        return Filter(this.array, key, value)
    }

    $.get = function () {
        this.array;
    }


    return $;
}

// List - Sort - Element
module.exports = List;
