const Sequelize = require("sequelize");
const config = require("../config/cofig");
const User = require("./users");

const CommunityPost = require("./communityPosts");

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

User.init(sequelize);
CommunityPost.init(sequelize);

User.associate(db);
CommunityPost.associate(db);

module.exports = db;
