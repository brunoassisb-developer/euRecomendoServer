'use strict';

/**
 * Module dependencies.
 */

const mongoose = require('mongoose');
const async = require('co');
const respond = require('../utils');
const Article = mongoose.model('Article');

/**
 * List items tagged with a tag
 */

exports.index = function (req, res) {
  const criteria = { tags: req.params.tag };
  const page = (req.params.page > 0 ? req.params.page : 1) - 1;
  const limit = 30;
  const options = {
    limit: limit,
    page: page,
    criteria: criteria
  };

  const articles =  Article.list(options);
  const count = Article.count(criteria);

  respond(res, 'articles/index', {
    title: 'Articles tagged ' + req.params.tag,
    articles: articles,
    page: page + 1,
    pages: Math.ceil(count / limit)
  });
};
