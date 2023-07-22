import { useMemo } from "react";
import styled from "styled-components";
import { ResultTag } from "../../CommonComponents/ResultTag";
import { categories, MovieCreditsResponse, PersonObject } from "../../Types";

import { Wrapper as PersonTagWrapper } from "../../CommonComponents/ResultTag/ResultTagPerson";

export enum IRole {
  acting = "Acting",
  writing = "Writing",
  directing = "Directing",
}

export const CreditsRole = ({
  response,
  title,
  role,
  limitResultsBy = 10,
}: {
  response: MovieCreditsResponse;
  title: string;
  role: IRole;
  limitResultsBy?: number;
}) => {
  const { isLoading, data } = response;

  const all = useMemo(() => {
    if (!data?.data) return [];
    const all = Object.values(data.data)
      .filter((property) => Array.isArray(property))
      .reduce(
        (crew: Array<PersonObject>, array: any) => [...crew, ...array],
        []
      ) as Array<PersonObject>;

    // Without code below returns duplicated people with the same ID
    const uniqueIDs = [...new Set(all.map((person) => person.id))];

    if (uniqueIDs.length === all.length) return all;

    const uniqueCredits = uniqueIDs.map((id) => {
      return all.find((personObject) => personObject.id === id);
    });

    return uniqueCredits;
  }, [data]);

  const peopleBasedOnRole = all
    .filter((person) => person && person.known_for_department === role)
    .slice(0, limitResultsBy);

  if (isLoading === true) return <CreditsRoleSkeletonLoader />;
  else if (peopleBasedOnRole.length === 0) return <></>;
  else
    return (
      <Wrapper>
        <Title>{title}</Title>
        <ActorsSlideWrapper>
          {peopleBasedOnRole.map((person) => (
            <ResultTag
              key={person && person.id}
              result={person as PersonObject}
              category={categories.person}
            />
          ))}
        </ActorsSlideWrapper>
      </Wrapper>
    );
};

const CreditsRoleSkeletonLoader = () => {
  return <p>Loading...</p>;
};

const Wrapper = styled.div`
  background: linear-gradient(90deg, #2f2f2f, #131313);
  border-radius: 10px;
  padding-inline: 1rem;
`;

const Title = styled.h4`
  margin-block: 1rem;
  font-size: 1.8rem;
`;

const ActorsSlideWrapper = styled.div`
  display: flex;
  gap: 1.8rem;
  overflow-x: auto;
  padding-bottom: 0.8rem;
  margin-bottom: 0.5rem;

  & ${PersonTagWrapper} {
    background-color: #3b3b3b;
  }

  &::-webkit-scrollbar {
    height: 12px;
  }

  &::-webkit-scrollbar-track {
    background-color: #252525;
    border-radius: 100vw;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #dde6ed;
    border-radius: 100vw;
    border: 1px solid #27374d;
  }
`;
