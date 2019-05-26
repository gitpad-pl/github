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

function empty(data) {
    if (typeof (data) === 'number' || typeof (data) === 'boolean') {
        return false;
    }
    if (typeof (data) === 'undefined' || data === null) {
        return true;
    }
    if (typeof (data.length) !== 'undefined') {
        return data.length === 0;
    }
    var count = 0;
    for (var i in data) {
        if (data.hasOwnProperty(i)) {
            count++;
        }
    }
    return count === 0;
}


var each = function (array, callback, limit, is_last, is_first) {

    // limit = 5;
    var count = 1;

    if (is_first) {
        var obj = firstArray(array);
        callback(obj);

    } else if (is_last) {
        var obj = lastArray(array);
        callback(obj);

    } else {

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
    }
    // return this;
}


var eachFilter = function (array, callback, filter) {

    // limit = 5;
    var count = 1;

    // console.log("eachFilter", array);

    for (var key in array) {


        // skip loop if the property is from prototype
        if (!array.hasOwnProperty(key)) continue;

        // console.log("key");

        var obj = array[key];

        // console.log(typeof filter);
        if (typeof filter === 'function' && !filter(obj, count)) continue;

        // console.log("key2");

        // console.log(obj);
        // console.log(limit, count);

        callback(obj);

        count++;
    }
    // return this;
}


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
let getLast = (arr = null, n = null) => {
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


var decode = function (content, input, output) {

// console.log("encoding",encoding);
// console.log("content",content);
    var buff;
    if (Buffer.from && Buffer.from !== Uint8Array.from) {
        buff = Buffer.from(content, input);
    } else {
        if (typeof content === 'number') {
            throw new Error('The "size" argument must be not of type number.');
        }
        buff = new Buffer(content, input);
    }

    var text = buff.toString(output);

    return text;
};


var Github = function () {

    var username = username;

    var url;

    var organisation;

    var repository;

    var response;

    var model;
    var filter;

    var limit;
    var vulnerability_alert;
    var topic;
    var team;
    var tag;
    var branch;
    var commit;
    var author;
    var client;
    var secret;

    var is_last = false;

    var is_first = false;

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
        // this.limit = 1;
        this.is_first = true;

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
        if (empty(organisation)) {
            console.log("Organisation is empty");
        }
        this.organisation = organisation;

        return this;
    }

    this.Repository = function (repository) {
        if (empty(repository)) {
            console.log("Repository is empty");
        }
        this.repository = repository;

        return this;
    }

    this.Branch = function (branch) {
        if (empty(branch)) {
            console.log("branch is empty");
        }
        this.branch = branch;

        return this;
    }

    this.Author = function (author) {
        if (empty(author)) {
            console.log("branch is empty");
        }
        this.author = author;

        return this;
    }

    this.Client = function (client) {
        if (empty(client)) {
            console.log("client is empty");
        }
        this.client = client;

        return this;
    }


    this.Secret = function (secret) {
        if (empty(secret)) {
            console.log("secret is empty");
        }
        this.secret = secret;

        return this;
    }

    this.Filter = function (filter) {
        this.filter = filter;

        return this;
    }

    this.Commit = function (commit) {
        if (empty(commit)) {
            console.log("commit is empty");
        }
        this.branch = commit;

        return this;
    }

    this.Topic = function (topic) {
        if (empty(topic)) {
            console.log("topic is empty");
        }
        this.topic = topic;

        return this;
    }


    this.Team = function (team) {
        if (empty(team)) {
            console.log("team is empty");
        }
        this.team = team;

        return this;
    }

    this.VulnerabilityAlert = function (vulnerability_alert) {
        if (empty(vulnerability_alert)) {
            console.log("VulnerabilityAlert is empty");
        }
        this.vulnerability_alert = vulnerability_alert;

        return this;
    }


    this.getAuthor = function (callback) {
        this.getAll(
            function (all) {
                // console.log("ALL", all);
                callback(all[1]["author"])
            }
        );

        return this;
    }


    this.getTree = function (callback) {
        // console.log("* getTree", callback);
        var that = this;

        this.getSha(function (SHA) {

            console.log("* getTree SHA", SHA);

            var url = "https://api.github.com/repos/" + that.organisation + "/" + that.repository + "/git/trees/" + SHA + "";
            console.log("* getTree URL", url);
            // return null;
            // console.log("getTree", callback);
            that.getTreeByUrl(url, function (tree) {
                // console.log("* getTreeByUrl tree", tree);
                // var tree = all.data.tree;
                callback(tree)
            });
        });

        return this;
    }

    this.getEachFile = function (callback) {
        var that = this;

        var suffix = "?client_id=" + this.client + "&client_secret=" + this.secret;

        this.getSha(function (SHA) {

            console.log("* getFile SHA", SHA);

            var url = "https://api.github.com/repos/" + that.organisation + "/" + that.repository + "/git/trees/" + SHA + "" + suffix;
            console.log("* getFile URL", url);

            // return null;
            // console.log("getTree", callback);
            that.getAllByUrl(url, function (response) {
                var tree_all = response.data.tree;
                // console.log("* getTreeByUrl tree_all", tree_all);

                eachFilter(
                    tree_all,
                    function (tree) {

                        console.log("each tree type", tree.type);


                        var file_url = tree.url + suffix;
                        console.log("* getTreeByUrl tree file url", file_url);

                        that.getAllByUrl(file_url, function (file) {
                            // console.log("* getAllByUrl File", file.data);
                            // console.log("* getSha SHA", all["data"]["commit"]["sha"]);

                            if (!empty(file.data.content)) {
                                var text = decode(file.data.content, file.data.encoding, 'ascii');

                                callback({
                                    'name': tree.path,
                                    'url': tree.url,
                                    'content': text
                                });

                            }
                            // console.log("* getSha SHA", sha);

                        });


                    },
                    that.filter
                );


                // var tree = all.data.tree;
                // callback(tree)
            });
        });

        return this;
    }


    this.getSha = function (callback) {
        var url = "https://api.github.com/repos/" + this.organisation + "/" + this.repository + "/branches/" + this.branch;
        console.log("* getSha Url", url);

        this.getAllByUrl(url, function (all) {
            // console.log("* getSha All", all);
            // console.log("* getSha SHA", all["data"]["commit"]["sha"]);

            var sha = "";
            // if(!empty(all[1]["sha"])){
            //     sha = all[1]["sha"];
            // }
            if (!empty(all["data"]["commit"]["sha"])) {
                sha = all["data"]["commit"]["sha"];
            }
            // console.log("* getSha SHA", sha);

            callback(sha)
        });

        return this;
    }

    this.getUrl = function () {
        if (!empty(this.organisation) && empty(this.repository)) {
            this.url = "https://api.github.com/users/" + this.organisation + "/repos";
        } else if (!empty(this.organisation) && !empty(this.repository) && !empty(this.tag)) {
            this.url = "https://api.github.com/repos/" + this.organisation + "/" + this.repository + "/" + this.tag;
        } else if (!empty(this.organisation) && !empty(this.repository) && !empty(this.topic)) {
            this.url = "https://api.github.com/repos/" + this.organisation + "/" + this.repository + "/" + this.topic;
        } else if (!empty(this.organisation) && !empty(this.repository) && !empty(this.team)) {
            this.url = "https://api.github.com/repos/" + this.organisation + "/" + this.repository + "/" + this.team;
        } else if (!empty(this.organisation) && !empty(this.repository) && !empty(this.vulnerability_alert)) {
            this.url = "https://api.github.com/repos/" + this.organisation + "/" + this.repository + "/" + this.vulnerability_alert;
        } else if (!empty(this.organisation) && !empty(this.repository) && !empty(this.branch)) {
            this.url = "https://api.github.com/repos/" + this.organisation + "/" + this.repository + "/branches/" + this.branch;
        } else if (!empty(this.organisation) && !empty(this.repository)) {
            this.url = "https://api.github.com/repos/" + this.organisation + "/" + this.repository + "/branches";
        } else {
            console.log("Url is empty");
        }
        console.log("Url:" + this.url);

        return this.url;
    }


    this.getData = function (callback) {
        var axios = require("axios");
        axios.get(this.getUrl()).then(function (response) {
            callback(response.data);
        });
    };

    this.getDataByUrl = function (url, allItems) {
        var axios = require("axios");

        var limit = this.limit;
        var is_last = this.is_last;
        var is_first = this.is_first;

        axios.get(url).then(function (response) {
            // console.log("* getAllByUrl response", response);

            if (empty(response.data)) {
                console.log("* getAllByUrl Empty", response);
                // console.log(response.message);
                return null;
            }

            var data = response.data;

            console.log("* getAllByUrl response data", data);

            if (is_first) {
                var RepoArray = firstArray(data);
            } else if (is_last) {
                var RepoArray = lastArray(data);
            } else {
                var RepoArray = limitArray(data, limit);
            }

            allItems(RepoArray);
            // console.log("RepoArray", RepoArray);

        }).catch(function (error) {
            console.log(error.response);
            // console.log(error.response.data);
        });

        return this;
    };

    this.getItem = function (eachItem, allItems) {
        var axios = require("axios");

        var limit = this.limit;
        var is_last = this.is_last;
        var is_first = this.is_first;

        axios.get(this.getUrl()).then(function (response) {

            var data = response.data;

            var RepoArray = [];

            each(
                data,
                function (obj) {
                    RepoArray.push(
                        eachItem(obj)
                    );
                },
                limit,
                is_last,
                is_first
            );

            allItems(RepoArray);
            // console.log("RepoArray", RepoArray);

        });

        return this;
    };


    this.getAll = function (allItems) {
        var url = this.getUrl();

        this.getAllByUrl(url, allItems);

        return this;
    };

    this.getAllByUrl = function (url, allItems) {
        var axios = require("axios");

        axios.get(url).then(function (response) {
            // console.log("* getAllByUrl response", response);

            if (empty(response)) {
                console.log("* getAllByUrl Empty", response);
                // console.log(response.message);
                return null;
            }

            // var data = response.data;

            allItems(response);
            // console.log("RepoArray", RepoArray);

        }).catch(function (error) {
            console.log(error.response);
            // console.log(error.response.data);
        });

        return this;
    };

    this.getTreeByUrl = function (url, allItems) {
        var axios = require("axios");

        var limit = this.limit;
        var is_last = this.is_last;
        var is_first = this.is_first;
        // console.log("url", url);

        axios.get(url).then(function (response) {

            // console.log('* getTreeByUrl response', response);

            if (empty(response.data)) {
                console.log("* getTreeByUrl Empty", response.data);
            }
            // if (empty(response.data.tree)) {
            // console.log(response.message);
            // return null;
            // }
            //
            var data = response.data.tree;

            // console.log('data', data);

            var RepoArray = [];
            if (is_first) {
                RepoArray = firstArray(data);
            } else if (is_last) {
                RepoArray = lastArray(data);
            } else {
                RepoArray = limitArray(data, limit);
            }

            console.log("RepoArray", RepoArray);
            allItems([RepoArray]);

        }).catch(function (error) {
            // console.log(error);
            // console.log("* getTreeByUrl catch", error.response.data);
            console.log("* getTreeByUrl catch", error);
        });

        return this;
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
