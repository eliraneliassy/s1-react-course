// eslint-disable-next-line @typescript-eslint/no-unused-vars

import React, {
  useEffect,
  useState,
  useCallback,
  useContext,
  Suspense,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './app.module.scss';
import { DB } from './db';

import Greeting from './greeting/greeting';
import Header from './header/header';
import MyLikes from './my-likes/my-likes';
import { Post } from './post.interface';
import PostCmp from './post/post';
import { AppContext } from './store/app.context';
import { AppState } from './store/app.state';
import { AuthGuard } from '@s1/guards';
import Login from './login/login';
import { createContext } from 'vm';
import Register from './register/register';

export function App() {
  //const posts: Post[] = DB;
  // const likes: Post[] = [];

  const Feed = React.lazy(() => import('./feed/feed'));

  const addLike = (post: Post) => {
    setAppState((currentState: AppState) => ({
      ...currentState,
      likes: [...currentState.likes, post],
    }));
  };

  const setIsAuth = (isAuth: boolean) => {
    console.log('setISAuth', isAuth);
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

      {/* <Greeting /> */}

      <Routes>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>

        <Route element={<AuthGuard isAuth={true} />}>
          <Route
            path=""
            element={
              <Suspense fallback={<div>loading...</div>}>
                <Feed></Feed>
              </Suspense>
            }
          ></Route>
          <Route path="my-likes" element={<MyLikes></MyLikes>}></Route>
        </Route>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
