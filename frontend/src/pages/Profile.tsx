import React, { useState } from 'react';
import { UserEntity } from '../api/User';
import { ComponentReduxProps } from '../redux/types';
import HomeLayout from '../layouts/Home';
import ProfileThemeBlock from '../components/ProfileThemeBlock';
import ProfileNavigationBar from '../components/ProfileNavigationBar';
import ProfileContent from '../components/ProfileContent';

import '../sass/pages/Profile.sass';

export default function Profile({ store }: ComponentReduxProps): JSX.Element {
  const [user] = useState<UserEntity>(store.getState().authReducer.user);

  return (
    <HomeLayout>
      <div className="profile">
        <ProfileNavigationBar />
        <ProfileThemeBlock />
        <ProfileContent user={user} />
      </div>
    </HomeLayout>
  );
}
