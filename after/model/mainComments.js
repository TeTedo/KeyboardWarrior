const Sequelize = require("sequelize");

class MainComment extends Sequelize.Model {
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
        modelName: "MainComment",
        tableName: "MainComments",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.MainComment.belongsTo(db.User, {
      foreignKey: "user_id",
      targetKey: "user_id",
    });
  }
}

module.exports = MainComment;
