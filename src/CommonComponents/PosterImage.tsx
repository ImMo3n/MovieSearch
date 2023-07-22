import { styled } from "styled-components";
import { categories } from "../Types";

import { AiOutlineUser } from "react-icons/ai";
import { BiMovie } from "react-icons/bi";

export const PosterImage = ({
  url,
  alt,
  category,
}: {
  url?: string;
  alt: string;
  category?: categories;
}) => {
  return (
    <>
      {url ? (
        <ImageWrapper>
          <img loading="lazy" src={url} alt={alt} />
        </ImageWrapper>
      ) : (
        <Wrapper>
          <DefaultPicture category={category} />
        </Wrapper>
      )}
    </>
  );
};

const DefaultPicture = ({ category }: { category?: categories }) => {
  let CategoryIcon = () => <p>No Image</p>;
  if (category === categories.person) {
    CategoryIcon = () => <AiOutlineUser />;
  } else if (category === categories.movie || category === categories.tv) {
    CategoryIcon = () => <BiMovie />;
  }
  return (
    <CategoryWrapper>
      <CategoryIcon />
    </CategoryWrapper>
  );
};

const CategoryWrapper = styled.div`
  font-size: 3rem;
`;

const Wrapper = styled.div`
  width: var(--image-width);
  height: calc(var(--image-width) * 1.55);
  position: relative;
  isolation: isolate;
  flex-shrink: 0;

  display: grid;
  place-items: center;

  background-color: #656565;
  border-radius: 6px;
`;

const ImageWrapper = styled(Wrapper)`
  & img {
    max-width: 100%;
    height: 100%;
    border-radius: 6px;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: #898989;
    z-index: -1;
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    border-radius: 10px;
  }
`;
