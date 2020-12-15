const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.js")(sequelize, Sequelize);
db.courses = require("./course.js")(sequelize, Sequelize);
db.tags = require("./tag.js")(sequelize, Sequelize);
db.tutorialTags = require("./tutorialTag.js")(sequelize, Sequelize);
db.courseDetail = require("./courseDetail.js")(sequelize, Sequelize);

/*one to one*/
db.courses.hasOne(db.courseDetail,{
  as: "courseDetail",
  foreignKey: "courseId",
});

/*many to many*/
db.tutorials.belongsToMany(db.tags, {
  through: "tutorialTag",
  as: "tags",
  foreignKey: "tutorialId",
});

db.tags.belongsToMany(db.tutorials, {
  through: "tutorialTag",
  as: "tutorials",
  foreignKey: "tagId",
});


/*one to many*/
db.courses.hasMany(db.tutorials, { as: "tutorials" });
db.tutorials.belongsTo(db.courses, {
  foreignKey: "courseId",
  as: "course",
});
module.exports = db;