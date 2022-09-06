const Sequelize = require("sequelize");

class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        user_id: {
          type: Sequelize.STRING(16),
          allowNull: false,
          primaryKey: true,
        },
        user_pw: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING(10),
          allowNull: false,
        },
        nick_name: {
          type: Sequelize.STRING(10),
          allowNull: false,
        },
        mobile_number: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        profile_img: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        follower: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        following: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        login: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize: sequelize,
        timestamps: true,
        underscored: true,
        modelName: "User",
        tableName: "users",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.User.hasMany(db.CommunityPost, {
      foreignKey: "user_id",
      sourceKey: "user_id",
    });
    db.User.hasMany(db.MainComment, {
      foreignKey: "user_id",
      sourceKey: "user_id",
    });
    db.User.hasMany(db.MainPost, {
      foreignKey: "user_id",
      sourceKey: "user_id",
    });
    db.User.hasMany(db.Chat, {
      foreignKey: "speaker",
      sourceKey: "user_id",
    });
  }
}

module.exports = User;
