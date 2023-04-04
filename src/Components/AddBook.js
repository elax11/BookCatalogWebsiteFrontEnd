import React from "react";

export default function AddBook(){
    return (
        <div className="addBook">
            <header>Add Book</header>
            <label for="fname">Title</label>
            <input type="text" id="fname" name="fname"/>
            <label for="lname">Cover</label>
            <input type="text" id="lname" name="lname"/>
            <label for="fname">Genre</label>
            <input type="text" id="fname" name="fname"/>
            <label for="lname">Author</label>
            <input type="text" id="lname" name="lname"/>
            <label for="fname">Content</label>
            <input type="text" id="fname" name="fname"/>
            <button type="button">Add</button>
            <button type="button">Clear</button>
        </div>
    )
}