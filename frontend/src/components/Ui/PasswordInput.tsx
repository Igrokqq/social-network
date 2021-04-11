import { string as YupString, ValidationError } from 'yup';
import React, { FormEvent, useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';

type Props = {
  labelText?: string;
  placeholderText?: string;
  inputClassName?: string;
  inputId?: string;
  value?: string;
  onInput: (value: string) => void;
  setValidationStatus: (flag: boolean) => void;
}

const initialProps: Props = {
  labelText: 'Password',
  placeholderText: '********',
  inputClassName: 'mb-2 w-100',
  inputId: 'password',
  value: '',
  onInput: (): void => { },
  setValidationStatus: (): void => {},
};

export default function PasswordInput({
  labelText,
  placeholderText,
  inputClassName,
  inputId,
  onInput,
  value,
  setValidationStatus
}: Props): JSX.Element {
  const [validationError, setValidationError] = useState<ValidationError | null>(null);

  const _validate = async (password: string): Promise<void> => {
    await YupString()
      .min(8)
      .max(64)
      .required()
      .validate(password);
  };

  const _onInput = async (event: FormEvent<HTMLInputElement>): Promise<void> => {
    const password: string = (event.target as HTMLInputElement).value;

    try {
      await _validate(password);
      setValidationError(null);
      setValidationStatus(true);
    } catch (error) {
      setValidationError(error as ValidationError);
      setValidationStatus(false);
    }
    onInput(password);
  };

  return (
    <InputGroup className="d-flex flex-column mb-2" hasValidation>
      <Form.Label htmlFor={inputId || initialProps.inputId}>{labelText || initialProps.labelText}</Form.Label>
      <Form.Control
        type="password"
        onInput={_onInput}
        value={value || ''}
        className={inputClassName || initialProps.inputClassName}
        id={inputId || initialProps.inputId}
        placeholder={placeholderText || initialProps.placeholderText}
        isInvalid={!!validationError}
      />
      <Form.Control.Feedback type="invalid">
        {validationError && validationError.errors.join()}
      </Form.Control.Feedback>
    </InputGroup>
  );
}
