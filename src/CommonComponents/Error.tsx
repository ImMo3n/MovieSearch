import { styled } from "styled-components";

export const Error = ({ children }: { children: React.ReactNode }) => {
  return (
    <ErrorStyle>
      <p>Error has occured</p>
      {children}
    </ErrorStyle>
  );
};

const ErrorStyle = styled.p`
  font-size: 2rem;
  color: red;
`;
