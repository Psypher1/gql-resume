import { ApolloServer } from "apollo-server-micro";
// import { typeDefs } from "./schema";
// The number of things not working is unbelievable 
import { schema } from "@/src/schema";

const server = new ApolloServer({ schema });

/*
 * handler receives the request from the user
 * we have to give path since our server is under /api
 */
// const handler = server.createHandler({ path: "/api/graphql" });

// ! server must be awaited before create handler
module.exports = server.start().then(() => {
  return server.createHandler({ path: "/api/graphql" });
});

export const config = {
  api: {
    bodyParser: false,
  },
};

// export default handler;
