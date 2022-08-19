import { createSignal, createResource } from "solid-js"
import { searchBooks } from "./searchBooks";

export function AddBook(props) {
  const [input, setInput] = createSignal("");
  const [query, setQuery] = createSignal("");

  const [data] = createResource(query, searchBooks);

  return (
    <div>
      <form>
        <div>
          <label for="title">Search books</label>
          <input 
            id="title"
            value={input()}
            onInput={(e) => {
              setInput(e.currentTarget.value);
            }} 
            />
        </div>
        <button type="submit" 
          onClick={(e) => {
            e.preventDefault();
            setQuery(input());
          }}>
          Search
        </button>
      </form>

      <div>
        <Show when={!data.loading} fallback={<>Searching...</>}>
          <ul>
            <For each={data()}>
              {(book) => (
                <li>
                  {book.title} by {book.author}{" "}
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      props.setBooks((books) => [...books, book]);
                    }}
                  >
                    Add
                  </button>
                </li>
              )}
            </For>
          </ul>
        </Show>
      </div>

    </div>
  );
}