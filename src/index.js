import React from 'react';
import ReactDOM from 'react-dom/client';

import { ApolloClient, ApolloProvider, InMemoryCache  } from '@apollo/client';

import './index.css';
import App from './App';

const client = new ApolloClient({
  uri: "https://ap-south-1.cdn.hygraph.com/content/cm8uwfgir02hj07wfk43ryc4j/master",
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

