export function loginUser(username, password) {
  return {
    type: 'AUTH_USER',
    payload: { username, password }
  }
}

export default function(state = {}, action) {
  switch (action.type) {
    case 'AUTH_USER':
      let { payload: { username, password }} = action;
      return Object.assign({}, state, {
          username, password
      });
    default:
      return state;
  }
}