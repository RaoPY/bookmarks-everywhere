import React from "react";
import "./MyAccount.css";

function MyAccount({ currentUser }) {
    document.title = "Bookmarks Everywhere | My Account";
    document.body.style.background = "#000000";

    function deleteAccountBtn() {
        const usernameConfirm = prompt(`Type your username "${currentUser}" to confirm: `);
        if (usernameConfirm === currentUser) {
            fetch(`http://localhost:5000/user/delete/${currentUser}`, { method: "DELETE" });
            alert("Account deleted.");
            // setCurrentUser("");
            // setCurrentUserBookmarks([]);
            // setRoute("login");
            window.location.reload();
        }
    }

    function changeUsernameBtn() {
        const newUsername = document.getElementById("newUsername").value.toLowerCase();
        if (newUsername === "") {
            alert("Enter new username...");
        } else {
            fetch("http://localhost:5000/usernames")
                .then(res => res.json())
                .then(usernames => {
                    if (usernames.includes(newUsername)) {
                        alert("Username already in use. Try another one...");
                    } else {
                        const confirmChange = prompt('Type "y" to confirm: ');
                        if (confirmChange === "y" || confirmChange === "Y") {
                            fetch(`http://localhost:5000/user/update/username/${currentUser}`, {
                                method: "PUT",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({ username: newUsername })
                            });

                            alert("Username changed. Proceed to login with your new username.");
                            window.location.reload();
                        }
                    }
                })
                .catch(error => console.log(error));
        }
    }
    
    function changePasswordBtn() {
        const newPassword = document.getElementById("newPassword").value;
        if (newPassword === "") {
            alert("Enter new password...");
        } else {
            const confirmChange = prompt('Type "y" to confirm: ');
            if (confirmChange === "y" || confirmChange === "Y") {
                fetch(`http://localhost:5000/user/update/password/${currentUser}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ password: newPassword })
                });
    
                alert("Password changed. Proceed to login with your new password.");
                window.location.reload();
            }
        }
    }

    const usernameFirstChar = currentUser[0];

    return (
        <div id="myAccountContainer">
            <div id="profilePicture">{usernameFirstChar.toUpperCase()}</div>
            <h1>{currentUser}</h1>
            <hr className="line" />
            <h2>Account Settings</h2>
            <input type="text" placeholder="New username" id="newUsername" />
            <button onClick={changeUsernameBtn} className="changeBtn">Change username</button> <br />
            <input type="text" placeholder="New password" id="newPassword" />
            <button onClick={changePasswordBtn} className="changeBtn">Change password</button> <br />
            <button onClick={deleteAccountBtn} id="deleteAccountBtn">Delete account</button>
        </div>
    );
}

export default MyAccount;