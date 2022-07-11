import { useState, useCallback, useEffect } from 'react';
import { Post } from '../post.interface';
import PostCmp from '../post/post';
import styles from './feed.module.css';

/* eslint-disable-next-line */
export interface FeedProps {}

export function Feed(props: FeedProps) {
  const [posts, setPosts] = useState<Post[]>([]);

  const getPosts = useCallback(async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    setPosts(await res.json());
  }, [setPosts]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  // const isLiked = (post: Post): boolean => {
  //   const index = likes.findIndex((p) => p.id === post.id);

  //   return index > -1;
  // };

  return (
    <>
      <h2>General Posts:</h2>

      {posts.map((post: Post) => (
        <PostCmp
          post={post}
          key={post.id}
          // onLike={likeHandler}
          // isLiked={isLiked(post)}
        />
      ))}
    </>
  );
}

export default Feed;
