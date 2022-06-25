import { legacy_createStore } from "redux";
import { todoReducer } from "./Todos/todo.reducer";

export const store = legacy_createStore(todoReducer);
