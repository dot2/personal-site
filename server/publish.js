Meteor.publish('project', function() {
    return Projects.find({ }, {sort: {createdAt: -1}});
});
