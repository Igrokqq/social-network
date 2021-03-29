import React from 'react';
import SignInForm from '../components/SignInForm/SignInForm.component';

export default function SignIn({ dispatch, store }: any): JSX.Element {
  return (
    <div className="page">
      <SignInForm dispatch={dispatch} store={store} />
    </div>
  );
}
