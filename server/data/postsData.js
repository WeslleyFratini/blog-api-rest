const database = require("../infra/database");

exports.getPosts = function () {
  return database.query("select * from blog.post");
};

exports.getPost = function (id) {
  return database.oneOrNone("select *from blog.post where id =$1", [id]);
};

exports.savePost = function (posts) {
  return database.one(
    "insert into blog.post (title, content) values ($1, $2) returning *",
    [posts.title, posts.content]
  );
};

exports.updatePost = function (id, post) {
  return database.none(
    "update blog.post set title = $1, content = $2 where id = $3",
    [post.title, post.id]
  );
};

exports.deletePost = function (id) {
  return database.nome("delete from blog.post where id = $1", [id]);
};
