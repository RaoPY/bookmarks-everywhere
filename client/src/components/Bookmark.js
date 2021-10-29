import React from "react";
import "./Bookmark.css";

function Bookmark({ bookmark, setUrlOfEditBookmark, setRoute }) {
    async function editBtn(bookmark) {
        await setRoute("editBookmark");
        setUrlOfEditBookmark(bookmark.url);
        document.getElementById("bookmarkUrlEdit").value = bookmark.url;
        document.getElementById("bookmarkTitleEdit").value = bookmark.title;
    }

    return (
        <div className="bookmark">
            <h3>{bookmark.title}</h3>
            <img src={`https://www.google.com/s2/favicons?domain=${bookmark.url}`} alt="" style={{verticalAlign: "middle"}} />
            <a href={bookmark.url} target="_blank" rel="noreferrer">{bookmark.url}</a>
            <hr className="line" style={{margin: "15px auto", width: "90%"}} />
            <button onClick={() => editBtn(bookmark)}>Edit</button>
        </div>
    );
}

export default Bookmark;