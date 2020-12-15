module.exports = (sequelize, Sequelize) => {

    const TutorialTags = sequelize.define("tutorialTag", {
        tutorialId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'tutorials',
                key: 'id'
            }
        },
        tagId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'tags',
                key: 'id'
            }
        }    
        
        });
        return TutorialTags;
    };