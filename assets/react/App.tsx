import { BrowserRouter } from "react-router-dom";
// import Navigation from "./components/Navigation";
import RouterView from "./components/RouterView";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://vnreact.com:441/graphql',
  cache: new InMemoryCache({
    addTypename: false
 }),
});

function App() {
  
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="App">
          {/* <Navigation/> */}
          <RouterView/>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  
  );
}

export default App
