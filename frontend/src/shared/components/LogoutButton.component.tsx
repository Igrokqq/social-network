import React from 'react';
import ButtonTrigger from './ButtonTrigger.component';
import { AUTH_ACTIONS } from '../../redux/auth.reducer';
import { AuthPages } from '../../routes/auth.routes';

import '../../sass/components/LogoutButton.component.sass';

export default function LogoutButton({ dispatch }: any): JSX.Element {
  const _onLogout = function (): void {
    dispatch({
      type: AUTH_ACTIONS.LOGOUT,
      payload: {}
    });

    window.location.href = AuthPages.SIGN_IN;
  };

  return (
    <>
      <ButtonTrigger className="logout-button" text={'logout'} type="text" triggerOnClick={_onLogout} />
    </>
  );
}
