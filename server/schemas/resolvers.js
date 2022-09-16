const {User, Todo} = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            try {
                return await User.find();
            } catch (error) {
                throw new Error(error);
            }
        }
    },
    Mutation: {
        // 2nd param is args
        createUser: async (_root, {username, email, password}) => {
            try {
                const newUser = await User.create({
                    username,
                    email,
                    password,
                });
                return newUser;
            } catch (error) {
                throw new Error(error);
            }
        }
    },
    // Field Resolvers
    User: {
        todos: async (root) => {
            return await Todo.find({userId: root._id});
        }
    },
    Todo: {
        user: async (root) => {
            return await User.findById(root.userId);
        }
    }
};

module.exports = resolvers;