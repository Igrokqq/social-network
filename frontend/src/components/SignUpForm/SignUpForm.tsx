/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Alert, Form, FormInstance } from 'antd';
import FirstNameInput from './FirstNameInput';
import LastNameInput from './LastNameInput';
import EmailInput from './EmailInput';
import PhoneInput from './PhoneInput';
import GenderInput from './GenderInput';
import PasswordInput from './PasswordInput';
import LoginInput from './LoginInput';
import { SignUpFormState } from './types';
import ButtonSubmit from './ButtonSubmit';
import Api from '../../api';
import { AuthPages } from '../../routes/auth';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

export default function SignUpForm(): JSX.Element {
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

    console.log('inputsStates', inputsStates);

    if (inputsStates.length) {
      setDisabled(!_isValid(inputsStates, Object.keys(allFields).length));
    }
  };

  const _onFinish = async (payload: SignUpFormState): Promise<void> => {
    setDisabled(true);

    try {
      await Api.Auth.sendSignUpRequest(payload);

      window.location.href = AuthPages.SIGN_IN;
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

      <LoginInput form={form}/>
      <PasswordInput form={form}/>
      <FirstNameInput form={form}/>
      <LastNameInput form={form}/>
      <EmailInput form={form}/>
      <PhoneInput form={form}/>
      <GenderInput form={form} />
      <ButtonSubmit isDisabled={isDisabled} />
    </Form>
  );
}
