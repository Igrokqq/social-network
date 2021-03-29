import React, { useEffect, useState } from 'react';
import { Form, message, FormInstance } from 'antd';
import FirstNameInput from '../../shared/components/FirstNameInput.component';
import LastNameInput from '../../shared/components/LastNameInput.component';
import PhoneInput from '../../shared/components/PhoneInput.component';
import LoginInput from '../../shared/components/LoginInput.component';
import ButtonSubmit from '../../shared/components/ButtonSubmit.component';
import { EditProfileFormPayload } from './EditProfileForm.types';
import ButtonTrigger from '../../shared/components/ButtonTrigger.component';
import ProfileHelper from '../../helpers/Profile.helper';
import { InputState } from '../../shared/types';
import { AUTH_ACTIONS } from '../../redux/auth.reducer';

export default function EditProfileForm({ store, dispatch }: any): JSX.Element {
  const [form] = Form.useForm();
  const [isDisabled, setDisabled] = useState(true);
  const [isEditable, setEditable] = useState(false);
  const { user } = store.getState().authReducer;

  const _getInputsStates = function (form: FormInstance): InputState[] {
    return Object.values(form.getFieldsValue(true)).filter(Boolean) as InputState[];
  };
  const _getInputsCount = function (form: FormInstance): number {
    return Object.keys(form.getFieldsValue(true)).length;
  };

  const initialInputsValues: InputState[] = _getInputsStates(form);

  const _validate = function (form: FormInstance, fieldsAmount: number): void {
    const inputsStates = _getInputsStates(form);

    if (inputsStates.length) {
      const inputsValid: boolean = inputsStates.every((inputState: any): boolean => !inputState.errors.length);
      const inputsEmpty: boolean = inputsStates.length < fieldsAmount;
      const isValid = !inputsEmpty && inputsValid;
      const isEqualToInitialInputsValues = JSON.stringify(inputsStates).replace(/\s/gi, '') === JSON.stringify(initialInputsValues);

      setDisabled(!isValid || isEqualToInitialInputsValues);
    }
  };

  useEffect(() => {
    _validate(form, _getInputsCount(form));
  }, []);

  const _applyEditableMode = function () {
    setEditable(true);
    message.info('You can edit your profile for now!');
  };

  const _onInputsChange = function (): void {
    _validate(form, _getInputsCount(form));
  };

  const _onFinish = async function (payload: EditProfileFormPayload) {
    try {
      await ProfileHelper.edit(store.getState().authReducer.user._id, payload);

      dispatch({
        type: AUTH_ACTIONS.UPDATE_USER,
        payload: Object.fromEntries(
          Object.entries(form.getFieldsValue(true)).map(([key, { value }]: [string, any]): [string, string | number] => [key, value])
        )
      });
      setEditable(true);
      setDisabled(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form
      onValuesChange={_onInputsChange}
      onFieldsChange={_onInputsChange}
      onFinish={_onFinish}
    >
      <FirstNameInput form={form} isReadonly={!isEditable} value={user.firstName || ''}/>
      <LastNameInput form={form} isReadonly={!isEditable} value={user.lastName || ''}/>
      <LoginInput form={form} isReadonly={!isEditable} value={user.login || ''}/>
      <PhoneInput form={form} isReadonly={!isEditable} value={user.phone || ''} />
      {isEditable
        ? <ButtonSubmit isDisabled={isDisabled} text='Save' />
        : <ButtonTrigger text="Edit" triggerOnClick={_applyEditableMode} />
      }
    </Form>
  );
}
