import React, {
  FormEvent,
  useState,
  useEffect,
  forwardRef,
  Ref
} from 'react';
import { Form } from 'react-bootstrap';
import { UserEntity } from '../api/User';
import FirstNameInput from './Ui/FirstNameInput';
import GenderSelect from './Ui/GenderSelect';
import LastNameInput from './Ui/LastNameInput';
import LoginInput from './Ui/LoginInput';
import PhoneInput from './Ui/PhoneInput';

type Props = {
  readonly onSubmit: (user: UserEntity) => void;
  readonly className?: string;
  readonly user: UserEntity;
  readonly onStateChange: (initialState: UserEntity, newState: UserEntity, allInputsValid: boolean) => void;
};

function ProfileEditForm({
  onSubmit,
  user,
  className,
  onStateChange
}: Props, ref: Ref<HTMLFormElement>): JSX.Element {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [state, setState] = useState<UserEntity>(user);

  useEffect(() => {
    setIsValid(isValid ? Object.values(state).every(Boolean) : false);
    onStateChange(user, state, isValid);
  });

  const _onSubmit = async function (event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    onSubmit(state);
  };

  return (
    <Form ref={ref} className={className || ''} onSubmit={_onSubmit}>
      <FirstNameInput
        value={state.firstName}
        onInput={(firstName: string): void => setState({ ...state, firstName })}
        setValidationStatus={setIsValid}
      />
      <LastNameInput
        value={state.lastName}
        onInput={(lastName: string): void => setState({ ...state, lastName })}
        setValidationStatus={setIsValid}
      />
      <LoginInput
        value={state.login}
        onInput={(login: string): void => setState({ ...state, login })}
        setValidationStatus={setIsValid}
      />
      <PhoneInput
        value={state.phone}
        onInput={(phone: string): void => setState({ ...state, phone })}
        setValidationStatus={setIsValid}
      />
      <GenderSelect
        value={state.gender}
        onChange={(gender: string): void => setState({ ...state, gender })}
      />
    </Form>
  );
}

export default forwardRef(ProfileEditForm);
