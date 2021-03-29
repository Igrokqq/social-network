import React, { Fragment, useState, useEffect } from 'react';
import { Form, Select } from 'antd';
import * as Yup from 'yup';
import { InputState } from '../types';

const VALIDATION_RULE = Yup.string().required();
const OPTIONS = {
  MALE: 'male',
  FEMALE: 'female',
  DEFAULT: 'male'
};

export default function GenderInput({ form }: any): JSX.Element {
  const [, setState] = useState<InputState>({
    validateStatus: '',
    errorMessage: null,
    value: 'male'
  });

  useEffect(() => {
    form.setFieldsValue({
      gender: {
        value: OPTIONS.DEFAULT,
        errors: []
      }
    });
  });

  const _updateState = async (value: string): Promise<void> => {
    try {
      await VALIDATION_RULE.validate(value);

      form.setFieldsValue({
        gender: {
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
        gender: {
          value,
          errors
        }
      });
      setState({
        value,
        validateStatus: 'success',
        errorMessage: errors.join(),
      });
    }
  };

  const _onChange = async function (gender: any = ''): Promise<void> {
    await _updateState(gender);
  };

  return (
    <Fragment>
      <Form.Item
        name="gender"
        label="Gender"
        initialValue={OPTIONS.MALE}
        rules={[{
          required: true,
        }]}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        hasFeedback>
        <Select defaultValue={OPTIONS.DEFAULT} onChange={_onChange}>
          <Select.Option value={OPTIONS.MALE}>Male</Select.Option>
          <Select.Option value={OPTIONS.FEMALE}>Female</Select.Option>
        </Select>
      </Form.Item>
    </Fragment>
  );
}
