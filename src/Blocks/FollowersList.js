import React from 'react';

const FollowersList = (props) => {
    const createList = (props) => {
        const array = props.FollowersList.map((follower) => {
            return (
                <Follower
                    login={props.login}
                />
            )
        }
        );
    };

    return (
        <ul>{createList()}</ul>
    );
}

export default FollowersList;