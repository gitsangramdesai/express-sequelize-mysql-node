module.exports = (sequelize, Sequelize) => {

    const Course = sequelize.define("course", {
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        }, 
        fees: {     
            type: Sequelize.INTEGER
        }
        
        });
        return Course;
    };