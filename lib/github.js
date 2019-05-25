// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// var xhr = new XMLHttpRequest();
// import $ from "jquery";


const ORG = 'gitpad-pl';
// const REPO = 'docs';
const REPO = 'app';
const BRANCH_NAME = 'master';
const FILE = 'README.md';
const PATH = 'README.md';
const CONTENT = 'first line of file';
const COMMIT_MSG = 'first commit';
const COMMIT_LIMIT = 10;

// const URL_REPO = `${HOST}/${USER}/${REPO}`;

var apiURL = "https://api.github.com/users/" + ORG + "/repos";

// var apiURL = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha='

var User = {
    firstname: "",
    lastname: "",
    name: "",
    url: "",
    description: "",
}

var Img = {
    url: "",
    name: "",
    base_64: "",
    mimetype: ""
}

var Dev = {
    firstname: "",
    lastname: "",
    name: "",
    url: "",
    description: "",
}

var Org = {
    name: "",
    url: "",
    description: "",
}

var Repo = {
    name: "",
    url: "",
    description: "",
    is_private: "",
    is_fork: ""
}

var ModelList = function (model, array) {
    this.model = model;
    this.array = array;
}

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

var Filter = function (key, value) {

    return this;
}


var One = function (array) {
    this.array = array;

    var list;

    function first() {

    }

    function next() {

    }

    function prev() {

    }

    function current() {

    }

    function last() {

    }

    function all() {

        return this.array;
    }
}


var each = function (array, callback, limit) {

    // limit = 5;
    var count = 1;

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

    // return this;
}


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


var Github = function () {

    var username = username;

    var organisation;

    var repository;

    var response;

    var model;

    var limit;

    var is_last = false;

    this.eachCallback = {};

    // function setUsername(username) {
    //
    // }


    var priv = {};


    this.Last = function () {
        this.is_last = true;
        return this;
    }

    this.First = function () {
        this.limit = 1;
        return this;
    }

    this.Limit = function (limit) {
        this.limit = limit;

        // console.log(this.limit);

        return this;
    }


    this.assign = function (model) {
        this.model = model;

        return this;
    }


    this.Organisation = function (organisation) {
        this.organisation = organisation;

        return this;
    }


    this.getUrl = function () {
        // this.organisation = organisation;
        var apiURL = "https://api.github.com/users/" + this.organisation + "/repos";
        return apiURL;
    }


    this.Repository = function (repository, result) {
        if (repository === undefined) {

            getJson(
                apiURL,
                getRepositoryFromTo,
                result
            );

            // return $.getRepoList()
        }

        // _.repository = repository;
        return this;
    }


    this.getData = function (callback) {

        var axios = require("axios");

        axios.get(apiURL).then(function (response) {

            callback(response.data);
        });

    };


    this.getItem = function (eachItem, allItems) {
        // this.eachCallback = callback;
        // return this;

        var axios = require("axios");

        var url = this.getUrl();

        var limit = this.limit;

        axios.get(url).then(function (response) {

            var data = response.data;

            var RepoArray = [];

            each(
                data,
                function (obj) {
                    RepoArray.push(
                        eachItem(obj)
                    );
                },
                limit
            );

            allItems(RepoArray);
            console.log("RepoArray", RepoArray);

        });

        return this;
    };


    this.getAll = function (allItems) {
        // this.eachCallback = callback;
        // return this;

        var axios = require("axios");

        var url = this.getUrl();

        var limit = this.limit;
        var is_last = this.is_last;

        axios.get(url).then(function (response) {

            var data = response.data;

            if (is_last) {
                var key = data.length - 1;
                var RepoArray = data[key];
            } else {
                var RepoArray = limitArray(data, limit);
            }

            allItems(RepoArray);
            // console.log("RepoArray", RepoArray);

        });

        return this;
    };


    this.getData = function (callback) {

        var axios = require("axios");

        axios.get(apiURL).then(function (response) {

            callback(response.data);
        });

    };


    /*
        this.Owner = function (owner) {
            $.organisation = organisation;

            return $
        }

        this.Sort = function () {
            return Sort(this.array)
        }


        this.SortByNewest = function () {
            return Sort(this.array).Newest()
        }

        this.SortByColumn = function (column) {
            return Sort(this.array).Column(column)
        }

        this.getRepoList = function (organisation) {
            var response = getResponse();

            return List(response);
        }

        this.getOrgList = function (organisation) {
            var response = getResponse();

            return List(response);
        }

    */
    /**
     * Private variables
     */
}


function getJsonOld(url, callback, result) {
    var xhr = new XMLHttpRequest()
    // var self = this
    xhr.open('GET', apiURL);
    xhr.onload = function () {
        // console.log(xhr.responseText);
        // self.repos = JSON.parse(xhr.responseText)
        var json = JSON.parse(xhr.responseText);

        console.log(xhr.responseText);

        return callback(json, result);

        // console.log(self.commits[0].html_url)
        // self.repos = repo_array;
        // console.log(repo_array)
    }
    xhr.send()
}


function getJson(url, callback, result) {

    $.getJSON(url).done(function (data) {

        $.each(data, function (i, obj) {

            result.push(
                {
                    dev: {
                        name: obj.owner.login,
                        url: obj.owner.html_url,
                        icon_url: obj.owner.avatar_url,
                        icon_base64: obj.owner.avatar_url,
                        repo: []
                    },
                    org: {
                        name: obj.owner.login,
                        url: obj.owner.html_url,
                        icon_url: obj.owner.avatar_url,
                        owner: obj.owner.login,
                        repo: []
                    },
                    repo: {
                        url: obj.html_url,
                        name: obj.name,
                        description: obj.description,
                        is_private: obj.private,
                        is_fork: obj.fork,
                    },
                    org_repo_url: obj.full_name,
                }
            )

            // $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
            // if ( i === 3 ) {
            //     return false;
            // }
        });
    });

}


module.exports = {
    Github: Github,
    each: each,
    // RepoList: RepoList,
    ModelList: ModelList,
    List: List,
    model: {
        Repo: Repo,
        Org: Org,
        Dev: Dev,
        User: User
    },
};
