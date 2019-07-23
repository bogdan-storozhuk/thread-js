import orm from '../db/connection';
import associate from '../db/associations';

const User = orm.import('./user');
const Post = orm.import('./post');
const PostReactionLike = orm.import('./postreactionlike.js');
const PostReactionDislike = orm.import('./postreactiondislike.js');
const Comment = orm.import('./comment');
const Image = orm.import('./image');

associate({
    User,
    Post,
    PostReactionLike,
    PostReactionDislike,
    Comment,
    Image
});

export {
    User as UserModel,
    Post as PostModel,
    PostReactionLike as PostReactionLikeModel,
    PostReactionDislike as PostReactionDislikeModel,
    Comment as CommentModel,
    Image as ImageModel
};
