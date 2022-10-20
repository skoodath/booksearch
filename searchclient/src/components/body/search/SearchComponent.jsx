import { Container, Flex, Input } from "@chakra-ui/react";
import { useContext, useRef } from "react";
import {SearchContext} from "../../../context/AppContext";


const SearchComponent = () => {
  const { search, setSearch, setError } = useContext(SearchContext);

  const searchRef = useRef(null);

  const handleSearch = () => {
    setSearch(searchRef.current.value);
    setError(false);
  };

  return (
    <Container>
      <form>
        <Flex p={5}>
          <Input
            type="text"
            value={search}
            onChange={handleSearch}
            ref={searchRef}
            variant="outline"
            placeholder="Search book"
            p={2}
            mx="auto"
            backgroundColor="#fff"
          />
        </Flex>
      </form>
    </Container>
  );
};

export default SearchComponent;
