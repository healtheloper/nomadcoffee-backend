require("dotenv").config();
import { ApolloServer, gql } from "apollo-server";
import schema from "./schema";
import { getUser } from "./User/user.utils";

const server = new ApolloServer({
  schema,
  context: async ({ req }) => ({
    loggedUser: await getUser(req.headers.auth),
  }),
});
const PORT = process.env.PORT;

server.listen(PORT).then(() => {
  console.log(`✅ Server on localhost:${PORT}`);
});
