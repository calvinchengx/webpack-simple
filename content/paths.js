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
    },
    about: {
      title: 'About',
      md: 'about.md',
      published: '2015-01-02',
      preview: 'This is all about craftsmanship'
    }
  }
};

module.exports = {
  allPaths: function() {
    return paths;
  },
  allPosts: function() {
    return paths.posts;
  },
  postForPath: function(path) {
    var directoryRequire = require.context('./markdown/posts', false, /^\.\/.*\.md$/);
    var retrieve = './' + paths.posts[path].md;
    return directoryRequire(retrieve);
  }
};
