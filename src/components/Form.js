import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

function Form(props) {
  let { handleSubmit, isSignIn } = props;
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
      {isSignIn ? <h2>Hello Admin! Dvalian!</h2> : <h2>Go away from my admin page!</h2>}
    </form>
  )
}

export default connect(({auth}) => {
  return { isSignIn: auth.isSignIn }
})(reduxForm({ form: 'userForm' })(Form));