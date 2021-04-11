import React, { MouseEvent } from 'react';
import { useHistory } from 'react-router-dom';

import '../../sass/components/Ui/TwitterButton.sass';

export enum Themes {
  LIGHT = 'light',
  DEFAULT = 'blue'
}

type Props = {
  text: string;
  onClick?: (event: MouseEvent<any>) => void;
  isDisabled?: boolean;
  className?: string;
  theme?: Themes;
  type?: 'button' | 'submit' | 'reset' | undefined;
  linkTo?: string;
}

export default function TwitterButton({
  onClick,
  isDisabled,
  text,
  className,
  theme,
  linkTo,
  type
}: Props): JSX.Element {
  const { push: historyPush } = useHistory();

  return <button
    type={type || 'button'}
    {...(linkTo && { onClick: () => historyPush(linkTo) })}
    {...(onClick && { onClick })}
    className={`button ${className || ''} ${theme || Themes.DEFAULT}`}
    disabled={isDisabled || false}
  >{text}</button>;
}
