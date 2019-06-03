var Sort = function (array) {
    this.array = array;

    this.order = {
        asc: 1,
        desc: 2
    }

    this.column = {
        created: 1,
        desc: 2
    }

    var $ = this;


    // Sort
    // By Time
    $.byNewest = function () {
        return $.byColumn(this.column.created, this.order.asc)
    }

    $.byOldest = function () {
        return $.byColumn(this.column.created, this.order.asc)
    }

    $.byColumn = function (column, sort) {
        // return Sort(this.array)
        return List(this.array);
    }

    return $;
}

// List - Sort - Element
module.exports = Sort;
