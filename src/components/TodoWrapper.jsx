import React, {useState} from "react";
import {TodoForm} from "./TodoForm";
import {v4 as uuidv4} from "uuid";
import {Todo} from "./Todo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (subject) => {
        setTodos([...todos, {
            id: uuidv4(),
            subject: subject,
            completed: false,
            isEditing: false
        }])

        toast("To do added")
    }

    const removeTodo = (id) => {
        setTodos(todos.filter((item) => item.id !== id))

        toast("To do removed")
    }

    const editTodo = (id) => {
        setTodos(todos.map(item => item.id === id ?
            {...item, isEditing: !item.isEditing} :
            item
        ))
    }

    const updateTodoSubject = (id, value) => {
        setTodos(todos.map(item => item.id === id ?
            {...item, subject: value} :
            item
        ))
    }

    return (
        <div>
            <div className="TodoWrapper">
                <h1>Todo List</h1>
                <TodoForm addTodo={addTodo}/>
                {todos.map((todo, index) => (
                    <Todo
                        task={todo}
                        key={index}
                        handleEdit={editTodo}
                        handleInput={updateTodoSubject}
                        handleRemove={removeTodo}
                    />
                ))}
            </div>

            <ToastContainer
                autoClose={3000}
                theme="dark"
                newestOnTop={true}
                position="top-center"
            />
        </div>
    )
}