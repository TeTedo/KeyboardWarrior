const Sequelize = require("sequelize");

class MainPostLike extends Sequelize.Model {
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
        like: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
      },
      {
        sequelize: sequelize,
        timestamps: true,
        underscored: true,
        modelName: "MainPostLike",
        tableName: "MainPostLikes",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
}

module.exports = MainPostLike;
