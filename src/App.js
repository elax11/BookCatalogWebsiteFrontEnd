import './App.css';
import NavBar from './Components/NavBar'
import AddBook from './Components/AddBook'
import BookListItem from './Components/BookListItem';
import BookList from './Components/BookList';
import {useEffect, useState} from 'react';

export default function App() {
  return (
    <div>
      <NavBar/>
      <AddBook/>
      <BookList/>
    </div>
  );
}
