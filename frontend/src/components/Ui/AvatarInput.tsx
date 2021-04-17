import React from 'react';

import '../../sass/components/Ui/AvatarInput.sass';
import ProfileAddPhotoButton from '../ProfileAddPhotoButton';

type Props = {
  className?: string;
  isEditable?: boolean;
}

export default function AvatarInput({ className, isEditable }: Props): JSX.Element {
  return (
    <div className={`${className || ''} avatar`}>
      <div className="img d-flex justify-content-center align-items-center">
        {isEditable
          ? <ProfileAddPhotoButton onClick={() => {}} isDisabled={true}/>
          : ''
        }
      </div>
    </div>
  );
}
