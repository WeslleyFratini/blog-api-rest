const database = require("../infra/database");

exports.getPosts = function () {
  return database.query("select * from blog.post");
};

exports.savePost = function (posts) {
  return database.one(
    "insert into blog.post (title, content) values ($1, $2) returning *",
    [posts.title, posts.content]
  );
};

exports.deletePost = function (id) {
  return database.nome("delete from blog.post where id = $1", [id]);
};
