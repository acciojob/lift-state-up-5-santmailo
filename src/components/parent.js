import React from "react";
import Child from "./child";

const Parent = () => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
    }
    return (
        <div>
            {
                isLoggedIn ? <p>You are logged in!</p> : <Child handleLogin={handleLogin}/>
            }
        </div>
    )
}

export default Parent;