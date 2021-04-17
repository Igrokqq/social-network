import React from 'react';
import ProfileAddPhotoButton from './ProfileAddPhotoButton';

import '../sass/components/ProfileThemeBlock.sass';

type Props = {
  isEditable?: boolean;
}

export default function ProfileThemeBlock({ isEditable }: Props = {
  isEditable: false
}): JSX.Element {
  return (
    <div className="theme-block">
      <div className="background-img d-flex justify-content-center align-items-center">
        {isEditable
          ? <ProfileAddPhotoButton onClick={() => {}} />
          : ''
        }
      </div>
    </div>
  );
}
