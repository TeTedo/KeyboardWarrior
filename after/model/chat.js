const Sequelize = require("sequelize");

class Chat extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        speaker: {
          type: Sequelize.STRING(16),
          allowNull: false,
        },
        listener: {
          type: Sequelize.STRING(16),
          allowNull: false,
        },
        message: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
      },
      {
        sequelize: sequelize,
        timestamps: false,
        underscored: true,
        modelName: "Chat",
        tableName: "Chats",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Chat.belongsTo(db.User, {
      foreignKey: "speaker",
      targetKey: "user_id",
    });
  }
}

module.exports = Chat;
