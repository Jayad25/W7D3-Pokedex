import React from 'react';
import { Provider } from 'react-redux';

const Root = ({ store }) =>(
    <Provider store={store}>
      <div> Yo Whatsup</div>
    </Provider>
);

export default Root;
