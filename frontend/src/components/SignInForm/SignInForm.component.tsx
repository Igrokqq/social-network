import React, { useState } from 'react';
import { Form, FormInstance, Alert } from 'antd';
import { SignInFormState } from './SignInForm.types';
import * as Api from '../../api';
import EmailInput from '../../shared/components/EmailInput.component';
import PasswordInput from '../../shared/components/PasswordInput.component';
import ButtonSubmit from '../../shared/components/ButtonSubmit.component';
import { SignInResponse } from '../../api/Auth.api';
import { HomePages } from '../../routes/home.routes';
import { AUTH_ACTIONS } from '../../redux/auth.reducer';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

export default function SignInForm({ dispatch }: any): JSX.Element {
  const [form] = Form.useForm<FormInstance>();
  const [isDisabled, setDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const _isValid = function (inputStates: any, fieldsAmount: number): boolean {
    const inputsValid: boolean = inputStates.every((inputState: any): boolean => !inputState.errors.length);
    const inputsEmpty: boolean = inputStates.length < fieldsAmount;

    return !inputsEmpty && inputsValid;
  };
  const _onInputsChange = function (changedFields: any, allFields: any): void {
    const inputsStates = Object.values(form.getFieldsValue(true)).filter(Boolean);

    if (inputsStates.length) {
      setDisabled(!_isValid(inputsStates, Object.keys(allFields).length));
    }
  };

  const _onFinish = async (payload: SignInFormState): Promise<void> => {
    setDisabled(true);

    try {
      const json: SignInResponse = await Api.Auth.signIn(payload);

      dispatch({
        type: AUTH_ACTIONS.LOGIN,
        payload: {
          user: await Api.Auth.getUserFromJwtAccessToken(json.accessToken),
          accessToken: json.accessToken || '',
          refreshToken: json.refreshToken || '',
        }
      });

      window.location.href = HomePages.INDEX;
    } catch (error) {
      console.error(error);

      let description = '';

      if (error.json) {
        description = (await error.json()).message || '';
      }

      setDisabled(false);
      setErrorMessage(description);
    }
  };

  return (
    <Form
      onValuesChange={_onInputsChange}
      className="form"
      {...layout}
      name="basic"
      onFinish={_onFinish}
      onFinishFailed={console.error}
    >
      <Alert type="error" message={errorMessage} banner style={errorMessage.length ? {} : { display: 'none' }} />

      <EmailInput form={form}/>
      <PasswordInput form={form}/>
      <ButtonSubmit text={'Sign in'} isDisabled={isDisabled} />
    </Form>
  );
}
