'use strict';

var paths = {
  '/privacy': {
    title: 'Privacy Policy',
    page: 'privacy_policy.md'
  },
  '/terms': {
    title: 'Terms of Service',
    page: 'terms_of_service.md'
  },
  posts: {
    welcome: {
      title: 'Welcome',
      md: 'welcome.md',
      published: '2015-01-01',
      preview: 'Hello there'
    }
  }
};

module.exports = { 
  allPaths: function() {
    return paths;
  },
  allPosts: function() {
    return paths.posts;
  }
};
