import React, { FormEvent, useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import PrevNextStepper, { POSITIONS as PrevNextStepperPositions } from './Ui/PrevNextStepper';
import SignUpFormStep1 from './SignUpFormStep1';
import SignUpFormStep2 from './SignUpFormStep2';
import SignUpFormStep3 from './SignUpFormStep3';

export type User = {
  login: string;
  password: string;
  firstName: string;
  lastName: string;
  gender: string;
  phone: string;
  email: string;
};

type Props = {
  onSubmit: (user: User) => void;
};

export default function SignUpForm({ onSubmit }: Props): JSX.Element {
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
    <Form onSubmit={_onSubmit}>
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
