// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './app.module.scss';
import { DB } from './db';
import Feed from './feed/feed';
import Greeting from './greeting/greeting';
import Header from './header/header';
import MyLikes from './my-likes/my-likes';
import { Post } from './post.interface';
import PostCmp from './post/post';

export function App() {
  //const posts: Post[] = DB;
  // const likes: Post[] = [];

  const [posts, setPosts] = useState<Post[]>([]);
  const [likes, setLikes] = useState<Post[]>([]);

  const likeHandler = (post: Post) => {
    setLikes((currentLikes: Post[]) => [...currentLikes, post]);
    console.log('like handler in app cmp', likes);
  };

  const isLiked = (post: Post): boolean => {
    const index = likes.findIndex((p) => p.id === post.id);

    return index > -1;
  };

  const getPosts = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    setPosts(await res.json());
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>

      <Header />
      <h1>Welcome to Facebook</h1>

      <Greeting />

      <Routes>
        <Route path="" element={<Feed></Feed>}></Route>
        <Route path="likes" element={<MyLikes></MyLikes>}></Route>
      </Routes>

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
