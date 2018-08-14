import React from "react";

const Form = (props) => {
    let renderError;
    if (props.errorMessage) {
        renderError = <span>{props.errorMessage}</span>;
    }
    
    return (
        <form onSubmit={props.addToDo}>
            <input type="text" name="value" onChange={props.setValue} value={props.value} />
            <button>Add to do</button>
            {renderError}
        </form>
    );
}

export default Form;