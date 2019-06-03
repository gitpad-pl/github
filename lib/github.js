var axios = require("axios");

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

                        // console.log("getEachFile tree type", tree.type);

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
        axios.get(this.getUrl()).then(function (response) {
            callback(response.data);
        });
    };

    this.getDataByUrl = function (url, allItems) {
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

module.exports = Github;
