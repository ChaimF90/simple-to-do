import React from "react";
import axios from "axios";
import "./App.css";

class Main extends React.Component {

    state = {
        username: "",
        followers: [],
        //login , avatar_url
    }

    // componentDidMount() {
    //     axios.get("https://api.github.com/users/chaimf90").then(res => {
    //         axios.get(res.data.followers_url).then(res => console.log(res.data));
    //     });
    // }

    changeHandler = (e) => {
        this.setState({ username: e.target.value });
    }

    submitHandler = (e) => {
        e.preventDefault();
        axios.get(`https://api.github.com/users/${this.state.username}`).then(res => {
            axios.get(res.data.followers_url).then(res => {
                const followers = res.data.map(follower => {
                    return {
                        login: follower.login,
                        avatarUrl: follower.avatar_url,
                    };
                });
                this.setState({ followers });
            });
        });
    }

    render() {
        return (
            <React.Fragment>
                <form className="App" onSubmit={this.submitHandler}>
                    <input type="text" value={this.state.username} onChange={this.changeHandler} />
                    <button>Click</button>
                </form>
                <FollowersList
                    followers={this.state.followers}
                />
            </React.Fragment>
        );
    }
}

export default Main;
