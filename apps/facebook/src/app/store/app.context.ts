import { AppState } from './app.state';
import { createContext } from "react";

export const AppContext = createContext<AppState>({
    likes: []
});
