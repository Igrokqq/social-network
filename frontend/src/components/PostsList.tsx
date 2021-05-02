import React from 'react';
import { PostEntity } from '../api/Posts';
import PostsListItem from './PostsListItem';

type Props = {
  readonly items: PostEntity[];
}

export type Post = {
  readonly body: string;
  readonly from: string;
}
export default function PostsList({ items }: Props): JSX.Element {
  return (
    <div className="d-flex flex-column my-3">
      {(items && items.length)
        ? items.map((item: PostEntity): JSX.Element => <PostsListItem item={item} key={item._id}/>)
        : ''
      }
    </div>
  );
}
