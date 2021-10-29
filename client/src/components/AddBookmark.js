import React from "react";
import "./AddBookmark.css";

function AddBookmark({ currentUserBookmarks, currentUser, setRoute }) {
    document.title = "Bookmarks Everywhere | Add Bookmark";
    document.body.style.background = "#000000";

    async function addBookmarkFormSubmit(event) {
        event.preventDefault();

        const bookmarkUrl = document.getElementById("bookmarkUrl").value;
        const bookmarkTitle = document.getElementById("bookmarkTitle").value;

        const newBookmark = { url: bookmarkUrl, title: bookmarkTitle }
        const newBookmarks = [...currentUserBookmarks, newBookmark];

        await fetch(`http://localhost:5000/bookmark/add/${currentUser}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ bookmarks: newBookmarks })
        });

        setRoute("myBookmarks");
    }

    return (
        <form onSubmit={addBookmarkFormSubmit} id="addBookmarkForm">
            <input type="url" placeholder="Enter URL" id="bookmarkUrl" required /> <br />
            <input type="text" placeholder="Enter Title" id="bookmarkTitle" /> <br />
            <button type="submit">Add Bookmark</button>
        </form>
    );
}

export default AddBookmark;