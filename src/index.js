import React from 'react';
import ReactDom from 'react-dom';
import { Providr } from 'react-redux';
import App from './components/App';

ReactDom.render(
    <Provider>    
      <App />
    </Provider>,document.getElementById("root")
  )