import React, { useState, useEffect } from 'react';
import { UserEntity } from '../api/User';
import { PostEntity } from '../api/Posts';
import HomeLayout from '../layouts/Home';
import AuthHelper from '../helpers/Auth';
import PostHelper from '../helpers/Post';
import PostsList from '../components/PostsList';
import TwitterButton from '../components/Ui/TwitterButton';
import TextareaInput from '../components/Ui/TextareaInput';
import HttpRequestFilter from '../api/HttpRequestFilter';

const MIN_SYMBOLS_FOR_TWEET = 10;
const accessToken: string = AuthHelper.getJwtAccessToken() || '';

export default function HomePage(): JSX.Element {
  const [postBody, setPostBody] = useState<string>('');
  const [user] = useState<UserEntity | null>(AuthHelper.getUser() || null);
  const [posts, setPosts] = useState<PostEntity[]>([]);

  useEffect((): void => {
    if (!user) {
      return;
    }
    PostHelper.getAllByUserId(accessToken, user._id)
      .then((posts: PostEntity[]): void => {
        setPosts(posts);
      })
      .catch(console.error);
  }, []);

  const _onTweet = async (postBody: string, userId: string): Promise<void> => {
    const tryFn = (): Promise<PostEntity> => PostHelper.createOne(accessToken, {
      body: postBody,
      from: userId
    });

    setPostBody('');
    const post: PostEntity = await HttpRequestFilter.tryCatch(tryFn);

    setPosts([...posts, post]);
  };

  return (
    <HomeLayout>
      <div className="py-5">
        <div className="px-2">
          <TextareaInput onInput={setPostBody} value={postBody} />
          <TwitterButton
            text="Tweet"
            onClick={() => user && _onTweet(postBody, user._id)}
            isDisabled={postBody.length <= MIN_SYMBOLS_FOR_TWEET}
          />
        </div>
        <hr></hr>
        <PostsList items={posts} />
      </div>
    </HomeLayout>
  );
}
