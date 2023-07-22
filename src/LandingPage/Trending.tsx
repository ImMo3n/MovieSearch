import { useCallback, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MovieSlide } from "../CommonComponents/MovieSlide";
import { styled } from "styled-components";
import {
  apiKey,
  baseURL,
  categoryOptions,
  TrendSortOptions,
} from "../CommonVariables";
import { categories, TrendSort } from "../Types";

export const Trending = () => {
  const [trendingMedia, setTrendingMedia] = useState<string>(categories.movie);
  const [trendingSort, setTrendingSort] = useState<string>(TrendSort.day);

  const fetchTrending = useCallback(async () => {
    const url = new URL(baseURL);
    url.pathname = `/3/trending/${trendingMedia}/${trendingSort}`;
    url.searchParams.append("api_key", apiKey);
    const result = await axios.get(url.toString());
    return result;
  }, [trendingMedia, trendingSort]);

  const { data, isLoading } = useQuery(
    ["Trending", trendingMedia, trendingSort],
    fetchTrending
  );

  const options = categoryOptions.filter(({ id }) => id !== categories.person);

  return (
    <>
      <MovieSlide
        category={trendingMedia as categories}
        title="🔥 Trending"
        movies={data?.data?.results}
        isLoading={isLoading}
      >
        <Wrapper>
          <ButtonWrapper>
            {options.map(({ id, name }) => (
              <Button
                key={id}
                value={id}
                setValue={setTrendingMedia}
                currentValue={trendingMedia}
              >
                {name}
              </Button>
            ))}
          </ButtonWrapper>
          <ButtonWrapper>
            {TrendSortOptions.map(({ id, name }) => (
              <Button
                key={id}
                value={id}
                setValue={setTrendingSort}
                currentValue={trendingSort}
              >
                {name}
              </Button>
            ))}
          </ButtonWrapper>
        </Wrapper>
      </MovieSlide>
    </>
  );
};

const Button = ({
  currentValue,
  value,
  setValue,
  children,
}: {
  currentValue: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  children: React.ReactNode;
}) => {
  return (
    <button
      className={`${value === currentValue ? "active" : ""}`}
      onClick={() => setValue(value)}
    >
      {children}
    </button>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  border-radius: 10px;
  background-color: #363636;

  & .active {
    background-color: #5d5d5d;
  }

  & .uppercase {
    text-transform: uppercase;
  }

  & button {
    padding-block: 0.5rem;
    padding-inline: 0.7rem;
    text-transform: capitalize;
  }

  & button:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  & button:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  & button:hover {
    background-color: #4f4f4f;
  }
`;
