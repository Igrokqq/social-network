import React, { useState } from 'react';
import TwitterModal, { Props as TwitterModalProps } from './Ui/TwitterModal';
import ProfileThemeBlock from './ProfileThemeBlock';
import { UserEntity } from '../api/User';
import AvatarInput from './Ui/AvatarInput';
import ProfileEditForm from './ProfileEditForm';
import TwitterTimesIcon from './Ui/TwitterTimesIcon';
import TwitterButton from './Ui/TwitterButton';
import UserHelper from '../helpers/User';
import AuthHelper from '../helpers/Auth';
import HttpRequestFilter from '../api/HttpRequestFilter';

import '../sass/components/ProfileEditModal.sass';

type Props = Omit<TwitterModalProps, 'header' | 'content'> & {
  readonly onClose: () => void;
  readonly user: UserEntity;
};

export default function ProfileEditModal({ onClose, isActive, user }: Props): JSX.Element {
  const [editFormReference, setEditFormReference] = useState<HTMLFormElement | null>(null);
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState<boolean>(false);

  const _onProfileEditSubmit = async function (user: UserEntity): Promise<void> {
    const tryFn = async (): Promise<void> => {
      await UserHelper.updateOne(AuthHelper.getJwtAccessToken() || '', user);
      onClose();
    };

    await HttpRequestFilter.tryCatch(tryFn);
  };
  const _triggerEditFormSubmit = (form: HTMLFormElement): void => {
    form.requestSubmit();
  };

  return (
    <TwitterModal
      className="profile-edit-modal"
      header={
        (
          <>
            <div className="d-flex justify-content-between align-items-center">
              <div onClick={onClose}><TwitterTimesIcon className="closeButton"/></div>
              <div className="title ml-4">
                <span className="text">Edit profile</span>
              </div>
            </div>

            <TwitterButton
              text="Save"
              type="button"
              className="saveButton"
              onClick={() => _triggerEditFormSubmit(editFormReference as HTMLFormElement)}
              isDisabled={isSaveButtonDisabled}
            />
          </>
        )
      }
      content={
        (
          <>
            <ProfileThemeBlock isEditable={true} />
            <AvatarInput className="avatar" isEditable={true}/>
            <ProfileEditForm
              ref={setEditFormReference}
              onStateChange={(initialState: UserEntity, newState: UserEntity, allInputsValid: boolean) => {
                setIsSaveButtonDisabled(JSON.stringify(initialState) === JSON.stringify(newState) || !allInputsValid);
              }}
              className="mr-3 ml-3 mb-3"
              onSubmit={_onProfileEditSubmit}
              user={user}
            />
          </>
        )
      }
      isActive={isActive}
    />
  );
}
