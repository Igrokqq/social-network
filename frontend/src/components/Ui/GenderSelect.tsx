import React, { ChangeEvent, useEffect } from 'react';
import { Form, InputGroup } from 'react-bootstrap';

type Props = {
  labelText?: string;
  selectClassName?: string;
  selectId?: string;
  value?: string;
  onChange: (value: string) => void;
}

const initialProps: Props = {
  labelText: 'Gender',
  selectClassName: 'mb-2 w-100',
  selectId: 'gender',
  value: '',
  onChange: (): void => { },
};

const GENDERS: {[key: string]: string} = {
  MALE: 'male',
  FEMALE: 'female'
};
const defaultValue: string = GENDERS.MALE;

export default function GenderSelect({
  labelText,
  selectClassName,
  selectId,
  value,
  onChange,
}: Props): JSX.Element {
  const _onChange = async (event: ChangeEvent<HTMLSelectElement>): Promise<void> => {
    onChange((event.target as HTMLSelectElement).value);
  };

  useEffect(() => {
    onChange(value || defaultValue);
  }, []);

  return (
    <InputGroup className="d-flex flex-column mb-2" hasValidation>
      <Form.Label htmlFor={selectId || initialProps.selectId}>{labelText || initialProps.labelText}</Form.Label>
      <Form.Control
        className={selectClassName || initialProps.selectClassName}
        onChange={_onChange}
        as="select"
        id={selectId || initialProps.selectId}
        value={value || defaultValue}
      >
        <option value={GENDERS.MALE}>{GENDERS.MALE}</option>
        <option value={GENDERS.FEMALE}>{GENDERS.FEMALE}</option>
      </Form.Control>
    </InputGroup>
  );
}
