const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server.');

    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5bcdfb7800d4aa09ac6554ee')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos');
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log('Todos count:', count);
    // }, (err) => {
    //     console.log('Unable to fetch todos');
    // });

    db.collection('Users').find({
        location: 'Kjøpsvik'
    }).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch Users');
    });
    
    client.close();
});