import React from "react";
import { Link } from "react-router-dom";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos?.map((item) => {
        return (
          <Link key={item.id} to={`/todo/${item.id}`}>
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};

export default TodoList;
