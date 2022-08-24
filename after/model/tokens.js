const Sequelize = require("sequelize");

class Token extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        user_id: {
          type: Sequelize.STRING(16),
          primaryKey: true,
          allowNull: false,
        },
        access_token: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        refresh_token: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        underscored: true,
        timestamps: false,
        modelName: "Token",
        tableName: "tokens",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Token.belongsTo(db.User, {
      foreignKey: "userId",
      sourceKey: "user_id",
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  }
}

module.exports = Token;
