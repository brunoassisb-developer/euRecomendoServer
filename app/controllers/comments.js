'use strict';

/**
 * Module dependencies.
 */

const async = require('co');
const respondOrRedirect = require('../utils');

/**
 * Load comment
 */

exports.load = function (req, res, next, id) {
  req.comment = req.article.comments
    .find(comment => comment.id === id);
    
  if (!req.comment) return next(new Error('Comment not found'));
  next();
};

/**
 * Create comment
 */

exports.create = function (req, res) {
  const article = req.article;
  article.addComment(req.user, req.body);
  respondOrRedirect({ res }, `/articles/${article._id}`, article.comments[0]);
};

/**
 * Delete comment
 */

exports.destroy = function (req, res) {
  req.article.removeComment(req.params.commentId);
  req.flash('info', 'Removed comment');
  res.redirect('/articles/' + req.article.id);
  respondOrRedirect({ req, res }, `/articles/${req.article.id}`, {}, {
    type: 'info',
    text: 'Removed comment'
  });
};
