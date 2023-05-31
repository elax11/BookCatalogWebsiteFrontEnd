import React, { useState } from "react";
import AddBook from './AddBook'
import EditBook from './EditBook'
import BookList from './BookList';

export default function Library(){
    function handleClickSetBookById(book){
        setBookById(book);
    }
    const [bookById, setBookById] = useState(0);
    return(
        <div>
            {bookById === 0 ? <AddBook/> : <EditBook book = {bookById} />}
            <BookList setBookById = {handleClickSetBookById} />
        </div>
    )
}