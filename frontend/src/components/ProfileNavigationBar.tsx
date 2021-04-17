import React from 'react';
import ArrowLeftIcon from '../components/Ui/ArrowLeftIcon';
import GoBackButton from './Ui/GoBackButton';

import '../sass/components/ProfileNavigationBar.sass';

export default function ProfileNavigationBar(): JSX.Element {
  return (
    <div className="profile-navigation-bar">
      <GoBackButton className="mt-2 ml-3">
        <div className="arrow-left d-flex align-items-center justify-content-center">
          <ArrowLeftIcon />
        </div>
      </GoBackButton>
    </div>
  );
}
