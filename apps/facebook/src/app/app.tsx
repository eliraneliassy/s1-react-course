// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';
import styles from './app.module.scss';
import { DB } from './db';
import Greeting from './greeting/greeting';
import { Post } from './post.interface';
import PostCmp from './post/post';

export function App() {
  //const posts: Post[] = DB;
  // const likes: Post[] = [];

  const [posts, setPosts] = useState<Post[]>(DB);
  const [likes, setLikes] = useState<Post[]>([]);

  const likeHandler = (post: Post) => {
    setLikes((currentLikes: Post[]) => [...currentLikes, post]);
    console.log('like handler in app cmp', likes);
  };

  const isLiked = (post: Post): boolean => {
    const index = likes.findIndex((p) => p.id === post.id);

    return index > -1;
  };
  return (
    <>
      <h1>Welcome to Facebook</h1>

      <Greeting />

      <h2>My likes:</h2>

      {likes.map((post: Post) => (
        <PostCmp
          post={post}
          key={post.id}
          onLike={likeHandler}
          isLiked={true}
        />
      ))}

      <h2>General Posts:</h2>

      {posts.map((post: Post) => (
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

export default App;
