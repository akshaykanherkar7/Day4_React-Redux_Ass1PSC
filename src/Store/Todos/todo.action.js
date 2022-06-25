import * as types from "./todo.actionTypes";

export const getTodoListLoading = () => {
  return { type: types.GET_TODOLIST_LOADING };
};

export const getTodoListSuccess = (payload) => {
  return { type: types.GET_TODOLIST_SUCCSESS, payload };
};

export const getTodoListFailure = () => {
  return { type: types.GET_TODOLIST_FAILURE };
};

export const addTodoListLoading = () => {
  return { type: types.ADD_TODOLIST_LOADING };
};

export const addTodoListSuccess = (payload) => {
  return { type: types.ADD_TODOLIST_SUCCSESS, payload };
};

export const addTodoListFailure = () => {
  return { type: types.ADD_TODOLIST_FAILURE };
};

export const toggleTodoListLoading = () => {
  return { type: types.TOGGLE_TODOLIST_LOADING };
};

export const toggleTodoListSuccess = (payload) => {
  return { type: types.TOGGLE_TODOLIST_SUCCSESS, payload };
};

export const toggleTodoListFailure = () => {
  return { type: types.TOGGLE_TODOLIST_FAILURE };
};

export const removeTodoListLoading = () => {
  return { type: types.REMOVE_TODOLIST_LOADING };
};

export const removeTodoListSuccess = (payload) => {
  return { type: types.REMOVE_TODOLIST_SUCCSESS, payload };
};

export const removeTodoListFailure = () => {
  return { type: types.REMOVE_TODOLIST_FAILURE };
};
