import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { SearchComponent } from "./SearchComponent";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>
        <Link to="/">
          <span>📽</span>
          <span>MovieSearch</span>
        </Link>
      </Logo>
      <SearchComponent />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: #151515;
  border: 3px solid #262626;
  padding: 1rem;
  border-radius: 10px;
  gap: 1rem;

  /* Element should be overlapping all the other contents */
  z-index: 1;

  &:hover,
  &:focus-within {
    border-color: #626262;
  }
`;

const Logo = styled.div`
  @media only screen and (max-width: 1024px) {
    & span:nth-child(2) {
      display: none;
    }
  }

  & a:hover {
    text-decoration: underline;
    text-underline-offset: 11px;
  }
`;
