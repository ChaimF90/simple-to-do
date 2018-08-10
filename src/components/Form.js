import React from "react";

const Form = (props) => {
    return (
        <form onSubmit={props.addToDo}>
            <input type="text" name="value" onChange={props.setValue} value={props.value} />
            <button>Add to do</button>
            <span>{props.errorMessage}</span>
        </form>
    );
}

export default Form;