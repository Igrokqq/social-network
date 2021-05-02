import React, { useState, Dispatch } from 'react';
import AvatarInput from '../components/Ui/AvatarInput';
import TwitterButton, { Themes as TwitterButtonThemes } from '../components/Ui/TwitterButton';
import ProfileEditModal from '../components/ProfileEditModal';
import { UserEntity } from '../api/User';
import { ComponentReduxProps } from '../redux/types';
import { AUTH_ACTIONS } from '../redux/Auth';

type Props = {
  readonly user: UserEntity;
  readonly setUser: Dispatch<UserEntity>
}

export default function ProfileContent({
  user,
  dispatch,
  setUser
}: Pick<ComponentReduxProps, 'dispatch'> & Props): JSX.Element {
  const [isEditModalActive, setEditModalActive] = useState<boolean>(false);

  const _onEdit = (newUser: UserEntity): void => {
    dispatch({
      type: AUTH_ACTIONS.UPDATE_USER,
      payload: newUser
    });

    setUser({ ...user, ...newUser });
  };

  return (
    <div className="d-flex flex-column profile-content">
      <ProfileEditModal
        isActive={isEditModalActive}
        onClose={() => setEditModalActive(false)}
        user={user}
        onEdit={_onEdit}
      />
      <div className="d-flex justify-content-between profile-content-top">
        <AvatarInput />
        <TwitterButton
          className="mt-3 mr-3 edit-button"
          type="button"
          theme={TwitterButtonThemes.LIGHT}
          text="Edit Profile"
          onClick={() => setEditModalActive(true)}
        />
      </div>

      <div>
        <strong className="firstName">{user.firstName}</strong>
      </div>
      <div>
        <span className="login">@{user.login}</span>
      </div>
    </div>
  );
}
