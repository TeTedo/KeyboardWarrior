const Sequelize = require("sequelize");

class CommunityPost extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                game_name: {
                    type: Sequelize.STRING(20),
                    allowNull: false,
                },
                user_id: {
                    type: Sequelize.STRING(16),
                    allowNull: false,
                },
                nick_name: {
                    type: Sequelize.STRING(10),
                    allowNull: false,
                },
                text: {
                    type: Sequelize.TEXT,
                    allowNull: false,
                },
                main_html: {
                    type: Sequelize.TEXT,
                    allowNull: false,
                },
                hashtag_values: {
                    type: Sequelize.STRING,
                    // type: Sequelize.ARRAY(Sequelize.TEXT),
                    //
                    // type: Sequelize.ARRAY(Sequelize.ENUM),
                    // type: Sequelize.ARRAY(Sequelize.ENUM),
                    allowNull: true,
                },
            },
            {
                sequelize: sequelize,
                timestamps: true,
                underscored: true,
                modelName: "CommunityPost",
                tableName: "community_posts",
                charset: "utf8",
                collate: "utf8_general_ci",
            }
        );
    }
    static associate(db) {
        db.CommunityPost.belongsTo(db.User, {
            foreignKey: "user_id",
            targetKey: "user_id",
        });
    }
}

module.exports = CommunityPost;
