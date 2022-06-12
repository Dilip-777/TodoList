import React,{ useEffect, useRef, useState } from "react";
import { Todo } from "../models";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

type Props = {
  index:number
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};


const SingleTodo = ({index, todo, todos, setTodos }: Props) => {
  const [edit, setedit] = useState<boolean>(false)
  const [ editTodo, seteditTodo ] = useState<string>(todo.todo)
 // console.log(activeTodos);
  
    
    const handleDone = (id:number)=> {
        setTodos(todos.map((todo) => id === todo.id ? {...todo, isDone:!todo.isDone} : todo ))
    }
    const handleDelete = (id:number)=> {
        setTodos(todos.filter((todo) => todo.id !== id ))
    }

    const handleEdit = (e:React.FormEvent, id:number) => {
      e.preventDefault();
      setTodos(
        todos.map((todo)=> id === todo.id ? {...todo, todo: editTodo}: todo)
      )
      setedit(!edit)
    }

    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(()=>{
      inputRef.current?.focus();
    },[edit])

  return (
            <form 
            className="todos__single" 
            onSubmit={(e)=> handleEdit(e,todo.id)}
            >
        {
          !edit ? (
               <span className="todos__single--text">{todo.todo}</span>
            ) : (
            <input 
            ref={inputRef}
            value={editTodo} onChange={(e)=> seteditTodo(e.target.value)} className="todos__single--text"/>
          )
          
        }
        <div className="div">
          <span className="icon" onClick={()=>{
            if(!edit && !todo.isDone ) {
              setedit(!edit)
            }
           }}>
            <AiFillEdit />
          </span>
          <span className="icon" onClick={()=> handleDelete(todo.id)}>
            <AiFillDelete />
          </span>
          <span className="icon" onClick={()=>{handleDone(todo.id)}}>
            <MdDone />
          </span>
        </div>
      </form>    
  );
};

export default SingleTodo;
