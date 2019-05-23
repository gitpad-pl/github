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


function img() {
    var url;
    var local_url;
    var base_64;
    var mimetype;
}

function dev() {
    var firstname;
    var lastname;

    var name;
    var url;
    var description;

    this.getImg = function () {

    }
}

function org() {
    var name;
    var url;
    var description;

    this.getDev = function () {

    }

    this.getImg = function () {

    }
}

function repo() {
    var name;
    var url;
    var description;

    var is_private;
    var is_fork;
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

var Request = function () {
    var url;

    var $ = this;

    // this.array = array;

    $.Url = function (url) {
        this.url = url;
    }

    $.Call = function (callback) {
        var xhr = new XMLHttpRequest()
        // var self = this
        xhr.open('GET', apiURL)
        xhr.onload = function () {
            // console.log(xhr.responseText);
            // self.repos = JSON.parse(xhr.responseText)
            var result = JSON.parse(xhr.responseText)

            callback(result)
        }
    }

    return $;
}

var each = function (array, callback) {

    for (var key in array) {

        // skip loop if the property is from prototype
        if (!array.hasOwnProperty(key)) continue;

        var obj = array[key];
        // console.log(obj)

        callback(obj);

    }

}


var github = function () {


    var username = username;

    var organisation;

    var repository;

    var response;

    // function setUsername(username) {
    //
    // }


    var priv = {};

    this.Organisation = function (organisation) {
        this.organisation = organisation;

        return this;
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
        // return _
    }


    this.RepositorySaveTo = function (callback) {

        var axios = require("axios");

        axios.get(apiURL).then(function (response) {

            var result = [];

            // console.log(response.data);
            each(response.data, function (obj) {

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


            callback(result);
        });

    };


    this.RepositoryData = function (callback) {

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


function getRepositoryFromTo(repo_json, result) {
    // var repo_array = [];

    each(repo_json, function (obj) {

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
    });

    // console.log("result", result);
    // return result;
    // xhr.responseText.each(function (key, obj) {


}

//
// function each(array, callback) {
//
//     for (var key in array) {
//
//         // skip loop if the property is from prototype
//         if (!array.hasOwnProperty(key)) continue;
//
//         var obj = array[key];
//         // console.log(obj)
//
//         callback(obj);
//
//     }
//
// }
module.exports = {
    github,
    each
}
