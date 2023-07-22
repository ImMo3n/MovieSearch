import { styled } from "styled-components";
import { PosterImage } from "../../CommonComponents/PosterImage";
import { KnownFor } from "../../CommonComponents/Role";
import { getImageURL } from "../../CommonFunctions";
import { categories, PersonDetailsResponse, PersonDetails } from "../../Types";
import { BirthDeathDates } from "./BirthDeathDates";

export const MainInfo = ({ response }: { response: PersonDetailsResponse }) => {
  const { isLoading, data } = response;

  if (isLoading === true) return <SkeletonLoader />;

  const personDetails = data.data as PersonDetails;

  return personDetails ? (
    <>
      <Wrapper>
        <PosterImage
          url={getImageURL(personDetails.profile_path)}
          alt={personDetails?.name}
          category={categories.person}
        />
        <InfoWrapper>
          <h1>{personDetails.name}</h1>
          <KnownFor>{personDetails.known_for_department}</KnownFor>
          <BirthDeathDates data={personDetails} />
          <p>{personDetails.place_of_birth}</p>
        </InfoWrapper>
      </Wrapper>
    </>
  ) : (
    <></>
  );
};

const Wrapper = styled.div`
  --image-width: 200px;
  display: flex;
  gap: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;

  background: linear-gradient(90deg, #2f2f2f, #131313);
  border-radius: 10px;
  object-fit: contain;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 0;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  & h1 {
    font-size: 2rem;
  }
`;

// Skeleton Loader

const SkeletonLoader = () => {
  return (
    <Wrapper>
      <PosterImage url={""} alt={""} category={categories.person} />
      <InfoWrapper>
        <TitleSkeleton />
        <RoleSkeleton />
        <BornDateSkeleton />
        <BornLocationSkeleton />
      </InfoWrapper>
    </Wrapper>
  );
};

const TitleSkeleton = () => {
  const style = {
    width: 300,
    height: 32,
    backgroundColor: "#898989",
    borderRadius: 5,
  };

  return <div className="animate-pulse" style={style}></div>;
};

const RoleSkeleton = () => {
  const style = {
    width: 80,
    height: 34,
    backgroundColor: "#898989",
    borderRadius: 5,
  };

  return <div className="animate-pulse" style={style}></div>;
};

const BornDateSkeleton = () => {
  const style = {
    width: 330,
    height: 25,
    backgroundColor: "#898989",
    borderRadius: 5,
  };

  return <div className="animate-pulse" style={style}></div>;
};

const BornLocationSkeleton = () => {
  const style = {
    width: 280,
    height: 25,
    backgroundColor: "#898989",
    borderRadius: 5,
  };

  return <div className="animate-pulse" style={style}></div>;
};
