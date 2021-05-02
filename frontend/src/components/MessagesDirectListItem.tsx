import React from 'react';

type Props = {
  readonly text: string;
  readonly fromUserId: string;
  readonly currentUserId: string;
}

export default function Message({ text, fromUserId, currentUserId }: Props): JSX.Element {
  return (
    <div className="my-3 border-2 d-flex">
      <div className="mr-2">{text}</div>
      {fromUserId === currentUserId ? <div>(yourself)</div> : ''}
    </div>
  );
}
