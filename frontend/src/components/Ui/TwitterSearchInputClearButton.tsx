/* eslint-disable max-len */
import React from 'react';

import '../../sass/components/Ui/TwitterSearchInputClearButton.sass';

type Props = {
  readonly className?: string;
  readonly onClick: () => void;
}

const initialProps: Props = {
  className: 'twitter-search-input-clear-button',
  onClick: () => {}
};

export default function TwitterSearchInputClearButton({ className, onClick }: Props): JSX.Element {
  return (
    <div className={`${className || ''} ${initialProps.className}`} onClick={onClick}>
      <svg viewBox="0 0 15 15" className="icon"><g><path d="M8.914 7.5l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L7.5 6.086 1.707.293c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L6.086 7.5.293 13.293c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L7.5 8.914l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L8.914 7.5z"></path></g></svg>
    </div>
  );
}
