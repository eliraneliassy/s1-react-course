// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';
import styles from './app.module.scss';
import { DB } from './db';
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
  return (
    <>
      <h1>Welcome to Facebook</h1>

      <h2>My likes:</h2>

      {likes.map((post: Post) => (
        <PostCmp post={post} key={post.id} onLike={likeHandler} />
      ))}

      <h2>General Posts:</h2>

      {posts.map((post: Post) => (
        <PostCmp post={post} key={post.id} onLike={likeHandler} />
      ))}
    </>
  );
}

export default App;
