import React from 'react';
import { UserEntity } from '../api/User';
import TwitterLink from './Ui/TwitterLink';
import RoutesConstants from '../routes/constants';
import '../sass/components/MessagesListItem.sass';

type Props = {
  readonly item: UserEntity
};

export default function MessagesListItem({ item }: Props): JSX.Element {
  return (
    <div className="messages-list-item p-2">
      <div className="messages-list-item__header">
        <div className="header__fullName">{item.firstName}{item.lastName}</div>
      </div>
      <div className="messages-list-item__content d-flex align-items-center justify-content-end">
        <TwitterLink text="Let's talk" to={RoutesConstants.MESSAGES.DIRECT(item._id)}/>
      </div>
    </div>
  );
}
