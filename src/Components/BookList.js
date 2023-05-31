import React, { useState } from "react";
import Popup from 'reactjs-popup';

export default function BookList({setBookById}){
    const [books, setBooks] = useState([]);
    function handleAllBooks (buttonName){  
        if (buttonName === "All")
        {
            fetch('https://localhost:5000/api/Books?order=author')
                .then(response => response.json())
                .then(data => {
                    setBooks(data);
                });
        }
        else {
            fetch('https://localhost:5000/api/Recommended?genre=Horror')
                .then(response => response.json())
                .then(data => {
                    setBooks(data);
                });
        }
    }

    const [showPopUp, setShowPopUp] = useState(false); 
    const closeModal = () => setShowPopUp(false);

    function PopUpBook(book){
        return(
            <Popup open={showPopUp} closeOnDocumentClick onClose={closeModal}>
                <div className="modal">
                <a className="close" onClick={closeModal}>
                    &times;
                </a>
                {book.title} by {book.author}
                </div>
            </Popup>
        );
    }

    function handleEditBook (book){
        fetch(`https://localhost:5000/api/Books/${book.id}`)
            .then(response => response.json())
            .then(data => {
                setBookById(data);
            });
    }

    const [bookState, setBookState] = useState(0);

    return (
        <div>
            <button onClick={() => handleAllBooks("All")}>All</button>
            <button onClick={() => handleAllBooks("Recommended")}>Recommended</button>
            <button onClick={() => setBookById(0)}>Add new book</button>
            <ul>
                {books.map(book => (
                    <li key={book.id}>{book.title} by {book.author}
                        <button onClick={() => {setShowPopUp(true); setBookState(book)}}>View</button>
                        {PopUpBook(bookState)}
                        <button onClick={() => handleEditBook(book)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}