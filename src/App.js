import './App.css';
import NavBar from './Components/NavBar'
import AddBook from './Components/AddBook'
import BookListItem from './Components/BookListItem';

export default function App() {
  return (
    <div>
      <NavBar/>
      <AddBook/>
      <BookListItem/>
    </div>
  );
}
