import React from "react";

const ToDoItem = (props) => {
    const style = {};
    if (props.todo.completed === false) {
        style.backgroundColor = "red";
    } else {
        style.backgroundColor = "purple";
    }
    return (
        <li key={props.todo.value}
            style={style}>{props.todo.value}
            <button
                onClick={() => props.markCompleted(props.todo.value)}>Done
            </button>
        </li>
    );
}

export default ToDoItem;