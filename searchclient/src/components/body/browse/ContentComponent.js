import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import { useEffect, useContext } from "react";
import { SearchContext } from "../../../context/AppContext";
import { Category, Author } from "../../../styles/bodyStyles/content.style";
import SearchComponent from "../search/SearchComponent";

const ContentComponent = () => {
  const { filteredList, setError, search } = useContext(SearchContext);

  useEffect(() => {
    if (filteredList.length <= 0 && search.length > 0) setError(true);
  }, [filteredList, search, setError]);
  return (
    <Flex
      flexDirection="column"
      width="100vw"
      p="5rem 3rem"
      justifyContent="center"
      alignItems="center"
      backgroundColor="gray.50"
    >
      <SearchComponent />
      <Flex
        flexDirection="row"
        flexWrap="wrap"
        p={4}
        justifyContent="center"
        gap={5}
        maxWidth="1128px"
        margin="0 auto"
      >
        {filteredList.map((book) => (
          <Box
            key={book._id}
            p={5}
            borderRadius={5}
            backgroundColor="#fff"
            w="300px"
            h="240px"
          >
            <Heading fontSize="1.8rem" fontWeight={600}>
              {book.title}
            </Heading>
            <Author>
              <span>Author: </span>
              {book.author}
            </Author>
            <Category>
              <span>Category: </span>
              {book.category}
            </Category>
            <Flex gap={5} h="50%" justifyContent="center" alignItems="flex-end">
              <Button>Buy now</Button>
              <Button>Add to cart</Button>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default ContentComponent;
