Meteor.publish('projects', function() {
    return Projects.find({ }, {sort: {createdAt: -1}});
});
