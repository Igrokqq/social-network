import { Button, Form } from 'antd';
import React from 'react';

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

type ButtonSubmitState = {
  isDisabled: boolean,
  text: string
};

const initialState: ButtonSubmitState = {
  isDisabled: true,
  text: ''
};

export default function ButtonSubmit({ isDisabled, text }: ButtonSubmitState = initialState): JSX.Element {
  return (
    <Form.Item {...tailLayout} wrapperCol={{ span: 24 }}>
      <Button
        className="button"
        type="primary"
        htmlType="submit"
        disabled={isDisabled}
      >{text}</Button>
    </Form.Item>
  );
}
