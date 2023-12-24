import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenToSquare} from "@fortawesome/free-regular-svg-icons";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {EditTodoForm} from "./EditTodoForm";

export const Todo = ({task, handleEdit, handleInput, handleRemove}) => {
    return (
        <div className="Todo">
            {task.isEditing ?
                <EditTodoForm
                    task={task}
                    handleInput={handleInput}
                /> :
                <p>{task.subject}</p>
            }

            <div>
                <FontAwesomeIcon onClick={() => handleEdit(task.id)} icon={faPenToSquare}/>
                <FontAwesomeIcon onClick={() => handleRemove(task.id)} icon={faTrash}/>
            </div>
        </div>
    )
}
