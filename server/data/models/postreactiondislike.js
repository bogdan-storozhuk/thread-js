'use strict';
module.exports = (sequelize, DataTypes) => {
  const postReactionDislike = sequelize.define('postReactionDislike', {
    islike: DataTypes.BOOLEAN,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {});
  postReactionDislike.associate = function(models) {
    // associations can be defined here
  };
  return postReactionDislike;
};