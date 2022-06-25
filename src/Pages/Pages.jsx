import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import SingleTodo from "./SingleTodo";

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/todo/:id" element={<SingleTodo />}></Route>
      </Routes>
    </div>
  );
};

export default Pages;
