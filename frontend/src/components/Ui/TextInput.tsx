import React, { FormEvent, KeyboardEvent } from 'react';
import { Form, InputGroup } from 'react-bootstrap';

type Props = {
  readonly labelText?: string;
  readonly placeholderText?: string;
  readonly inputClassName?: string;
  readonly value?: string;
  readonly inputId?: string;
  readonly onInput: (value: string) => void;
  readonly onEnter?: (value: string) => void;
  readonly autoComplete?: 'on' | 'off';
}

const initialProps: Props = {
  labelText: '',
  placeholderText: 'Type smth..',
  inputClassName: 'mb-2 w-100',
  inputId: 'text',
  value: '',
  onInput: (): void => { },
  onEnter: (): void => {},
  autoComplete: 'off'
};

export default function LoginInput({
  labelText,
  placeholderText,
  inputClassName,
  inputId,
  onInput,
  value,
  onEnter,
  autoComplete
}: Props): JSX.Element {
  const label: string = (labelText || initialProps.labelText) || '';

  const _onInput = async (event: FormEvent<HTMLInputElement>): Promise<void> => {
    onInput((event.target as HTMLInputElement).value);
  };

  const _isEnter = (keyCode: number): boolean => keyCode === 13;

  const _onKeyPress = function ({ charCode }: KeyboardEvent<HTMLInputElement>): void {
    if (!value) {
      return;
    }

    if (onEnter && _isEnter(charCode)) {
      onEnter(value);
    }
  };

  return (
    <InputGroup className="d-flex flex-column mb-2">
      {label
        ? <Form.Label htmlFor={inputId || initialProps.inputId}>{label}</Form.Label>
        : ''
      }
      <Form.Control
        onInput={_onInput}
        onKeyPress={_onKeyPress}
        className={inputClassName || initialProps.inputClassName}
        id={inputId || initialProps.inputId}
        placeholder={placeholderText || initialProps.placeholderText}
        value={value || ''}
        name={inputId || initialProps.inputId}
        autoComplete={autoComplete || initialProps.autoComplete}
      />
    </InputGroup>
  );
}
