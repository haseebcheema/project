const Todo = require("../../models/todo.mongo");

const checkAuthentication = (userId) => {
  if (!userId) throw new Error("Authentication required");
};

const todoResolvers = {
  Query: {
    getTodos: async (parent, args, { userId }) => {
      checkAuthentication(userId);
      const todos = await Todo.find({ userId });
      if (!todos) {
        return [];
      }
      return todos;
    },
  },

  Mutation: {
    addTodo: async (parent, { title }, { userId }) => {
      checkAuthentication(userId);
      const newTodo = new Todo({ title, userId });
      return await newTodo.save();
    },

    deleteTodo: async (parent, { id }, { userId }) => {
      checkAuthentication(userId);
      const todo = await Todo.findOneAndDelete({ _id: id, userId });

      if (!todo) {
        throw new Error("Todo not found or unauthorized");
      }
      return "Todo deleted successfully";
    },
  },
};

module.exports = todoResolvers;
