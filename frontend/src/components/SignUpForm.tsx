import React, { FormEvent, useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import PrevNextStepper, { POSITIONS as PrevNextStepperPositions } from './Ui/PrevNextStepper';
import SignUpFormStep1 from './SignUpFormStep1';
import SignUpFormStep2 from './SignUpFormStep2';
import SignUpFormStep3 from './SignUpFormStep3';

export type User = {
  readonly login: string;
  readonly password: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly gender: string;
  readonly phone: string;
  readonly email: string;
};

type Props = {
  readonly className?: string;
  readonly onSubmit: (user: User) => void;
};

export default function SignUpForm({ onSubmit, className }: Props): JSX.Element {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [state, setState] = useState<User>({
    login: '',
    password: '',
    firstName: '',
    lastName: '',
    gender: '',
    phone: '',
    email: ''
  });

  useEffect(() => {
    setIsValid(isValid ? Object.values(state).every(Boolean) : false);
  });

  const _onSubmit = async function (event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    onSubmit(state);
  };

  return (
    <Form className={className || ''} onSubmit={_onSubmit}>
      <PrevNextStepper position={PrevNextStepperPositions.TOP} steps={[
        <SignUpFormStep1
          key="0"
          setFormState={setState}
          formState={state}
          setValidationStatus={setIsValid}
        />,
        <SignUpFormStep2
          key="1"
          setFormState={setState}
          formState={state}
          setValidationStatus={setIsValid}
        />,
        <SignUpFormStep3
          key="2"
          setFormState={setState}
          formState={state}
          setValidationStatus={setIsValid}
          isFormValid={isValid}/>,
      ]} />
    </Form>
  );
}
