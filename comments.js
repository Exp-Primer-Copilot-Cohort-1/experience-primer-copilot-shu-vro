// create web server
const express = require("express");
const app = express();

// for parsing application/json
app.use(express.json());

// array of comments
let comments = [];

// Get all comments
app.get("/comments", (req, res) => {
    res.json(comments);
});

// Get a comment
app.get("/comments/:id", (req, res) => {
    const id = req.params.id;
    const comment = comments.find(comment => comment.id === parseInt(id));
    res.json(comment);
});

// Create a comment
app.post("/comments", (req, res) => {
    const comment = req.body;
    comment.id = comments.length + 1;
    comments.push(comment);
    res.json(comment);
});

// Update a comment
app.put("/comments/:id", (req, res) => {
    const id = req.params.id;
    const comment = comments.find(comment => comment.id === parseInt(id));
    Object.assign(comment, req.body);
    res.json(comment);
});

// Delete a comment
app.delete("/comments/:id", (req, res) => {
    const id = req.params.id;
    comments = comments.filter(comment => comment.id !== parseInt(id));
    res.json(comments);
});

// Listen to port 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
