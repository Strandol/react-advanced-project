let initialState = {
  isSignIn: false
}

export function loginUser(username, password) {
  return {
    type: 'AUTH_USER',
    payload: { username, password }
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'AUTH_USER':
      let { payload: { username, password }} = action;
      return Object.assign({}, state, {
          username, password
      });
    case 'AUTH_USER_SUCCESS':
      let { isSignIn } = action;
      return Object.assign({}, state, { isSignIn })
    default:
      return state;
  }
}