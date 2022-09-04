const Sequelize = require("sequelize");

class Follow extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                following_id: {
                    type: Sequelize.STRING(16),
                    allowNull: false,
                },
                follower_id: {
                    type: Sequelize.STRING(16),
                    allowNull: false,
                },
            },
            {
                sequelize: sequelize,
                timestamps: false,
                underscored: true,
                modelName: "Follow",
                tableName: "follows",
                charset: "utf8",
                collate: "utf8_general_ci",
            }
        );
    }
}

module.exports = Follow;
