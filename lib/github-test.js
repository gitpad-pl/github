// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// var Github = require("gitpad-github");
var api = require("./api");
// var model = require("./api").model;
// var Github = require("./github").github;
// var each = require("./api").each;

var config = require("../../config");
// console.log(config);

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


// Github.Organisation("tom-sapletta-com").getAll(
//     function (all) {
//         console.log("repo_list2", all);
//     }
// );
//


// Github.Organisation("tom-sapletta-com").Repository("Blog").Branch("master").getSha(function (SHA) {
//     console.log("SHA", SHA);
// });

// Github.Organisation("tom-sapletta-com").Repository("Blog").Branch("master").getTree(function (tree) {
//     console.log("tree", tree);
// });

// Using your client_id and client_secret does not authenticate as a user, it will only identify your OAuth application to increase your rate limit. Permissions are only granted to users, not applications, and you will only get back data that an unauthenticated user would see.

Github
    .Organisation("tom-sapletta-com")
    .Repository("Blog")
    .Branch("master")
    .Client(config.service.github.client_id)
    .Secret(config.service.github.client_secret)
    .Filter(function (tree, count) {
        var is_folder = tree.type === "tree";
        var first_one = count < 3; // first 2 occurrences
        return !is_folder && first_one;
    })
    .getEachFile(function (file) {
        console.log("Show each content of file \n", file);
    });


// Github.Organisation("tom-sapletta-com").Repository("Blog").Branch("master").getTree(function (tree) {
//     // console.log("Show All items of tree \n", tree);
//
//     var RepoArray = [];
//
//     each(
//         tree,
//         function (obj) {
//             RepoArray.push(
//                 {
//                     'name': obj.path,
//                     'url': obj.url,
//                     'content': obj.url
//                 }
//             );
//         }
//     );
//
//     // console.log("RepoArray", RepoArray);
// });

// Github.Organisation("tom-sapletta-com").Repository("Blog").Branch("master").getTree(function (tree) {
//     console.log("Show All items of tree \n", tree);
// });

// Github.Organisation("tom-sapletta-com").Repository("Blog").Branch("master").First().getTree(function (tree) {
//     console.log("Show first item of tree \n", tree);
// });

// Github.Organisation("tom-sapletta-com").Repository("Blog").Branch("master").getAll(function (all) {
//     console.log("ALL", all);
// });

// var url = Github.Organisation("tom-sapletta-com").getUrl();
// console.log(url);
//
// var url = Github.Organisation("tom-sapletta-com").Repository("Blog").getUrl();
// console.log(url);
//
// var url = Github.Organisation("tom-sapletta-com").Repository("Blog").Branch("master").getUrl();
// console.log(url);


// Github.Organisation("tom-sapletta-com").Repository("Blog").Branch("master").getAuthor(function (all) {
//     console.log("AUTHOR", all);
// });

//
// Github.Organisation("tom-sapletta-com").Repository("Blog").Branch("master").getCommit(
//     function (all) {
//         console.log("AUTHOR", all);
//     }
// );

// Github.Organisation("tom-sapletta-com").Repository("Blog").Branch("master").getFile(function (all) {
//     console.log("FILE", all);
// });


//
// Github.Organisation("tom-sapletta-com").Repository("docs").First().getItem(
//     function (item) {
//         return {
//             url: item.html_url,
//             name: item.name,
//             description: item.description,
//         }
//     },
//     function (all) {
//         console.log("repo_list1", all);
//     }
// );

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

// Github.Organisation("tom-sapletta-com").First().getItem(
//     function (item) {
//         return {
//             url: item.html_url,
//             name: item.name,
//             description: item.description,
//         }
//     },
//     function (all) {
//         console.log("repo_list1", all);
//     }
// );

//
// Github.Organisation("tom-sapletta-com").First().getAll(
//     function (all) {
//         console.log("repo_list2", all);
//     }
// );

//
// Github.Organisation("tom-sapletta-com").Last().getAll(
//     function (all) {
//         console.log("repo_list", all);
//     }
// );


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
