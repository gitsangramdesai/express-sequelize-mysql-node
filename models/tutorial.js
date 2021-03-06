module.exports = (sequelize, Sequelize) => {

    const Tutorial = sequelize.define("tutorial", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        }, 
        published: {     
            type: Sequelize.BOOLEAN
        },
        courseId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'courses',
                key: 'id'
            }
        }  
        });
        return Tutorial;
    };

    