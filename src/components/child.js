import React from "react";

const Child = (props) => {
    return (
        <div>
            <form onSubmit={props.handleLogin}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Child;