import UserApi, { UserEntity } from '../api/User';
import { UpdateResponse } from '../api/types';
import AuthApi from '../api/Auth';

const _setUserInLocalStorage = (user: UserEntity): void => {
  localStorage.setItem('user', JSON.stringify(user || '{}'));
};
const _removeUserInLocalStorage = (): void => {
  localStorage.removeItem('user');
};
const _updateUserInLocalStorage = (user: UserEntity): void => {
  _removeUserInLocalStorage();
  _setUserInLocalStorage(user);
};

export default {
  removeUserInLocalStorage(): void {
    _removeUserInLocalStorage();
  },

  setUserInLocalStorage(user: UserEntity): void {
    _setUserInLocalStorage(user);
  },

  async updateOne(accessToken: string, user: UserEntity): Promise<UpdateResponse> {
    const updatedResponse: UpdateResponse = await UserApi.updateOne(accessToken, user);

    _updateUserInLocalStorage(await AuthApi.getUserByAccessToken(accessToken));

    return updatedResponse;
  }
};
