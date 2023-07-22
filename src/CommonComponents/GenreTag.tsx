import { styled } from "styled-components";
import { genreArray as genreRefs } from "../CommonVariables";

export const GenreTag = ({ genreArray }: { genreArray: number[] }) => {
  const genres = genreRefs.filter((genreRef) => {
    return genreArray.includes(genreRef?.value);
  });

  return genreArray && genres.length > 0 ? (
    <Wrapper>
      {genres.map((genre) => (
        <Genre key={genre.value}>{genre.label}</Genre>
      ))}
    </Wrapper>
  ) : (
    <></>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const Genre = styled.span`
  background-color: #1a1a1a;
  padding: 0.4rem;
  border-radius: 8px;
  border: 1px solid #505050;
`;
