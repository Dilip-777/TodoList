import React from "react";
import "./styles.css";
import { Todo } from "../models";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos__heading">Active Tasks</span>
        {todos
          .filter((todo) => todo.isDone === false)
          .map((todo, index) => (
            <SingleTodo
              index={index}
              todo={todo}
              todos={todos}
              key={todo.id}
              setTodos={setTodos}
            />
          ))}
      </div>
      <div className="todos remove">
        <span className="todos__heading">Completed Tasks</span>
        {todos
          .filter((todo) => todo.isDone === true)
          .map((todo, index) => (
            <SingleTodo
              index={index}
              todo={todo}
              todos={todos}
              key={todo.id}
              setTodos={setTodos}
            />
          ))}
      </div>
    </div>
  );
};

export default TodoList;
