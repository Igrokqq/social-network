import React from 'react';
import { UserEntity } from '../api/User';
import MessagesListItem from './MessagesListItem';

type Props = {
  readonly items: UserEntity[]
}

export default function MessagesList({ items }: Props): JSX.Element {
  return (
    <div>
      {items.map((item: UserEntity): JSX.Element => <MessagesListItem item={item} key={item._id} />)}
    </div>
  );
}
