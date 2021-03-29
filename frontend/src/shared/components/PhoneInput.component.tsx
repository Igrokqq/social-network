import React, { useState, useEffect } from 'react';
import { Form, Input } from 'antd';
import * as Yup from 'yup';
import { InputState } from '../types';

const VALIDATION_RULE = Yup.string().required().min(10).max(13);

export default function PhoneInput({ form, isReadonly, value }: any): JSX.Element {
  const [state, setState] = useState<InputState>({
    validateStatus: '',
    errorMessage: null,
    value: value || ''
  });

  const _validate = async function (value: string): Promise<void> {
    try {
      await VALIDATION_RULE.validate(value);

      form.setFieldsValue({
        phone: {
          value,
          errors: []
        }
      });
      setState({
        value,
        validateStatus: 'success',
        errorMessage: null,
      });
    } catch ({ errors }) {
      form.setFieldsValue({
        phone: {
          value,
          errors
        }
      });
      setState({
        value,
        validateStatus: 'error',
        errorMessage: errors.join(),
      });
    }
  };

  useEffect(() => {
    _validate(value);
  }, []);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const _onInput = async ({ target: { value } }: React.FormEvent<HTMLInputElement>): Promise<void> => {
    await _validate(value);
  };

  return (
    <Form.Item
      label="Phone"
      name="phone"
      rules={[{
        required: true,
      }]}
      initialValue={state.value}
      wrapperCol={{ span: 24 }}
      labelCol={{ span: 24 }}
      hasFeedback
      {...(state.validateStatus && { validateStatus: state.validateStatus })}
      {...{ help: state.errorMessage || null }}
    >
      <Input autoComplete="off" value={state.value} onInput={_onInput} readOnly={isReadonly || false}/>
    </Form.Item>
  );
}
