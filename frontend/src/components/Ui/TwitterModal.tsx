import React, { PropsWithChildren } from 'react';

import '../../sass/components/Ui/TwitterModal.sass';

export type Props = {
  isActive?: boolean;
  className?: string;
  header: JSX.Element,
  content: JSX.Element
}

export default function TwitterModal({
  isActive,
  className,
  header,
  content
}: PropsWithChildren<Props>): JSX.Element {
  return (
    <div className={`twitter-modal ${className || ''} ${isActive ? 'active' : ''}`}>
      <div className="twitter-modal-dialog">
        <div className="twitter-modal-dialog-header d-flex justify-content-between pl-3 pr-3 align-items-center">
          {header}
        </div>
        <div className="twitter-modal-dialog-content">
          {content}
        </div>
      </div>
    </div>
  );
}
