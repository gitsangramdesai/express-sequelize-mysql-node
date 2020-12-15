module.exports = (sequelize, Sequelize) => {

    const CourseDetails = sequelize.define("courseDetail", {
        instructor: {
            type: Sequelize.STRING
        },
        prerequisite: {
            type: Sequelize.STRING
        }, 
        courseId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'courses',
                key: 'id'
            }
        }  
        
        });
        return CourseDetails;
    };