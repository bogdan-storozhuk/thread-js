import { PostReactionLikeModel, PostModel } from '../models/index';
import BaseRepository from './base.repository';

class PostReactionLikeRepository extends BaseRepository {
    getPostReaction(userId, postId) {
        return this.model.findOne({
            group: [
                'postReactionLike.id',
                'post.id'
            ],
            where: { userId, postId },
            include: [{
                model: PostModel,
                attributes: ['id', 'userId']
            }]
        });
    }
}

export default new PostReactionLikeRepository(PostReactionLikeModel);
