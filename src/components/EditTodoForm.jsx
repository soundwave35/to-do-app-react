import React from "react";

export const EditTodoForm = ({task, handleInput}) => {
    const onInput = event => {
        handleInput(task.id, event.target.value)
    }

    return (
        <div>
            <input
                value={task.subject}
                onInput={onInput}
            />
        </div>
    )
}