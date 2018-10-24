const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// var id = '5bd06bf19d4b904818861422';

// if (!ObjectID.isValid(id)) {
//     console.log('Id no valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

var id = '5bd09a78a7990ef56b0b8e0';

User.findById(id).then((user) => {
    if (!user) {
        return console.log('ID not found');
    }
    console.log('User by ID', user);
}, (e) => {
    console.log('Some error', e);
});

// User.findById(id).then((user) => {
//     if (!user) {
//         return console.log('ID not found');
//     }
//     console.log('User by ID', user);
// }).catch((e) => {
//     console.log('Some error', e);
// });

