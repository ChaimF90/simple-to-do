import React from "react";
import axios from "axios";

class Main extends React.Component {
    
    state = {
        username: "",
        followers: [],
        //login , avater-url
    }

    // componentDidMount() {
    //     axios.get("https://api.github.com/users/chaimf90").then(res => {
    //         axios.get(res.data.followers_url).then(res => console.log(res.data));
    //     });
    // }
    
    changeHandler = (e) => {
        this.setState({username: e.target.value});
    }

    submitHandler = (e) => {
        e.preventDefault();
        axios.get(`https://api.github.com/users/${this.state.username}`).then(res => {
            axios.get(res.data.followers_url).then(res => {
                
            });
        });
    }

    render() {
        return (
          <form onSubmit={this.submitHandler}>
            <input type="text" value={this.state.username} onChange={this.changeHandler}/>
            <button>Click</button>
          </form>  
        );
    }
}

export default Main;
