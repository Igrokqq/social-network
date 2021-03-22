import React, { useState } from 'react';
import { Form, Input } from 'antd';
import * as Yup from 'yup';
import { InputState } from '../../shared/types';

const VALIDATION_RULE = Yup.string().required().min(8).max(64);

export default function PasswordInput({ form }: any): JSX.Element {
  const [state, setState] = useState<InputState>({
    validateStatus: '',
    errorMessage: null,
    value: ''
  });

  const _updateState = async function (value: string): Promise<void> {
    try {
      await VALIDATION_RULE.validate(value);

      form.setFieldsValue({
        password: {
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
        password: {
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

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const _onBlur = async ({ target: { value } }: React.FocusEvent<HTMLInputElement>): Promise<void> => {
    await _updateState(value);
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const _onInput = async ({ target: { value } }: React.FormEvent<HTMLInputElement>): Promise<void> => {
    await _updateState(value);
  };

  return (
    <Form.Item
      label="Password"
      name="password"
      rules={[{
        required: true,
      }]}
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      hasFeedback
      {...(state.validateStatus && { validateStatus: state.validateStatus })}
      {...{ help: state.errorMessage || null }}
    >
      <Input.Password
        autoComplete="off"
        value={state.value}
        onInput={_onInput}
        onBlur={_onBlur}
      />
    </Form.Item>
  );
}
