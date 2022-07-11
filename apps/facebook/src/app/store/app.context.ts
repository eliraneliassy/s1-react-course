import { AppState } from './app.state';
import { createContext } from "react";
import { Post } from '../post.interface';

export const AppContext = createContext<AppState>({
    likes: [],
    addLike: (post: Post) => { return; }
});
