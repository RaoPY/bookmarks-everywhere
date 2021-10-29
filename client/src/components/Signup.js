import React from "react";
import "./Signup.css";

function Signup({ setRoute }) {
    document.title = "Bookmarks Everywhere | Sign up";

    function signupBtn() {
        const usernameSignup = document.getElementById("usernameInputSignup").value.toLowerCase();
        const passwordSignup = document.getElementById("passwordInputSignup").value;

        if (usernameSignup === "" || passwordSignup === "") {
            alert("Enter username/password...");
        } else {
            fetch("http://localhost:5000/usernames")
                .then(res => res.json())
                .then(usernames => {
                    if (usernames.includes(usernameSignup)) {
                        alert("Username already in use. Try another one...");
                    } else {
                        fetch("http://localhost:5000/signup", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ username: usernameSignup, password: passwordSignup, bookmarks: [] })
                        });
                
                        alert("Account created. Now you can proceed to login.");
                        setRoute("login");
                    }
                })
                .catch(error => console.log(error));
        }
    }

    return (
        <div id="signupContainer">
            <h1>Sign up</h1>
            <input type="text" placeholder="Username" id="usernameInputSignup" />
            <input type="password" placeholder="Password" id="passwordInputSignup" />
            <button onClick={signupBtn}>Sign up</button>
            <p onClick={() => setRoute("login")}>Go to log in</p>
        </div>
    );
}

export default Signup;