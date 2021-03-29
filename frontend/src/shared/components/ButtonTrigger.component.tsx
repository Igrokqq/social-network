import { Button, ButtonProps } from 'antd';
import React from 'react';

type ButtonState = ButtonProps & {
  isDisabled?: boolean,
  text: string,
  triggerOnClick?: (...args: any) => void,
};

const initialState: ButtonState = {
  isDisabled: true,
  text: ''
};

export default function ButtonSubmit({
  isDisabled,
  triggerOnClick,
  type,
  className,
  text,
  ...props
}: ButtonState = initialState): JSX.Element {
  return (
    <Button
      {...(triggerOnClick ? { onClick: triggerOnClick } : {})}
      className={`${className || ''} button`}
      type={type || 'primary'}
      {...props}
      htmlType="button"
      disabled={isDisabled}
    >{text}</Button>
  );
}
