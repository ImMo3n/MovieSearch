import { useCallback, useRef, useState } from "react";

import debounce from "lodash.debounce";
import { styled } from "styled-components";
import { BsSearch } from "react-icons/bs";

import { SelectCategories } from "./SelectCategories";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { ComboboxList } from "./ComboboxList";
import { apiKey, baseURL } from "../../CommonVariables";

import { useNavigate } from "react-router-dom";
import { categories } from "../../Types";

export const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState<categories>(categories.movie);

  const navigate = useNavigate();

  const SearchField = useRef<HTMLInputElement>(null);

  const onChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    const element = e.target as HTMLInputElement;
    setSearchTerm(element.value);
  }, []);

  const debounced = debounce(onChange, 400);

  const searchQueryFn = useCallback(async () => {
    const url = new URL(baseURL);
    url.pathname = `/3/search/${category}`;
    url.searchParams.append("api_key", apiKey);
    url.searchParams.append("query", searchTerm);
    url.searchParams.append("page", "1");
    const result = await axios.get(url.toString());
    return result;
  }, [searchTerm, category]);

  const { data } = useQuery(
    ["SearchQueryInline", searchTerm, category],
    searchQueryFn
  );

  return (
    <>
      <Combobox>
        <ComboboxSearch
          onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            if (!SearchField.current) return;
            const element = SearchField.current as HTMLInputElement;
            const searchTerm = encodeURIComponent(element.value);
            const selectedCategory = encodeURIComponent(category);
            navigate(`/search/${selectedCategory}/${searchTerm}`);
            SearchField.current.blur();
          }}
        >
          <Search
            ref={SearchField}
            type="text"
            onChange={debounced}
            placeholder="Search..."
          />
          <SelectCategories
            category={category as categories}
            setCategory={setCategory}
          />
          <Button type="submit">
            <BsSearch />
          </Button>
        </ComboboxSearch>
        <ComboboxPopover>
          <ComboboxList
            category={category as categories}
            data={data?.data?.results}
          />
        </ComboboxPopover>
      </Combobox>
    </>
  );
};

const Combobox = styled.div`
  position: relative;
  flex: 1;
`;

const Button = styled.button`
  font-size: inherit;
  padding: 0.25rem;
  margin: 0.25rem;
  color: inherit;
`;

const Search = styled.input`
  background-color: transparent;
  border: 0;
  outline: 0;
  font-size: inherit;
  color: inherit;
  flex: 1;
  width: 100px;

  &:hover::placeholder,
  &:focus::placeholder {
    color: inherit;
  }
`;

const ComboboxSearch = styled.form`
  display: flex;
  align-items: center;
  border-bottom: 1px solid currentColor;
  color: #b5b5b5;
  font-size: 1.2rem;

  &:focus-within {
    color: white;
  }
`;

const ComboboxPopover = styled.div`
  position: absolute;
  width: 100%;
  ${Combobox}:not(:focus-within) & {
    display: none;
  }
  border: 1px solid #a0a0a0;
  border-top: 0;
`;
