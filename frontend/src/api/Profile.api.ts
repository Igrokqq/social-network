import { EditProfileFormPayload } from '../components/EditProfileForm/EditProfileForm.types';
import Base from './Base.api';

export default {
  edit(userId: string, payload: EditProfileFormPayload): Promise<any | never> {
    return Base.put(`users/${userId}`, payload);
  }
};
