import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SignUpForm, { User } from '../components/SignUpForm';
import AuthLayout from '../layouts/Auth';
import AuthHelper from '../helpers/Auth';
import RoutesConstants from '../routes/constants';
import AlertDismissible from '../components/Ui/AlertDismissible';
import TwitterLink from '../components/Ui/TwitterLink';

export default function SignUp(): JSX.Element {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const { push: historyPush } = useHistory();

  const _onSubmit = async function (user: User): Promise<void> {
    try {
      await AuthHelper.signUp(user);

      historyPush(RoutesConstants.AUTH.SIGN_IN);
    } catch (error) {
      setErrorMessage(error.message.join());
    }
  };

  return (
    <AuthLayout>
      <AlertDismissible
        content={errorMessage}
        onClose={() => setErrorMessage('')}
        show={!!errorMessage}
      />
      <SignUpForm onSubmit={_onSubmit}/>
      <div className="d-flex justify-content-end h-auto">
        <TwitterLink text="Sign In" to={RoutesConstants.AUTH.SIGN_IN} />
      </div>
    </AuthLayout>
  );
}
