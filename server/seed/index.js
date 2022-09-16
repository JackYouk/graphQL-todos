const {User, Todo} = require('../models');
const db = require('../config/connection');

const users = [
    {
        username: 'za',
        email: 'zaaaaaa@gg.com',
        password: '500'
    },
    {
        username: 'ayyyyyy',
        email: 'ayyyyyy@gg.com',
        password: '505'
    },
    {
        username: 'paqqqqq',
        email: 'paqqqqqq@gg.com',
        password: '555'
    }
];

const todos = [
    {
        todo: 'eat',
        completed: 'false'
    },
    {
        todo: 'eat',
        completed: 'false'
    },
    {
        todo: 'eat',
        completed: 'false'
    }
];

db.once('open', async () => {
    await User.deleteMany({});
    await Todo.deleteMany({});

    const insertedUsers = await User.insertMany(users);
    todos[0].userId = insertedUsers[0]._id;
    todos[1].userId = insertedUsers[1]._id;
    todos[2].userId = insertedUsers[2]._id;

    const insertedTodos = await Todo.insertMany(todos);

    process.exit(0);
});