import postRepository from '../../data/repositories/post.repository';
import postReactionLikeRepository from '../../data/repositories/post-reaction-like.repository';
import postReactionDislikeRepository from '../../data/repositories/post-reaction-dislike.repository';

export const getPosts = filter => postRepository.getPosts(filter);

export const getPostById = id => postRepository.getPostById(id);

export const create = (userId, post) => postRepository.create({
    ...post,
    userId
});

export const setReactionLike = async (userId, { postId, isLike = true }) => {
    // define the callback for future use as a promise
    const updateOrDelete = react => (react.isLike === isLike
        ? postReactionLikeRepository.deleteById(react.id)
        : postReactionLikeRepository.updateById(react.id, { isLike }));

    const reaction = await postReactionLikeRepository.getPostReaction(userId, postId);

    const result = reaction
        ? await updateOrDelete(reaction)
        : await postReactionLikeRepository.create({ userId, postId, isLike });

    // the result is an integer when an entity is deleted
    return Number.isInteger(result) ? {} : postReactionLikeRepository.getPostReaction(userId, postId);
};

export const setReactionDislike = async (userId, { postId, isDislike = true }) => {
    // define the callback for future use as a promise
    const updateOrDelete = react => (react.isDislike  === isDislike 
        ? postReactionDislikeRepository.deleteById(react.id)
        : postReactionDislikeRepository.updateById(react.id, { isDislike }));

    const reaction = await postReactionDislikeRepository.getPostReaction(userId, postId);

    const result = reaction
        ? await updateOrDelete(reaction)
        : await postReactionDislikeRepository.create({ userId, postId, isDislike  });

    // the result is an integer when an entity is deleted
    return Number.isInteger(result) ? {} : postReactionDislikeRepository.getPostReaction(userId, postId);
};

