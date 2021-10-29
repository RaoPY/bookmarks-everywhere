import React from "react";
import Bookmark from "./Bookmark";
import "./Bookmarks.css";

function Bookmarks({ currentUserBookmarks, currentUser, setUrlOfEditBookmark, setRoute }) {
    document.title = "Bookmarks Everywhere | My Bookmarks";
    document.body.style.background = "#000000";

    return (
        <div id="bookmarksContainer">
            <p>Hey, <b>{currentUser}</b>! Here are your bookmarks</p>
            {currentUserBookmarks.map((bookmark, index) => {
                return (
                    <Bookmark bookmark={bookmark} setUrlOfEditBookmark={setUrlOfEditBookmark} setRoute={setRoute} key={index} />
                );
            })}
        </div>
    );
}

export default Bookmarks;