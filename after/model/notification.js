const Sequelize = require("sequelize");

class Notification extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        user_id: {
          type: Sequelize.STRING(16),
          allowNull: false,
        },
        opponent_id: {
          type: Sequelize.STRING(16),
          allowNull: false,
        },
        what: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        check: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
      },
      {
        sequelize: sequelize,
        timestamps: true,
        underscored: true,
        modelName: "Notification",
        tableName: "Notifications",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
}

module.exports = Notification;
