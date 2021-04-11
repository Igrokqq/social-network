import React from 'react';
import { Alert } from 'react-bootstrap';

type Props = {
  show: boolean;
  content: string;
  onClose: () => void;
  title?: string;
  className?: string;
}

const initialProps: Props = {
  className: 'h-auto',
  title: 'Oh snap! You got an error!',
  onClose: () => {},
  show: false,
  content: ''
};

export default function AlertDismissible({
  show,
  content,
  onClose,
  title,
  className
}: Props): JSX.Element {
  return (
    <Alert
      className={show ? `${className || initialProps.className}` : `${className || initialProps.className} d-none`}
      variant="danger"
      onClose={onClose}
      dismissible
    >
      <Alert.Heading>{title || initialProps.title}</Alert.Heading>
      <p>
        {content}
      </p>
    </Alert>
  );
}
