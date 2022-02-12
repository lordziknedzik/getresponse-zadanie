import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import GlobalContextProvider from './contexts/GlobalProvider.contexts'
import {QueryClientProvider, QueryClient} from 'react-query'


const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalContextProvider>
        <Router>
          <App />
        </Router>
      </GlobalContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

