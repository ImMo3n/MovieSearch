import { styled } from "styled-components";

export const KnownFor = ({ children }: { children: React.ReactNode }) => {
  return <Role>{children}</Role>;
};

const Role = styled.span`
  background-color: #181818;
  border: 1px solid #616161;
  width: fit-content;
  padding: 0.5rem;
  border-radius: 5px;
`;
