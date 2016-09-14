Posts = new Mongo.Collection('posts');


Posts.allow({
    insert: function(){
        return true;
    }
});



PostsSchema = new SimpleSchema({
    title: {
        type: String,
        optional: true,
        label: 'Title'
    },
    image: {
        type: String,
        optional: true,
        label: "Company"
    },
    link: {
        type: String,
        optional: true,
        label: "url",
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

Posts.attachSchema(PostsSchema);
