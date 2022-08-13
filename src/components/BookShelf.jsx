import { AddBook } from "./AddBook";
import { BookList } from "./BookList";

import { createSignal } from "solid-js";

const initialBooks = [
  { title: "Code Complete", author: "Steve McConnell" },
  { title: "The Hobbit", author: "J.R.R. Tolkien" },
  { title: "Living a Feminist Life", author: "Sarah Ahmed" },
];

export function BookShelf(props) {
  const [books, setBooks] = createSignal(initialBooks);
  const totalBooks = () => books().length;

  return (
    <div>
      <h1>{props.name}'s Bookshelf</h1>
      <BookList books={books()} />
      <AddBook setBooks={setBooks} />
    </div>
  );
}