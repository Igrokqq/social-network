import React from 'react';
import { MessageEntity } from '../pages/MessagesDirect';
import MessagesDirectListItem from './MessagesDirectListItem';

type Props = {
  readonly items: MessageEntity[];
  readonly currentUserId: string;
}
export default function MessagesDirectList({ items, currentUserId }: Props): JSX.Element {
  return (
    <div className="d-flex flex-column my-3">
      {items.map(({
        text,
        _id,
        from
      }: MessageEntity): JSX.Element => (
        <MessagesDirectListItem
          text={text}
          key={_id}
          currentUserId={currentUserId}
          fromUserId={from}
        />))}
    </div>
  );
}
