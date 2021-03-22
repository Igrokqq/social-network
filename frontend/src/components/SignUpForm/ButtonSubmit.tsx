import { Button, Form } from 'antd';
import React from 'react';

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export default function ButtonSubmit({ isDisabled }: any = { isDisabled: true }): JSX.Element {
  return (
    <Form.Item {...tailLayout} wrapperCol={{ span: 24 }}>
      <Button
        className="button"
        type="primary"
        htmlType="submit"
        disabled={isDisabled}
      >Sign Up</Button>
    </Form.Item>
  );
}
