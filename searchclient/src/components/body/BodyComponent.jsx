import { useEffect, useState } from "react";
import { SearchContext } from "../../context/AppContext";
import axios from "axios";
import ContentComponent from "./browse/ContentComponent";
import StartupComponent from "./startup/StartupComponent";

const BodyComponent = () => {
  const [search, setSearch] = useState("");
  const [searchReg, setSearchReg] = useState(null);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    let searchTrim = search.replace(/[^a-z0-9 ]/gi, "");
    let searchRegEx = new RegExp(
      searchTrim.toLowerCase().split(" ").join("|"),
      "gim"
    );
    setSearchReg(searchRegEx);
  }, [search]);

  useEffect(() => {
    const getBooks = async () => {
      const response = await axios.get("http://localhost:3001/api/books");
      setBooks(await response.data);
    };
    getBooks();
  }, []);

  let filteredList = books.filter((book) => {
    let bookValue = "";
    for (let key in book) {
      if (book.hasOwnProperty(key) && book[key] !== "") {
        bookValue += book[key].toString().toLowerCase().trim() + " ";
      }
    }
    return bookValue.match(searchReg);
  });

  return (
    <SearchContext.Provider
      value={{ search, setSearch, filteredList, error, setError }}
    >
      <StartupComponent />
      <ContentComponent />
    </SearchContext.Provider>
  );
};

export default BodyComponent;
