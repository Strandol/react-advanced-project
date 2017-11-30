import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import { loginUser } from '../reducer/auth';

import Form from './Form.js';

class App extends Component {
  submitForm(values) {
    let { username, password } = values;
    store.dispatch(loginUser(username, password))
  }
  
  render() {
    return (
      <Provider store={store}>
        <Form onSubmit={this.submitForm}/>
      </Provider>
    );
  }
}

export default App;
