var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var Github = require("gitpad-github");

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
var repo_list = Github.Organisation("tom-sapletta-com").Repository();
console.log(repo_list);
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