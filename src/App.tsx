import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';

import store from './store';

import GlobalStyle from './styles/global';
import Footer from './components/Footer';

const App: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
      <Footer />
    </BrowserRouter>
    <GlobalStyle />
  </Provider>
);

export default App;
