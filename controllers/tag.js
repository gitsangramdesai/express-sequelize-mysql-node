const db = require("../models"); // models path depend on your structure
const Tutorial = db.tutorials;
const Course = db.courses;
const Tag = db.tags;
const TutorialTag = db.tutorialTags;


    exports.findAll = (req, res) => {
      Tag.findAll({ 
        where: {} ,
        include: {
          model: Tutorial, as: "tutorials",
          attributes:['title', 'description']
        }
      })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving tutorials."
          });
        });
    };