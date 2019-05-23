// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// var Github = require("gitpad-github");
var Github = require("./github").github;
var each = require("./github").each;

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

var res = [];

var api = new Github();

// all repos from Organisation
var repo_list = api.Organisation("tom-sapletta-com").RepositoryData(function (data) {
    var result = [];

    // console.log(response.data);
    each(data, function (obj) {

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
    console.log("result",result);

});

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
