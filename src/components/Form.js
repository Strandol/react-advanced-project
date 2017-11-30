import React from 'react';
import { Field, reduxForm } from 'redux-form';

function Form(props) {
  let { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <Field name="username" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" />
      </div>
      <input type="submit"/>
    </form>
  )
}

export default reduxForm({ form: 'userForm' })(Form)