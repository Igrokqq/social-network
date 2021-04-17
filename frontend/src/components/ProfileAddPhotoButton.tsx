import React, { MouseEvent } from 'react';
import AddPhotoIcon from './Ui/AddPhotoIcon';

import '../sass/components/ProfileAddPhotoButton.sass';

type Props = {
  onClick: (event: MouseEvent<unknown>) => void;
  isDisabled?: boolean;
}

export default function ProfileAddPhotoButton({ onClick, isDisabled }: Props): JSX.Element {
  return (
    <div
      onClick={onClick}
      className={`${isDisabled ? 'disabled' : ''} add-photo d-flex align-items-center justify-content-center`}
    >
      <AddPhotoIcon />
    </div>
  );
}
