// import { Meteor } from 'meteor/meteor';

// Meteor.methods({
//     updatePosts: function() {
//         //Get posts from codepen
//         HTTP.get('https://itunes.apple.com/nl/rss/topsongs/limit=10/json', function(error, postResponse) {
//             var posts = [ ];
//             var entries = postResponse.data.feed.entry;
//             var sort = 0;
//             _.each(entries, function(entry) {
//                 var post = { };
//                 post._id = entry.id.attributes['im:id'];
//                 post.sort = sort;
//                 post.title = entry.title.label;
//                 post.image = entry['im:image'][0].lable;
//                 post.link = entry.link[0].attributes.href;
//                 post.preview = entry.link[1].attributes.href;
//
//                 //add post to list
//                 posts.push(post);
//                 //increase sort
//                 sort++
//             }, this);
//
//             //delete all existing posts from db
//             Posts.find().forEach(function(post) {
//                 Posts.remove(post._id);
//             });
//
//             //insert new songs into db
//             _.each(posts, function(post) {
//                 Posts.upsert(post._id, post);
//             }, this);
//         });
//     }
// });
