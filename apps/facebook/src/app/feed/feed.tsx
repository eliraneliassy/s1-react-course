import { useHttp } from '@s1/hooks';
import { useState, useCallback, useEffect, useContext } from 'react';
import { Post } from '../post.interface';
import PostCmp from '../post/post';
import { AppContext } from '../store/app.context';
import styles from './feed.module.css';

/* eslint-disable-next-line */
export interface FeedProps {}

export function Feed(props: FeedProps) {
  // const [posts, setPosts] = useState<Post[]>([]);

  const ctx = useContext(AppContext);

  // const getPosts = useCallback(async () => {
  //   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  //   setPosts(await res.json());
  // }, [setPosts]);

  const {data: posts, loading, error} = useHttp<Post[]>('https://jsonplaceholder.typicode.com/posts')

  const isLiked = (post: Post): boolean => {
    const index = ctx.likes.findIndex((p) => p.id === post.id);

    return index > -1;
  };

  const likeHandler = (post: Post) => {
    ctx.likes = [...ctx.likes, post]
  }

  return (
    <>
      <h2>General Posts:</h2>

      {posts?.map((post: Post) => (
        <PostCmp
          post={post}
          key={post.id}
          onLike={likeHandler}
          isLiked={isLiked(post)}
        />
      ))}
    </>
  );
}

export default Feed;
