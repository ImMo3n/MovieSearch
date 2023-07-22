import { useCallback } from "react";
import { styled } from "styled-components";

import { Modal } from "../../Modal";
import { apiKey, baseURL } from "../../CommonVariables";
import { CreditsRole, IRole } from "./CreditsRole";
import { MainInfo } from "./MainInfo";
import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import { Overview } from "./Overview";
import { BannerOrTrailer } from "./BannerOrTrailer";
import {
  ModalType,
  MovieCreditsResponse,
  MovieDetailsResponse,
  TrailerResponse,
  TVDetailsResponse,
} from "../../Types";

export const MovieDetail = ({
  modalObject,
  onClose,
  modalRef,
}: {
  modalObject?: ModalType;
  onClose: () => void;
  modalRef: React.RefObject<HTMLDialogElement>;
}) => {
  const { category, id } = modalObject as ModalType;

  const fetchMovieDetails = useCallback(async () => {
    const url = new URL(baseURL);
    url.pathname = `/3/${category}/${id}`;
    url.searchParams.append("api_key", apiKey);

    return await axios.get(url.toString());
  }, [category, id]);

  const fetchCredits = useCallback(async () => {
    const url = new URL(baseURL);
    url.pathname = `/3/${category}/${id}/credits`;
    url.searchParams.append("api_key", apiKey);

    return await axios.get(url.toString());
  }, [category, id]);

  const fetchVideos = useCallback(async () => {
    const url = new URL(baseURL);
    url.pathname = `/3/${category}/${id}/videos`;
    url.searchParams.append("api_key", apiKey);
    url.searchParams.append("language", "en-us");

    return await axios.get(url.toString());
  }, [category, id]);

  const result = useQueries({
    queries: [
      { queryKey: ["Details", category, id], queryFn: fetchMovieDetails },
      { queryKey: ["Credits", category, id], queryFn: fetchCredits },
      { queryKey: ["Videos", category, id], queryFn: fetchVideos },
    ],
  });

  const [detailsResponse, creditsResponse, videosResponse] = result;

  return (
    <Modal modalRef={modalRef} onClose={onClose}>
      <Wrapper>
        <MainInfo
          response={
            detailsResponse as unknown as
              | MovieDetailsResponse
              | TVDetailsResponse
          }
        />
        <BannerOrTrailer
          movieDetailResponse={
            detailsResponse as unknown as MovieDetailsResponse
          }
          videoResponse={videosResponse as unknown as TrailerResponse}
        />
        <Overview
          response={detailsResponse as unknown as MovieDetailsResponse}
        />
        <CreditsRole
          response={creditsResponse as unknown as MovieCreditsResponse}
          title="Actors"
          role={IRole.acting}
        />
        <CreditsRole
          response={creditsResponse as unknown as MovieCreditsResponse}
          title="Directors"
          role={IRole.directing}
        />
      </Wrapper>
    </Modal>
  );
};

const Wrapper = styled.div`
  max-width: 90%;
  margin: auto;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
