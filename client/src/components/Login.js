import React from "react";
import "./Login.css";

function Login({ setCurrentUser, setRoute }) {
    document.title = "Bookmarks Everywhere | Log in";

    function loginBtn() {
        const usernameLogin = document.getElementById("usernameInputLogin").value.toLowerCase();
        const passwordLogin = document.getElementById("passwordInputLogin").value;

        if (usernameLogin === "" || passwordLogin === "") {
            alert("Enter username/password...");
        } else {
            fetch("http://localhost:5000/login", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ usernameLogin, passwordLogin })
            })
                .then(res => res.json())
                .then(isAuthenticated => {
                    if (isAuthenticated === null) {
                        alert("No account found with this username...");
                    }
                    else if (isAuthenticated === true) {
                        setCurrentUser(usernameLogin);
                        setRoute("myBookmarks");
                    }
                    else {
                        alert("Incorrect password.");
                    }
                })
                .catch(error => console.log(error));
        }
    }

    return (
        <div id="loginContainer">
            <h1>Log in</h1>
            <input type="text" placeholder="Username" id="usernameInputLogin" />
            <input type="password" placeholder="Password" id="passwordInputLogin" />
            <button onClick={loginBtn}>Log in</button>
            <p onClick={() => setRoute("signup")}>Go to sign up</p>
        </div>
    );
}

export default Login;