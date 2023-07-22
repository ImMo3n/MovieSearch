import { FaImdb } from "react-icons/fa";
import styled from "styled-components";

export const IMDBLink = ({ imdb_id }: { imdb_id: string }) => {
  if (!imdb_id) return <></>;
  return (
    <Wrapper target="_blank" href={`https://www.imdb.com/title/${imdb_id}/`}>
      <Title>IMDb Page</Title>
      <Icon>
        <FaImdb />
      </Icon>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
  gap: 0.2rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Icon = styled.span`
  font-size: 1.6rem;
`;

const Title = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
`;
