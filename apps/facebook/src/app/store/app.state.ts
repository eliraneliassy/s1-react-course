import { Post } from './../post.interface';
export interface AppState {
    likes: Post[];
    addLike: (post: Post) => void;
    isAuth: boolean;
    setIsAuth: (isAuth: boolean) => void;
 }