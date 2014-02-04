var twitter = require('twitter');
var util = require('util');


console.log(process.env.CONSUMER_KEY);
console.log(process.env.CONSUMER_SECRET)
console.log(process.env.ACCESS_TOKEN_KEY)
console.log(process.env.ACCESS_TOKEN_SECRET)


var twit = new twitter({
    consumer_key:        process.env.CONSUMER_KEY,
    consumer_secret:     process.env.CONSUMER_SECRET,
    access_token_key:    process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});


twit

.verifyCredentials(function(data) {
    console.log("Authorized "+data.screen_name+" successfully!");
})

.search('nodejs OR #node', function(data) {
    data.statuses.map(function (x) {
        console.log(x.text);
    });
});
