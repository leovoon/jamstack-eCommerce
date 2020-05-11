import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  uri: "https://api-ap-northeast-1.graphcms.com/v2/cka28vqef00ev01z916s282cy/master"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();