import React from "react";

class Main extends React.Component {
    constructor() {
        super();
        console.log("in ctr");
    }

    componentDidMount() {
        console.log("in did mount");
        this.setState({});
    }

    componentDidUpdate(props, state) {
        console.log("in did update");
    }

    render() {
        console.log("in render");
        return (
            <h1>Hello world</h1>
        );
    }
}

export default Main;
