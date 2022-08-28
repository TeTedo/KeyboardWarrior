const Sequelize = require("sequelize");

class Follow extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        followingId: {
          type: Sequelize.STRING(16),
          allowNull: false,
          primaryKey: true,
        },
        followerId: {
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
