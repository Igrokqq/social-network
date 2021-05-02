import React, { FormEvent } from 'react';
import { Form } from 'react-bootstrap';

type Props = {
  readonly onInput: (text: string) => void;
  readonly inputId?: string;
  readonly value: string;
}

const initialProps: Props = {
  onInput: (): void => {},
  inputId: 'textfield',
  value: ''
};

export default function TextareaInput({
  value,
  inputId,
  onInput
}: Props): JSX.Element {
  const _onInput = function (event: FormEvent<HTMLTextAreaElement>): void {
    onInput((event.target as HTMLTextAreaElement).value);
  };

  return (
    <Form.Group controlId={inputId || initialProps.inputId}>
      <Form.Control as="textarea" rows={3} value={value} onInput={_onInput} />
    </Form.Group>
  );
}
