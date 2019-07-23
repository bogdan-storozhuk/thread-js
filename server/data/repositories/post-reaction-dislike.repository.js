import { PostReactionDislikeModel, PostModel } from '../models/index';
import BaseRepository from './base.repository';

class PostReactionDislikeRepository extends BaseRepository {
    getPostReaction(userId, postId) {
        return this.model.findOne({
            group: [
                'postReactionDislike.id',
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

export default new PostReactionDislikeRepository(PostReactionDislikeModel);
