// eslint-disable-next-line @typescript-eslint/no-unused-vars

import React, { useEffect, useState, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './app.module.scss';
import { DB } from './db';
import Feed from './feed/feed';
import Greeting from './greeting/greeting';
import Header from './header/header';
import MyLikes from './my-likes/my-likes';
import { Post } from './post.interface';
import PostCmp from './post/post';
import { AppContext } from './store/app.context';
import { AppState } from './store/app.state';
import { AuthGuard } from '@s1/guards';
import Login from './login/login';

export function App() {
  //const posts: Post[] = DB;
  // const likes: Post[] = [];

  const addLike = (post: Post) => {
    setAppState((currentState: AppState) => ({
      ...currentState,
      likes: [...currentState.likes, post],
    }));
  };

  const setIsAuth = (isAuth: boolean) => {
    setAppState((currentState: AppState) => ({
      ...currentState,
      isAuth,
    }));
  };

  const [appState, setAppState] = useState<AppState>({
    likes: [],
    addLike,
    isAuth: false,
    setIsAuth,
  });

  console.log('render');

  return (
    <AppContext.Provider value={appState}>
      <Header />
      <h1>Welcome to Facebook</h1>

      <Greeting />

      <Routes>
        <Route path="" element={<Feed></Feed>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route element={<AuthGuard isAuth={false} />}>
          <Route path="my-likes" element={<MyLikes></MyLikes>}></Route>
        </Route>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
