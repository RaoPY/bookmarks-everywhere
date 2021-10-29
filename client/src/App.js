import React, { useState, useEffect } from "react";

import Signup from "./components/Signup";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Bookmarks from "./components/Bookmarks";
import AddBookmark from "./components/AddBookmark";
import EditBookmark from "./components/EditBookmark";
import MyAccount from "./components/MyAccount";

import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [currentUserBookmarks, setCurrentUserBookmarks] = useState([]);
  const [urlOfEditBookmark, setUrlOfEditBookmark] = useState("");
  const [route, setRoute] = useState("login");

  useEffect(() => {
    if (currentUser !== "" && route === "myBookmarks") {
      fetch(`http://localhost:5000/bookmark/get/${currentUser}`)
        .then(res => res.json())
        .then(bookmarks => setCurrentUserBookmarks(bookmarks))
        .catch(error => console.log(error));
    }
  }, [currentUser, route]);

  if (route === "login") {
    return (
      <Login setCurrentUser={setCurrentUser} setRoute={setRoute} />
    );
  }

  else if (route === "signup") {
    return (
      <Signup setRoute={setRoute} />
    );
  }

  else if (route === "myBookmarks") {
    return (
      <>
        <Navbar setRoute={setRoute} />
        <div id="addBookmarkBtnContainer">
          <button onClick={() => setRoute("addBookmark")} id="addBookmarkBtn">New Bookmark</button>
        </div>
        <Bookmarks currentUserBookmarks={currentUserBookmarks} currentUser={currentUser} setUrlOfEditBookmark={setUrlOfEditBookmark} setRoute={setRoute} />
      </>
    );
  }

  else if (route === "addBookmark") {
    return (
      <>
        <Navbar setRoute={setRoute} />
        <AddBookmark currentUserBookmarks={currentUserBookmarks} currentUser={currentUser} setRoute={setRoute} />
      </>
    );
  }

  else if (route === "editBookmark") {
    return (
      <>
        <Navbar setRoute={setRoute} />
        <EditBookmark currentUserBookmarks={currentUserBookmarks} currentUser={currentUser} urlOfEditBookmark={urlOfEditBookmark} setRoute={setRoute} />
      </>
    );
  }

  else if (route === "myAccount") {
    return (
      <>
        <Navbar setRoute={setRoute} />
        <MyAccount currentUser={currentUser} />
      </>
    );
  }
}

export default App;