const Sequelize = require("sequelize");

class Login extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        user_id: {
          type: Sequelize.STRING(16),
          allowNull: false,
          primaryKey: true,
        },
        access_token: {
          allowNull: false,
        },
        refresh_token: {
          allowNull: false,
        },
      },
      {
        sequelize,
        underscored: true,
        modelName: "Login",
        tableName: "Logins",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
}

module.exports = Login;
