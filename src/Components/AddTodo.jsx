import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addTodoListFailure,
  addTodoListLoading,
  addTodoListSuccess,
} from "../Store/Todos/todo.action";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const addTodo = (payload) => {
    dispatch(addTodoListLoading());
    axios
      .post("http://localhost:8080/todos", payload)
      .then((res) => {
        dispatch(addTodoListSuccess(res.data));
      })
      .catch(() => {
        dispatch(addTodoListFailure());
      });
  };

  const handleAddTodo = () => {
    if (todo) {
      const payload = { title: todo, status: false };
      addTodo(payload);
      setTodo("");
    }
  };
  return (
    <div>
      <h3>AddTodo</h3>
      <input
        placeholder="add todos..."
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default AddTodo;
