import { EditProfileFormPayload } from '../components/EditProfileForm/EditProfileForm.types';
import { Profile as ProfileApi } from '../api';

export default {
  edit(userId: string, payload: EditProfileFormPayload): Promise<any | never> {
    return ProfileApi.edit(userId, payload);
  }
};
