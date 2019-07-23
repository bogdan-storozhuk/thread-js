'use strict';
module.exports = (sequelize, DataTypes) => {
  const postReactionLike = sequelize.define('postReactionLike', {
    islike: DataTypes.BOOLEAN,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {});
  postReactionLike.associate = function(models) {
    // associations can be defined here
  };
  return postReactionLike;
};