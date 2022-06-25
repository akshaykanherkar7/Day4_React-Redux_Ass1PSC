import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  removeTodoListFailure,
  removeTodoListLoading,
  removeTodoListSuccess,
  toggleTodoListFailure,
  toggleTodoListLoading,
  toggleTodoListSuccess,
} from "../Store/Todos/todo.action";

const SingleTodo = () => {
  const { todos } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [currentTodo, setCurrentTodo] = useState({});
  const navigate = useNavigate();

  const toggleStatus = (id, newStatus) => {
    dispatch(toggleTodoListLoading());
    axios
      .patch(`http://localhost:8080/todos/${id}`, { status: newStatus })
      .then((res) => {
        dispatch(toggleTodoListSuccess(res.data));
      })
      .catch(() => {
        dispatch(toggleTodoListFailure());
      });
  };

  const removeTodo = (id) => {
    dispatch(removeTodoListLoading());
    axios
      .delete(`http://localhost:8080/todos/${id}`)
      .then((res) => {
        dispatch(removeTodoListSuccess(id));
        navigate("/");
      })
      .catch(() => {
        dispatch(removeTodoListFailure());
      });
  };

  useEffect(() => {
    let currentTodo = todos.find((item) => item.id === Number(id));
    currentTodo && setCurrentTodo(currentTodo);
  });
  return (
    <div>
      <h3>
        {currentTodo?.title} {currentTodo?.status ? "True" : "False"}
      </h3>
      <button onClick={() => toggleStatus(currentTodo.id, !currentTodo.status)}>
        Toggle
      </button>
      <button onClick={() => removeTodo(currentTodo.id)}>Remove</button>
    </div>
  );
};

export default SingleTodo;
