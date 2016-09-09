//Cron jobs
SyncedCron.options.collectionName = 'cronjobs';

SyncedCron.add({
    name: 'Codepen posts',
    schedule: function(parser) {
        return parser.text('every 1 minutes');
    },
    job: function() {
        Meteor.call('updatePosts');
    }
});

Meteor.startup(function() {
    //start job
    SyncedCron.start();
});
