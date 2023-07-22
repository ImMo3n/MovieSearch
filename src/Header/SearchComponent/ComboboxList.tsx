import { styled } from "styled-components";
import { MovieList } from "./MovieList";
import { PersonList } from "./PersonList";
import { categories } from "../../Types";
import { TVList } from "./TVList";

import { PersonObject, TVShowObject, MovieObject } from "../../Types";

import { ImageWidths, imgBaseURL } from "../../CommonVariables";
import { useUpdateModalObject } from "../../ModalObjectProvider";

export const ComboboxList = ({
  category,
  data,
}: {
  category: categories;
  data: PersonObject[] | TVShowObject[] | MovieObject[];
}) => {
  if (category === categories.movie) {
    return (
      <Wrapper>
        <MovieList data={data as MovieObject[]} />
      </Wrapper>
    );
  } else if (category === categories.tv) {
    return (
      <Wrapper>
        <TVList data={data as TVShowObject[]} />
      </Wrapper>
    );
  } else if (category === categories.person) {
    return (
      <Wrapper>
        <PersonList data={data as PersonObject[]} />
      </Wrapper>
    );
  } else {
    return <Wrapper></Wrapper>;
  }
};

export const Option = ({
  id,
  imgPath,
  title,
  category,
}: {
  id: number;
  imgPath: string;
  title: string;
  category: categories;
}) => {
  const updateMovieID = useUpdateModalObject();

  const posterURL = new URL(imgBaseURL);
  posterURL.pathname = `t/p/${ImageWidths.XS}/${imgPath}`;
  return (
    <OptionWrapper
      onClick={() => {
        updateMovieID({ id, category });
      }}
    >
      <div>
        <img src={posterURL.toString()} alt={title} />
      </div>
      <p>{title}</p>
    </OptionWrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.3rem;
  background-color: #252525;
`;

const OptionWrapper = styled.button`
  padding: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  & div:has(img) {
    position: relative;
    width: 70px;
    height: calc(70px * 1.5);
    isolation: isolate;
  }

  /* Skeleton loader for image */
  & div:has(img)::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: #4a4a4a;
    z-index: -1;
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    border-radius: 10px;
  }

  & img {
    max-width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  & p {
    flex: 1;
    font-size: 1.2rem;
  }

  ${Wrapper} &:not(:last-child) {
    border-bottom: 1px solid #b5b5b5;
  }
`;
