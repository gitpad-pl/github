var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// var xhr = new XMLHttpRequest();


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

var apiURL = `https://api.github.com/users/${ORG}/repos`;

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


function Github() {

    var username = username;

    var organisation;

    var repository;

    var response;

    // function setUsername(username) {
    //
    // }

    var $ = this;

    $.Organisation = function (organisation) {
        $.organisation = organisation;

        return $
    }

    $.Repository = function (repository) {
        if (repository === undefined) {
            return $.getRepoList()
        }

        $.repository = repository;
        return $
    }

    $.Owner = function (owner) {
        $.organisation = organisation;

        return $
    }


    $.Sort = function () {
        return Sort(this.array)
    }


    $.SortByNewest = function () {
        return Sort(this.array).Newest()
    }

    $.SortByColumn = function (column) {
        return Sort(this.array).Column(column)
    }

    $.getRepoList = function (organisation) {
        var response = getResponse();

        return List(response);
    }

    $.getOrgList = function (organisation) {
        var response = getResponse();

        return List(response);
    }


    function getResponse() {
        var xhr = new XMLHttpRequest()
        // var self = this
        xhr.open('GET', apiURL)
        xhr.onload = function () {
            // console.log(xhr.responseText);
            // self.repos = JSON.parse(xhr.responseText)
            var repo_json = JSON.parse(xhr.responseText)
            console.log(xhr.responseText);
            var repo_array = [];
            // xhr.responseText.each(function (key, obj) {
            for (let obj of repo_json) {
                // console.log(obj)
                repo_array.push(
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
            }
            ;

            // console.log(self.commits[0].html_url)
            // self.repos = repo_array;
            console.log(repo_array)
        }
        xhr.send()
    }

    return $;
}


// var Gitapi = function () {
//
//     var api = this;
//
//     api.Github = Github;
//
//     return api;
// }

// all Repos from Github, global searching
// var repo_list = Github().Repository();
// console.log(repo_list);

// all Repos from Github, global searching
// var repo_list = Github().Repository("docs");
// console.log(repo_list);

// all Repos from Github, global searching
// var repo_list = Github().Repository("docs").SortByNewest().Limit(5);
// console.log(repo_list);


// all repos from Organisation
var repo_list = Github().Organisation("tom-sapletta-com").Repository();
console.log(repo_list);

// selected repo, list of commits
var repos = Github().Organisation("tom-sapletta-com").Repository("docs").Commit();
console.log(repo_selected);

// selected repo, tree of files
var repos = Github().Organisation("tom-sapletta-com").Repository("docs").File();
console.log(repo_selected);

// selected repo, tickets
var repos = Github().Organisation("tom-sapletta-com").Repository("docs").Ticket();
console.log(repo_selected);

// get owner of selected repo
var repos = Github().Organisation("tom-sapletta-com").Repository("docs").Owner();
console.log(repo_selected);

// console.log(Github().setOrganisation("tom-sapletta-com"));
