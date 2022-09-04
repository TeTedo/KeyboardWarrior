// const Sequelize = require("sequelize");
// const CommunityPost = require("./communityPosts");
// const User = require("./users");

// class User_CommunityPost extends Sequelize.Model {
//     static init(sequelize) {
//         return super.init(
//             {
//                 user_user_id: {
//                     type: Sequelize.STRING(16),
//                     references: {
//                         model: User,
//                         key: "nick_name",
//                     },
//                 },
//                 post_user_id: {
//                     type: Sequelize.STRING(16),
//                     // references: {
//                     //     model: CommunityPost,
//                     //     // key: "user_id",
//                     // },
//                 },
//             },
//             {
//                 sequelize: sequelize,
//                 timestamps: true,
//                 underscored: true,
//                 modelName: "User_CommunityPost",
//                 tableName: "users_communityPosts",
//                 charset: "utf8",
//                 collate: "utf8_general_ci",
//             }
//         );
//     }
//     static associate(db) {
//         db.User_CommunityPost.belongsTo(db.User, {
//             foreignkey: "user_user_id",
//         });
//         db.User_CommunityPost.belongsTo(db.CommunityPost, {
//             foreignkey: "post_user_id",
//         });
//     }
// }

// // module.exports = User_CommunityPost;
