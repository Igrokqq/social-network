import React, { useState, FormEvent, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { User } from './SignUpForm';
import TwitterButton from './Ui/TwitterButton';
import EmailInput from './Ui/EmailInput';
import PasswordInput from './Ui/PasswordInput';

export type SignInFields = Pick<User, 'email' | 'password'>;

type Props = {
  onSubmit: (user: SignInFields) => void;
}

export default function SignInForm({ onSubmit }: Props): JSX.Element {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [state, setState] = useState<SignInFields>({
    password: '',
    email: ''
  });
  const [fieldsValidationStatuses, setFieldsValidationStatuses] = useState<{[key: string]: boolean}>({
    password: false,
    email: false
  });

  useEffect(() => {
    setIsValid(Object.values(fieldsValidationStatuses).every(Boolean));
  });

  const _onSubmit = async function (event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    onSubmit(state);
  };

  const _validate = (fieldName: string) => (isFieldValid: boolean): void => {
    setFieldsValidationStatuses({
      ...fieldsValidationStatuses,
      [fieldName]: isFieldValid
    });
  };

  return (
    <>
      <Form onSubmit={_onSubmit}>
        <EmailInput
          setValidationStatus={_validate('email')}
          onInput={(email: string): void => setState({ ...state, email })}
          value={state.email}
        />
        <PasswordInput
          setValidationStatus={_validate('password')}
          onInput={(password: string): void => setState({ ...state, password })}
          value={state.password}
        />

        <TwitterButton text="Sign In" type="submit" isDisabled={!isValid} />
      </Form>
    </>
  );
}
