import { put, get } from './Request';
import ENDPOINTS from './endpoints';
import { UpdateResponse } from '../api/types';

export type UserEntity = {
  readonly _id: string;
  readonly login: string;
  readonly password: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly gender: string;
  readonly phone: string;
  readonly email: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
};

export default {
  updateOne(
    accessToken: string,
    {
      _id: userId,
      createdAt,
      password,
      updatedAt,
      email,
      ...user
    }: UserEntity
  ): Promise<UpdateResponse> {
    return put(`${ENDPOINTS.USER._NAMESPACE()}/${ENDPOINTS.USER.UPDATE_ONE(userId)}`, {
      body: JSON.stringify(user),
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }) as Promise<UpdateResponse>;
  },
  getAllWithPaginationBySearchText(accessToken: string, searchString: string): Promise<UserEntity[]> {
    return get(
      `${ENDPOINTS.USER._NAMESPACE()}/${ENDPOINTS.USER.GET_ALL_WITH_PAGINATION_BY_SEARCH_TEXT(searchString)}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    ) as Promise<UserEntity[]>;
  }
};
