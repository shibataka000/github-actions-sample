const redis = require("redis");

// 新しいRedisクライアントの作成
// REDIS_HOSTが設定されていなければ、デフォルトのホストはlocalhost
// REDIS_PORTが設定されていなければ、デフォルトのポートは6379
const redisClient = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
});

redisClient.on("error", function (err) {
    console.log("Error " + err);
});

// キー"octocat"に"Mona the octocat"という値を設定
redisClient.set("octocat", "Mona the Octocat", redis.print);
// キーを"octocat"、フィールドを"species"、"value"を"Cat and Octopus"に設定
redisClient.hset("species", "octocat", "Cat and Octopus", redis.print);
// キーを"octocat"、フィールドを"species"、"value"を"Dinosaur and Octopus"に設定
redisClient.hset("species", "dinotocat", "Dinosaur and Octopus", redis.print);
// キーを"octocat"、フィールドを"species"、 "value"を"Cat and Robot"に設定
redisClient.hset(["species", "robotocat", "Cat and Robot"], redis.print);
// キー"species"のすべてのフィールドを取得

redisClient.hkeys("species", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
    redisClient.quit();
});
