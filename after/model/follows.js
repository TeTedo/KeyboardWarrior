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
  static associate(db) {
    db.Follow.belongsTo(db.User, {
      foreignKey: "following_id",
      targetKey: "user_id",
    });
    db.Follow.belongsTo(db.User, {
      foreignKey: "follower_id",
      sourceKey: "user_id",
    });
  }
}

module.exports = Follow;
