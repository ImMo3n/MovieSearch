import { styled } from "styled-components";
import { getImageURL } from "../../CommonFunctions";
import { ImageWidths } from "../../CommonVariables";
import { useUpdateModalObject } from "../../ModalObjectProvider";
import { categories, PersonObject } from "../../Types";
import { PosterImage } from "../PosterImage";

export const ResultTagPerson = ({ result }: { result: PersonObject }) => {
  const profileURL = getImageURL(result.profile_path, ImageWidths.XS);
  const personName = result.name;

  const updateModalID = useUpdateModalObject();

  return (
    <Wrapper
      onClick={() => {
        updateModalID({ id: result.id, category: categories.person });
      }}
    >
      <span>{personName}</span>
      <ImageWrapper>
        <PosterImage
          url={profileURL}
          alt={personName}
          category={categories.person}
        />
      </ImageWrapper>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  background-color: #434343;

  border-radius: 10px;
  padding-right: 10px;

  &:hover,
  &:focus-within {
    text-decoration: underline;
    background-color: #545454;
  }
`;

const ImageWrapper = styled.div`
  --image-width: 75px;
`;
