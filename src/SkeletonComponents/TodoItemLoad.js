import React from "react";
import "./skeletonTodoItem.css";

function TodoItemLoad(props) {
  return (
    <li className="skeletonTodoItem">

      <div className="skeletonTodoItem-p">
        {/* Vacio para skeleton */}
      </div>
    </li>
  );
}

export { TodoItemLoad };