'use strict';

const express = require('express');
const bodyParser = require("body-parser");
const router = express.Router();
const app = new express();

app.use(bodyParser.urlencoded({ extended : false}));
app.use(bodyParser.json());

app.use("/", router);

app.get('/', (req, res) => {
    res.json({ "foo": "bar" });
});

router.get('/hello', (req, res) => {
    res.send("Hello, World!")
});

router.get('/hello/:name', (req, res) => {
    res.send("Hello, " + req.params['name'] + "!")
});

router.get('/new', (req, res) => {
    // just add a comment
    res.send("Hi! You are NEW!")
});

router.post('/handle', function (req, res) {
	console.log(req.body);
	res.json({ "post-foo" : "post-bar", "request" : req.body });
});

app.listen(3000, () => {
    console.log('Server up!');
});