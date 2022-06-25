import {
  ADD_TODOLIST_FAILURE,
  ADD_TODOLIST_LOADING,
  ADD_TODOLIST_SUCCSESS,
  GET_TODOLIST_FAILURE,
  GET_TODOLIST_LOADING,
  GET_TODOLIST_SUCCSESS,
  REMOVE_TODOLIST_FAILURE,
  REMOVE_TODOLIST_LOADING,
  REMOVE_TODOLIST_SUCCSESS,
  TOGGLE_TODOLIST_FAILURE,
  TOGGLE_TODOLIST_LOADING,
  TOGGLE_TODOLIST_SUCCSESS,
} from "./todo.actionTypes";

const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
};

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TODOLIST_LOADING: {
      return { ...state, isLoading: true, isError: false };
    }

    case GET_TODOLIST_SUCCSESS: {
      return { ...state, todos: payload, isLoading: false, isError: false };
    }

    case GET_TODOLIST_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    case ADD_TODOLIST_LOADING: {
      return { ...state, isLoading: true, isError: false };
    }

    case ADD_TODOLIST_SUCCSESS: {
      return {
        ...state,
        todos: [...state.todos, payload],
        isLoading: false,
        isError: false,
      };
    }

    case ADD_TODOLIST_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    case TOGGLE_TODOLIST_LOADING: {
      return { ...state, isLoading: true, isError: false };
    }

    case TOGGLE_TODOLIST_SUCCSESS: {
      let newToggledTodo = state.todos.map((item) =>
        item.id === payload.id ? payload : item
      );
      return {
        ...state,
        todos: newToggledTodo,
        isLoading: false,
        isError: false,
      };
    }

    case TOGGLE_TODOLIST_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    case REMOVE_TODOLIST_LOADING: {
      return { ...state, isLoading: true, isError: false };
    }

    case REMOVE_TODOLIST_SUCCSESS: {
      let newToggledTodo = state.todos.filter((item) => item.id !== payload);
      return {
        ...state,
        todos: newToggledTodo,
        isLoading: false,
        isError: false,
      };
    }

    case REMOVE_TODOLIST_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    default: {
      return state;
    }
  }
};
