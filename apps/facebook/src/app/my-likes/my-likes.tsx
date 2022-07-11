import { useContext, useState } from 'react';
import { Post } from '../post.interface';
import PostCmp from '../post/post';
import { AppContext } from '../store/app.context';
import styles from './my-likes.module.css';

/* eslint-disable-next-line */
export interface MyLikesProps {}

export function MyLikes(props: MyLikesProps) {

  

  const ctx = useContext(AppContext);

  return (
    <>
      <h2>My likes:</h2>

      {ctx.likes.map((post: Post) => (
        <PostCmp
          post={post}
          key={post.id}
          // onLike={likeHandler}
          isLiked={true}
        />
      ))}
    </>
  );
}

export default MyLikes;
