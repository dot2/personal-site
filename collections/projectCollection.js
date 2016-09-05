Projects = new Meteor.Collection('projects');

Projects.allow({
    insert: function(){
        return true;
    }
});

ProjectsSchema = new SimpleSchema({
    title: {
        type: String,
        optional: true,
        label: 'Project Title'
    },
    description: {
        type: String,
        optional: true,
        label: "Description"
    },
    imageUrl: {
        type: String,
        optional: true,
        label: "Image URL",
        autoform: {
            afFieldInput: {
                type: 'url'
            }
        }
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function() {
            return new Date();
        },
        autoform: {
            type: "hidden"
        }
    }
});

Projects.attachSchema(ProjectsSchema);
