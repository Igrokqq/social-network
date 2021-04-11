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
  labelText: 'Phone',
  placeholderText: '+380951187039',
  inputClassName: 'mb-2 w-100',
  inputId: 'phone',
  value: '',
  onInput: (): void => { },
  setValidationStatus: (): void => {},
};

export default function PhoneInput({
  labelText,
  placeholderText,
  inputClassName,
  inputId,
  value,
  onInput,
  setValidationStatus
}: Props): JSX.Element {
  const [validationError, setValidationError] = useState<ValidationError | null>(null);

  const _validate = async (phone: string): Promise<void> => {
    await YupString()
      .min(10)
      .max(13)
      .required()
      .matches(/^\+?[0-9]+$/, 'Must be only digits')
      .validate(phone);
  };

  const _onInput = async (event: FormEvent<HTMLInputElement>): Promise<void> => {
    const phone: string = (event.target as HTMLInputElement).value;

    try {
      await _validate(phone);
      setValidationError(null);
      setValidationStatus(true);
    } catch (error) {
      setValidationError(error as ValidationError);
      setValidationStatus(false);
    }
    onInput(phone);
  };

  return (
    <InputGroup className="d-flex flex-column mb-2" hasValidation>
      <Form.Label htmlFor={inputId || initialProps.inputId}>{labelText || initialProps.labelText}</Form.Label>
      <Form.Control
        onInput={_onInput}
        className={inputClassName || initialProps.inputClassName}
        id={inputId || initialProps.inputId}
        placeholder={placeholderText || initialProps.placeholderText}
        isInvalid={!!validationError}
        value={value || ''}
      />
      <Form.Control.Feedback type="invalid">
        {validationError && validationError.errors.join()}
      </Form.Control.Feedback>
    </InputGroup>
  );
}
