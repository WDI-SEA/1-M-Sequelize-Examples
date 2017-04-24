var db = require('./models');


// ------ Create An Author First ------- //
// db.author.create({
//   name: 'Reno'
// })

// ------ Find a Author, Then Have That Author Create Post ------ //
// ------ Run this twice with two different posts. For Good Measure ------ //
// db.author.findOne({
//   where: {
//     name: 'Reno'
//   }
// }).then(function(author) {
//   // author is 'Reno'
//   author.createPost({
//     title: 'One Cool Trick You Wont Believe',
//     content: 'Okay, it was quiet believable after all...'
//   }).then(function(post) {
//     // post is the post we created above
//     console.log(post.title);
//   })
// })


// --------- Get All Posts From An Author ------------ //
// db.author.findOne().then(function(author) {
//   // author is 'Reno'. Found the first result
//   author.getPosts().then(function(posts) {
//     posts.forEach(function(post, index) {
//       console.log('Post #' + index, post.title);
//     });
//   });

// });


// -------- Create a Unassosiated Post ------------- //

// db.post.create({
//   title: 'Im all alone',
//   content: 'So lets throw a party! :dancingmonkey:'
// }).then(function(post) {
//   console.log(post.title);
//   // take note of the authorId being zero.
// });


// ---------- Attach an Unassosiated Post to an Author ------- //

// db.author.findOne().then(function(author) {
//   author.addPost(4); // 4 is the id
// });


// ---------- Eager Loading ---------- //
// db.author.findOne({
//   include: [db.post]
// }).then(function(author) {
//   console.log(author.name + ' has ' + author.posts.length + ' posts:');
//   console.log('----------------------------------------');
//   author.posts.forEach(function(post) {
//     console.log(post.title);
//   });
// });