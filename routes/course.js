var express = require('express');
var router = express.Router();

const courses = require("../controllers/course.js");

var router = require("express").Router();

// Create a new Course
router.post("/", courses.create);

// Retrieve all Courses
router.get("/", courses.findAll);

// Retrieve a single Course with id
router.get("/:id", courses.findOne);

// Update a Course with id
router.put("/:id", courses.update);

// Delete a Course with id
router.delete("/:id", courses.delete);

// Create a new Course
router.delete("/", courses.deleteAll);
  
module.exports = router;