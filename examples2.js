var db = require('./models');


// Linux users: change your config/config.json file!


// create post, then find author and add post to the author...
db.post.create({
    title: 'blah (cont.)',
    content: 'more blah'
}).then(function(post) {
    db.author.find({
        where: { name: "Connor" }
    }).then(function(author) {
        author.addPost(post);
    });
});

// or in reverse!
// find author, then create post and add that post...
db.author.find({
    where: { name: "Connor" }
}).then(function(author) {
    db.post.create({
        title: 'blahhhhhhhh',
        content: 'more more stuff'
    }).then(function(post) {
        author.addPost(post);
    });
});

// simplest way...
db.author.find({
    where: { name: "Connor" }
}).then(function(author) {
    author.createPost({
        title: 'Created in the best way',
        content: 'more more stuff'
    }).then(function(post) {
        console.log("created post!");
    });
});

// find a post....
db.post.findOne().then(function(post) {
    console.log("post", post.get());

    // call the 'getAuthor' function to get
    // the author that this post belongs to
    post.getAuthor().then(function(author) {
        console.log(author.get());
    });
});