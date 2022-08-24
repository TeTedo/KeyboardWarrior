const Sequelize = require("sequelize");

class CommunityPost extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                game_name: {
                    type: Sequelize.STRING(20),
                    allowNull: false,
                    primaryKey: true,
                },
                title: {
                    type: Sequelize.STRING(20),
                    allowNull: false,
                },
                post_txt: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
            },
            {
                sequelize: sequelize,
                timestamps: true,
                underscored: true,
                modelName: "User",
                tableName: "users",
                charset: "utf8",
                collate: "utf8_general_ci",
            }
        );
    }
}

module.exports = CommunityPost;
