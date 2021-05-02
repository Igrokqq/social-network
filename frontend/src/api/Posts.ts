import { post, get } from './Request';
import ENDPOINTS from './endpoints';
import { Post } from '../components/PostsList';

export type PostEntity = {
  readonly _id: string;
  readonly from: string;
  readonly body: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
};

export default {
  create(
    accessToken: string,
    postData: Post
  ): Promise<PostEntity> {
    return post(`${ENDPOINTS.POST._NAMESPACE()}/${ENDPOINTS.POST.CREATE()}`, {
      body: JSON.stringify(postData),
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }) as Promise<PostEntity>;
  },
  getAllByUserId(accessToken: string, userId: string): Promise<PostEntity[]> {
    return get(`${ENDPOINTS.POST._NAMESPACE()}/${ENDPOINTS.POST.USER_POSTS(userId)}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }) as Promise<PostEntity[]>;
  }
};
