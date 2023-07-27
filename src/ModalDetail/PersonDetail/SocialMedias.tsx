import {
  FaImdb,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { styled } from "styled-components";
import { SocialMediaResponse } from "../../Types";

export const SocialMedias = ({
  response,
}: {
  response: SocialMediaResponse;
}) => {
  const { isLoading, data } = response;

  if (isLoading === true) return <SkeletonLoader />;
  const socialMedias = data.data;

  return (
    <Wrapper>
      {socialMediaObject
        .filter(({ id }) => socialMedias[id as keyof typeof socialMedias])
        .map(({ baseURL, id, icon: SocialMediaIcon }) => (
          <SocialMedia key={id}>
            <a
              target="_blank"
              href={`${baseURL}/${
                socialMedias[id as keyof typeof socialMedias]
              }`}
            >
              <IconWrapper>
                <SocialMediaIcon />
              </IconWrapper>
            </a>
          </SocialMedia>
        ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const SocialMedia = styled.a`
  display: flex;
  gap: 0.5rem;
`;

const IconWrapper = styled.span`
  font-size: 1.8rem;
`;

const SkeletonLoader = () => <p>Loading...</p>;

const socialMediaObject = [
  {
    baseURL: "https://www.imdb.com/name",
    id: "imdb_id",
    icon: () => <FaImdb />,
  },
  {
    baseURL: "https://www.facebook.com",
    id: "facebook_id",
    icon: () => <FaFacebookSquare />,
  },
  {
    baseURL: "https://www.instagram.com",
    id: "instagram_id",
    icon: () => <FaInstagramSquare />,
  },
  {
    baseURL: "https://twitter.com",
    id: "twitter_id",
    icon: () => <FaTwitterSquare />,
  },
];
