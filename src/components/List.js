import React from "react";
import ToDoItem from "./ToDoItem";

const List = (props) => {

    const createList = () => {
        const array = props.todos.map((todo) => {
            return (
                <ToDoItem
                    todo={todo}
                    markCompleted={props.markCompleted}
                />
            )
        });
        return array;
    }

    return (
        <ul>{createList()}</ul>
    );
}

export default List;