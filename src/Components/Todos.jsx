import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTodoListFailure,
  getTodoListLoading,
  getTodoListSuccess,
} from "../Store/Todos/todo.action";
import axios from "axios";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Todos = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state);
  console.log("todos:", todos);

  const getTodos = () => {
    dispatch(getTodoListLoading());
    axios
      .get("http://localhost:8080/todos")
      .then((res) => {
        dispatch(getTodoListSuccess(res.data));
      })
      .catch(() => {
        dispatch(getTodoListFailure());
      });
  };

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      <AddTodo></AddTodo>
      <TodoList todos={todos}></TodoList>
    </div>
  );
};

export default Todos;
