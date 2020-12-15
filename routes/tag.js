var express = require('express');
var router = express.Router();

const tags = require("../controllers/tag.js");

var router = require("express").Router();

// Retrieve all Tutorials
router.get("/", tags.findAll);


module.exports = router;