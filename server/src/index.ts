import { ApolloServer, BaseContext } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schemas/typeDefs.ts';
import { resolvers } from './resolvers/resolvers.ts';
interface Context {
  token?: string;
}

const server = new ApolloServer<Context>({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req }): Promise<BaseContext> => ({
    token: req.headers.authorization || '', // Example: Passing auth token
  }),
});

console.log(`🚀  Server ready at: ${url}`);
