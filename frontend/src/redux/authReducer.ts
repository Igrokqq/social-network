const ACTIONS = {
  SIGN_IN: 'SIGN_IN',
  SIGN_UP: 'SIGN_UP'
};

type ACTION = {
  type: typeof ACTIONS.SIGN_IN | typeof ACTIONS.SIGN_UP,
  payload: any
};

export default function authReducer(state: any = {}, action: ACTION): any {
  console.log('action', action);
  switch (action.type) {
    case ACTIONS.SIGN_IN:
      debugger;
      console.log('[redux] on sign in');
      break;
    case ACTIONS.SIGN_UP:
      return new Promise((resolve) => resolve(5)).then((response) => response);
    default:
      return state;
  }

  const outputState = action.payload || state;

  return {
    actions: ACTIONS,
    ...outputState
  };
}
