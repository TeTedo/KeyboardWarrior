const Sequelize = require("sequelize");

class CommunityPost extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        game_name: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        user_id: {
          type: Sequelize.STRING(16),
          allowNull: false,
        },
        text: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        // main_html: {
        //     type: Sequelize.TEXT,
        //     allowNull: false,
        // },
        hashtag_values: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        image1: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        image2: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        image3: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        image4: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        image5: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        like: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        comment: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
      },
      {
        sequelize: sequelize,
        timestamps: true,
        underscored: true,
        modelName: "CommunityPost",
        tableName: "community_posts",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.CommunityPost.belongsTo(db.User, {
      foreignKey: "user_id",
      targetKey: "user_id",
    });
    db.CommunityPost.hasMany(db.CommunityPostLike, {
      foreignKey: "post_id",
      sourceKey: "id",
    });
  }
}

module.exports = CommunityPost;
