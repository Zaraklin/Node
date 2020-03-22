const Post = require("../models/post")

exports.getPosts = (req, res) => {
    res.json({
        post : [
            { title : "first" },
            { title : "second"}
        ]
    });
}

exports.createPost = (req, res) => {
    const post = new Post(req.body);
    console.log("CREATING POST", post);
}