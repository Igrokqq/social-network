import React from 'react';
import { User } from './SignUpForm';
import FirstNameInput from './Ui/FirstNameInput';
import LastNameInput from './Ui/LastNameInput';

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
      <FirstNameInput
        onInput={(firstName: string): void => {
          setFormState({
            ...formState,
            firstName
          });
        }}
        value={formState.firstName}
        setValidationStatus={setValidationStatus}
      />
      <LastNameInput
        onInput={(lastName: string): void => {
          setFormState({
            ...formState,
            lastName
          });
        }}
        value={formState.lastName}
        setValidationStatus={setValidationStatus}
      />
    </>
  );
}
