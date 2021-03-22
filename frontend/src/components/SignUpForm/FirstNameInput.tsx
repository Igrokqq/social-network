import React, { useState } from 'react';
import { Form, Input } from 'antd';
import * as Yup from 'yup';
import { InputState } from '../../shared/types';

const VALIDATION_RULE = Yup.string().required().min(3).max(12);

export default function FirstNameInput({ form }: any): JSX.Element {
  const [state, setState] = useState<InputState>({
    validateStatus: '',
    errorMessage: null,
    value: ''
  });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const _onInput = async ({ target: { value } }: React.FormEvent<HTMLInputElement>): Promise<void> => {
    try {
      await VALIDATION_RULE.validate(value);

      form.setFieldsValue({
        firstName: {
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
        firstName: {
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

  return (
    <Form.Item
      label="FirstName"
      name="firstName"
      rules={[{
        required: true,
      }]}
      wrapperCol={{ span: 24 }}
      labelCol={{ span: 24 }}
      hasFeedback
      {...(state.validateStatus && { validateStatus: state.validateStatus })}
      {...{ help: state.errorMessage || null }}
    >
      <Input autoComplete="off" value={state.value} onInput={_onInput} />
    </Form.Item>
  );
}
