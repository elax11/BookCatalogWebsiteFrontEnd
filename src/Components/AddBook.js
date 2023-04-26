import React, { useState } from "react";

export default function AddBook(){
    const [formData, setFormData] = useState({
        title: '',
        cover: '',
        genre: '',
        author: '',
        content: '',
    })
    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();
        const formData = new FormData(e.target);
        const formJson = Object.fromEntries(formData.entries());
        fetch('https://localhost:5000/api/Books/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(formJson)
            })
    }
    return (
        <div className="addBook">
            <header>Add Book</header>
            <form method="post" onSubmit={handleSubmit}>
                <label for="title">Title</label>
                <input type="text" id="mainInput" name="title"/>
                <hr />
                <label for="cover">Cover</label>
                <input type="text" id="mainInput" name="cover"/>
                <hr />
                <label for="genre">Genre</label>
                <input type="text" id="mainInput" name="genre"/>
                <hr />
                <label for="author">Author</label>
                <input type="text" id="mainInput" name="author"/>
                <hr />
                <label for="content">Content</label>
                <input type="text" id="mainInput" name="content"/>
                <hr />
                <button type="submit">Add</button>
                <button type="reset">Clear</button>
            </form>
        </div>
    )
}