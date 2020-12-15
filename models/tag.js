module.exports = (sequelize, Sequelize) => {

    const Tags = sequelize.define("tag", {
        name: {
            type: Sequelize.STRING
        }
        
        });
        return Tags;
    };