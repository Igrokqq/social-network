import React from 'react';
import Logo from '../components/Logo';
import TwitterButton, { Themes as TwitterButtonThemes } from '../components/Ui/TwitterButton';
import RoutesConstants from '../routes/constants';
import AuthLayout from '../layouts/Auth';

export default function Auth(): JSX.Element {
  return (
    <AuthLayout>
      <div>
        <div>
          <Logo className="logo" />

          <div className="title">
            <span className="text">Happening now</span>
          </div>

          <div className="subtitle">
            <span className="text">Join Twitter today.</span>
          </div>

          <div className="button-wrapper">
            <TwitterButton
              text="Sign Up"
              linkTo={RoutesConstants.AUTH.SIGN_UP}
              className="w-100 sign-up"
              theme={TwitterButtonThemes.DEFAULT}
            />
            <TwitterButton text="Sign In" className="w-100" theme={TwitterButtonThemes.LIGHT}/>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
