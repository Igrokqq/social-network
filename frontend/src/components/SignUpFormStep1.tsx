import React from 'react';
import { User } from './SignUpForm';
import LoginInput from './Ui/LoginInput';
import PasswordInput from './Ui/PasswordInput';

type Props = {
  setValidationStatus: (flag: boolean) => void;
  setFormState: (user: User) => void;
  formState: User;
}
export default function SignUpFormStep1({
  setValidationStatus,
  setFormState,
  formState
}: Props): JSX.Element {
  return (
    <>
      <LoginInput
        onInput={(login: string): void => {
          setFormState({
            ...formState,
            login
          });
        }}
        value={formState.login}
        setValidationStatus={setValidationStatus}
      />

      <PasswordInput
        onInput={(password: string): void => {
          setFormState({
            ...formState,
            password
          });
        }}
        value={formState.password}
        setValidationStatus={setValidationStatus}
      />
    </>
  );
}
