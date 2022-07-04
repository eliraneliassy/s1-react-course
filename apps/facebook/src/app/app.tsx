// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import styles from './app.module.scss';
import { DB } from './db';
import { Post } from './post.interface';
import PostCmp from './post/post';

export function App() {
  const posts: Post[] = DB;
  return (
    <>
      <h1>Welcome to Facebook1</h1>

      {posts.map((post: Post) => (
        <PostCmp post={post} key={post.id} />
      ))}
    </>
  );
}

export default App;
