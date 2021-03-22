import React, { useState } from 'react';
import { Form, Input } from 'antd';
import * as Yup from 'yup';
import { InputState } from '../../shared/types';

const VALIDATION_RULE = Yup.string().required().min(3).max(24);

export default function LoginInput({ form }: any): JSX.Element {
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
        login: {
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
        login: {
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
      label="Login"
      name="login"
      rules={[{
        required: true,
      }]}
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      hasFeedback
      {...(state.validateStatus && { validateStatus: state.validateStatus })}
      {...{ help: state.errorMessage || null }}
    >
      <Input autoComplete="off" value={state.value} onInput={_onInput} />
    </Form.Item>
  );
}
