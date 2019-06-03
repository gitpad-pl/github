
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
