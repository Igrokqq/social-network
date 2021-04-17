import React, { PropsWithChildren } from 'react';
import { useHistory } from 'react-router-dom';
import { History } from 'history';

type Props = {
  readonly className?: string;
}

export default function GoBackButton({
  className,
  children: componentChildren
}: PropsWithChildren<Props>): JSX.Element {
  const { goBack }: History = useHistory();

  return (
    <div onClick={goBack} className={className}>
      {componentChildren}
    </div>
  );
}
