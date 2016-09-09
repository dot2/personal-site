Meteor.publish('posts', function() {
    return Posts.findOne();
});
