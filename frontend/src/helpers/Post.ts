import PostApi, { PostEntity } from '../api/Posts';
import { Post } from '../components/PostsList';

export default {
  createOne(accessToken: string, post: Post): Promise<PostEntity> {
    return PostApi.create(accessToken, post);
  },
  getAllByUserId(accessToken: string, userId: string): Promise<PostEntity[]> {
    return PostApi.getAllByUserId(accessToken, userId);
  }
};
