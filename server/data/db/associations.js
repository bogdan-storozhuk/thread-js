export default (models) => {
    const {
        User,
        Post,
        PostReactionLike,
        PostReactionDislike,
        Comment,
        Image
    } = models;


    Image.hasOne(User);
    Image.hasOne(Post);

    User.hasMany(Post);
    User.hasMany(Comment);
    User.hasMany(PostReactionLike);
    User.hasMany(PostReactionDislike);
    User.belongsTo(Image);

    Post.belongsTo(Image);
    Post.belongsTo(User);
    Post.hasMany(PostReactionLike);
    Post.hasMany(PostReactionDislike);
    Post.hasMany(Comment);

    Comment.belongsTo(User);
    Comment.belongsTo(Post);

    PostReactionLike.belongsTo(Post);
    PostReactionLike.belongsTo(User);
    PostReactionDislike.belongsTo(Post);
    PostReactionDislike.belongsTo(User);
};
