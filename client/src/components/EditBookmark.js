import React from "react";
import "./EditBookmark.css";

function EditBookmark({ currentUserBookmarks, urlOfEditBookmark, currentUser, setRoute }) {
    document.title = "Bookmarks Everywhere | Edit Bookmark";

    async function editBookmarkFormSubmit(event) {
        event.preventDefault();

        const bookmarkUrlEdit = document.getElementById("bookmarkUrlEdit").value;
        const bookmarkTitleEdit = document.getElementById("bookmarkTitleEdit").value;

        const editedBookmark = { url: bookmarkUrlEdit, title: bookmarkTitleEdit }
        const newBookmarks = currentUserBookmarks.map(bookmark => {
            if (bookmark.url === urlOfEditBookmark) {
                return editedBookmark;
            } else {
                return bookmark;
            }
        });

        await fetch(`http://localhost:5000/bookmark/edit/${currentUser}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ bookmarks: newBookmarks })
        });

        setRoute("myBookmarks");
    }

    async function deleteBtn() {
        const newBookmarks = currentUserBookmarks.filter(singleBookmark => singleBookmark.url !== urlOfEditBookmark);
        await fetch(`http://localhost:5000/bookmark/delete/${currentUser}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ bookmarks: newBookmarks })
        });

        setRoute("myBookmarks");
    }

    return (
        <div id="editBookmarkContainer">
            <h1>Edit Bookmark</h1>
            <form onSubmit={editBookmarkFormSubmit}>
                <input type="url" placeholder="New URL" id="bookmarkUrlEdit" required /> <br />
                <input type="text" placeholder="New Title" id="bookmarkTitleEdit" /> <br />
                <button id="saveEditBtn">Save Changes</button>
            </form>
            <button onClick={deleteBtn} id="deleteBtn">Delete Bookmark</button>
        </div>
    );
}

export default EditBookmark;