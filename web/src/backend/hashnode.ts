import { ApolloClient, InMemoryCache } from '@apollo/client';

const hashnodeCLient = new ApolloClient({
  uri: 'https://api.hashnode.com',
  cache: new InMemoryCache(),
});

export default hashnodeCLient;
