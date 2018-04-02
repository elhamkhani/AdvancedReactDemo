import React from 'react';
import ReactDom from 'react-dom';
import App from 'Components/App';
import StateApi from 'state-api';

const store = new StateApi(window.initialData);

ReactDom.render(
  <App store={store}/>,
  document.getElementById('root')
);
