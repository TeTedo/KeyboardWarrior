const Sequelize = require("sequelize");

class CommunityComment extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                post_id: {
                    type: Sequelize.INTEGER,
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
                profile_img: {
                    type: Sequelize.TEXT,
                    allowNull: false,
                },
            },
            {
                sequelize: sequelize,
                timestamps: true,
                underscored: true,
                modelName: "CommunityComment",
                tableName: "communityComments",
                charset: "utf8",
                collate: "utf8_general_ci",
            }
        );
    }
    static associate(db) {
        db.CommunityComment.belongsTo(db.User, {
            foreignKey: "user_id",
            sourceKey: "user_id",
        });
    }
}

module.exports = CommunityComment;
