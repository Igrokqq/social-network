import React from 'react';
import { Post } from './PostsList';

export type Props = {
  readonly item: Post;
}
export default function PostsListItem({ item }: Props): JSX.Element {
  return (
    <div>{item.body}</div>
  );
}
