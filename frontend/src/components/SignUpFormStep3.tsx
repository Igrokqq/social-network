import React from 'react';
import { User } from './SignUpForm';
import PhoneInput from './Ui/PhoneInput';
import EmailInput from './Ui/EmailInput';
import GenderSelect from './Ui/GenderSelect';
import TwitterButton from './Ui/TwitterButton';

type Props = {
  setValidationStatus: (flag: boolean) => void;
  setFormState: (user: User) => void;
  formState: User;
  isFormValid: boolean;
}
export default function SignUpFormStep1({
  setValidationStatus,
  setFormState,
  formState,
  isFormValid
}: Props): JSX.Element {
  return (
    <>
      <PhoneInput
        onInput={(phone: string): void => {
          setFormState({
            ...formState,
            phone
          });
        }}
        value={formState.phone}
        setValidationStatus={setValidationStatus}
      />
      <EmailInput
        onInput={(email: string): void => {
          setFormState({
            ...formState,
            email
          });
        }}
        value={formState.email}
        setValidationStatus={setValidationStatus}
      />
      <GenderSelect
        onChange={(gender: string): void => {
          setFormState({
            ...formState,
            gender
          });
        }}
        value={formState.gender}
      />
      <TwitterButton text="Sign Up" type="submit" isDisabled={!isFormValid} />
    </>
  );
}
