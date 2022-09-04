const Sequelize = require("sequelize");

class MainPost extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                user_id: {
                    type: Sequelize.STRING(16),
                    allowNull: false,
                },
                nick_name: {
                    type: Sequelize.STRING(10),
                    allowNull: false,
                },
                profile_img: {
                    type: Sequelize.TEXT,
                    allowNull: false,
                },
                like: {
                    type: Sequelize.INTEGER,
                    allowNull: true,
                },
                comment: {
                    type: Sequelize.INTEGER,
                    allowNull: true,
                },
                text: {
                    type: Sequelize.TEXT,
                    allowNull: false,
                },

                image1: {
                    type: Sequelize.TEXT,
                    allowNull: true,
                },
                image2: {
                    type: Sequelize.TEXT,
                    allowNull: true,
                },
                image3: {
                    type: Sequelize.TEXT,
                    allowNull: true,
                },
                image4: {
                    type: Sequelize.TEXT,
                    allowNull: true,
                },
                image5: {
                    type: Sequelize.TEXT,
                    allowNull: true,
                },
            },
            {
                sequelize: sequelize,
                timestamps: true,
                underscored: true,
                modelName: "MainPost",
                tableName: "MainPosts",
                charset: "utf8",
                collate: "utf8_general_ci",
            }
        );
    }
    static associate(db) {
        db.MainPost.belongsTo(db.User, {
            foreignKey: "user_id",
            targetKey: "user_id",
        });
    }
}

module.exports = MainPost;
