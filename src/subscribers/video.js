import redis from 'redis';

const subscriber = redis.createClient();

subscriber.on('message', function (channel, message) {
    console.log('I received a message', channel, message);
});

subscriber.subscribe('video');