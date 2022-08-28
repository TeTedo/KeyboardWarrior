const Sequelize = require("sequelize");
const config = require("../config/cofig");
const User = require("./users");
const MainPost = require("./mainPosts");
const CommunityPost = require("./communityPosts");
const Follow = require("./follows");

const sequelize = new Sequelize(
  config.dev.database,
  config.dev.username,
  config.dev.password,
  config.dev
);

const db = {};
db.sequelize = sequelize;
db.User = User;
db.CommunityPost = CommunityPost;
db.MainPost = MainPost;
db.Follow = Follow;

User.init(sequelize);
CommunityPost.init(sequelize);
MainPost.init(sequelize);
Follow.init(sequelize);

User.associate(db);
CommunityPost.associate(db);
MainPost.associate(db);

module.exports = db;
