const Sequelize = require("sequelize");
const config = require("../config/cofig");
const User = require("./users");
const MainPost = require("./mainPosts");
const Follow = require("./follows");
const MainPostLike = require("./mainPostLike");
const MainComment = require("./mainComments");
const CommunityPost = require("./communityPosts");
const CommunityPostLike = require("./communityPostLikes");
const CommunityComment = require("./communityComments");
const Chat = require("./chat");
const Notification = require("./notification");
const sequelize = new Sequelize(
  config.dev.database,
  config.dev.username,
  config.dev.password,
  config.dev
);

const db = {};
db.sequelize = sequelize;
db.User = User;
db.MainPost = MainPost;
db.Follow = Follow;
db.MainPostLike = MainPostLike;
db.MainComment = MainComment;
db.CommunityPost = CommunityPost;
db.CommunityPostLike = CommunityPostLike;
db.CommunityComment = CommunityComment;
db.Chat = Chat;
db.Notification = Notification;

User.init(sequelize);
MainPost.init(sequelize);
MainPostLike.init(sequelize);
MainComment.init(sequelize);
Follow.init(sequelize);
CommunityPost.init(sequelize);
CommunityPostLike.init(sequelize);
CommunityComment.init(sequelize);
Chat.init(sequelize);
Notification.init(sequelize);

User.associate(db);
MainPost.associate(db);
MainComment.associate(db);
CommunityPost.associate(db);
CommunityPostLike.associate(db);
CommunityComment.associate(db);
Chat.associate(db);
module.exports = db;
