import React from "react";

export default function EditBook({book}){
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
            <header>Edit book</header>
            <form method="post" onSubmit={handleSubmit} key={book.id}>
                <label htmlFor="id">Id</label>
                <input defaultValue={book.id} type="text" id="mainInput" name="id"/>
                <hr />
                <label htmlFor="title">Title</label>
                <input defaultValue={book.title} type="text" id="mainInput" name="title"/>
                <hr />
                <label htmlFor="cover">Cover</label>
                <input defaultValue={book.cover} type="text" id="mainInput" name="cover"/>
                <hr />
                <label htmlFor="genre">Genre</label>
                <input defaultValue={book.genre} type="text" id="mainInput" name="genre"/>
                <hr />
                <label htmlFor="author">Author</label>
                <input defaultValue={book.author} type="text" id="mainInput" name="author"/>
                <hr />
                <label htmlFor="content">Content</label>
                <input defaultValue={book.content} type="text" id="mainInput" name="content"/>
                <hr />
                <button type="submit">Save</button>
                <button type="reset">Clear</button>
            </form>
        </div>
    )
}