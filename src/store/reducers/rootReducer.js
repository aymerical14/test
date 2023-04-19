import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import todosReducer from "./todos/todos.reducer";
import userReducer from "./user/user.reducer";

export const persistConfig = {
    key: "root",
    storage,
    whitelist: [
        "todo",
        "user"
    ]
};

const topReducer = combineReducers({
    todo: todosReducer,
    user: userReducer,
});

const rootReducer = (state, action) => {
    return topReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);