import React, { useState } from 'react';
import HomeLayout from '../layouts/Home';
import { ComponentReduxProps } from '../redux/types';
import TwitterSearchInput from '../components/Ui/TwitterSearchInput';
import UserApi, { UserEntity } from '../api/User';
import AuthHelper from '../helpers/Auth';
import MessagesList from '../components/MessagesList';
import HttpRequestFilter from '../api/HttpRequestFilter';

import '../sass/pages/Messages.sass';

const MIN_SYMBOLS_TO_SEARCH = 3;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Messages(props: ComponentReduxProps): JSX.Element {
  const [users, setUsers] = useState<UserEntity[]>([]);

  const _onSearch = async function (searchText: string): Promise<void> {
    if (searchText.length < MIN_SYMBOLS_TO_SEARCH) {
      return;
    }

    const tryFn = async function (): Promise<UserEntity[]> {
      return UserApi.getAllWithPaginationBySearchText(
        AuthHelper.getJwtAccessToken() || '',
        searchText
      );
    };

    setUsers((await HttpRequestFilter.tryCatch(tryFn)) || []);
  };

  return (
    <HomeLayout>
      <div className="messages">
        <section className="messages-header">
          <h2 className="title">
            <span className="text">Messages</span>
          </h2>
        </section>
        <section className="messages-content">
          <div className="search">
            <TwitterSearchInput
              hasLabel={false}
              onInput={_onSearch}
            />
            <MessagesList items={users} />
          </div>
        </section>
      </div>
    </HomeLayout>
  );
}
