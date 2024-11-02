require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const connectDB = require("./config/db.mongo");
const typeDefs = require("./graphql/schema/todo.schema");
const todoResolvers = require("./graphql/resolvers/todo.resolver");
const authMiddleware = require("./middlewares/auth.middleware");
const errorHandler = require("./middlewares/error.middleware");
const authRoutes = require("./routes/auth.routes");

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);

const server = new ApolloServer({
  typeDefs,
  resolvers: todoResolvers,
  context: ({ req }) => {
    const userId = authMiddleware({ req })?.userId;
    return { req, userId };
  },
});

const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
  
  app.use(errorHandler);
  
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`GraphQL endpoint: http://localhost:${PORT}${server.graphqlPath}`);
  });
};

startServer();
