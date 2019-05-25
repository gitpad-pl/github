// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// var Github = require("gitpad-github");
var api = require("./github");
var model = require("./github").model;
// var Github = require("./github").github;
// var each = require("./github").each;
// var RepoList = require("./github").RepoList;

// all Repos from Github, global searching
// var repo_list = Github().Repository();
// console.log(repo_list);

// all Repos from Github, global searching
// var repo_list = Github().Repository("docs");
// console.log(repo_list);

// all Repos from Github, global searching
// var repo_list = Github().Repository("docs").SortByNewest().Limit(5);
// console.log(repo_list);

var res = [];

// var api = new Github;
var Github = new api.Github;
//
// Github.Organisation("tom-sapletta-com").Limit(1).getItem(
//     function (item) {
//         return {
//             url: item.html_url,
//             name: item.name,
//             description: item.description,
//         }
//     },
//     function (all) {
//         console.log("repo_list", all);
//     }
// );
//
Github.Organisation("tom-sapletta-com").First().getAll(
    function (all) {
        console.log("repo_list", all);
    }
);

Github.Organisation("tom-sapletta-com").Last().getAll(
    function (all) {
        console.log("repo_list", all);
    }
);


/*

Github.Organisation("tom-sapletta-com").Repository("100EUR").get(
    function (item) {
        return {
            url: item.html_url,
            name: item.name,
            description: item.description,
        }
    },
    function (all) {
        console.log("repo_list", all);
    }
);

// console.log("repo_list", repo_list);
// console.log("res", res);

/*
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
*/
// console.log(Github().setOrganisation("tom-sapletta-com"));
