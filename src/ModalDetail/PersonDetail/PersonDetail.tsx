import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import { useCallback } from "react";
import { styled } from "styled-components";
import { apiKey, baseURL } from "../../CommonVariables";
import { Modal } from "../../Modal";
import {
  ModalType,
  MovieCreditsResponse,
  PersonDetailsResponse,
  SocialMediaResponse,
} from "../../Types";
import { Biography } from "./Biography";
import { MainInfo } from "./MainInfo";
import { Movies } from "./Movies";
import { SocialMedias } from "./SocialMedias";

export const PersonDetail = ({
  modalObject,
  onClose,
  modalRef,
}: {
  modalObject?: ModalType;
  onClose: () => void;
  modalRef: React.RefObject<HTMLDialogElement>;
}) => {
  const { category, id } = modalObject as ModalType;

  const fetchPersonMovies = useCallback(async () => {
    const url = new URL(baseURL);
    url.pathname = `/3/person/${id}/combined_credits`;
    url.searchParams.append("api_key", apiKey);

    return await axios.get(url.toString());
  }, [id]);

  const fetchExternalIDs = useCallback(async () => {
    const url = new URL(baseURL);
    url.pathname = `/3/person/${id}/external_ids`;
    url.searchParams.append("api_key", apiKey);

    return await axios.get(url.toString());
  }, [id]);

  const fetchPersonDetails = useCallback(async () => {
    const url = new URL(baseURL);
    url.pathname = `/3/person/${id}`;
    url.searchParams.append("api_key", apiKey);

    return await axios.get(url.toString());
  }, [id]);

  const result = useQueries({
    queries: [
      { queryKey: ["Details", category, id], queryFn: fetchPersonDetails },
      { queryKey: ["External", category, id], queryFn: fetchExternalIDs },
      { queryKey: ["Movies", category, id], queryFn: fetchPersonMovies },
    ],
  });

  const [personDetailsResponse, externalLinksResponse, moviesResponse] = result;

  return (
    <Modal modalRef={modalRef} onClose={onClose}>
      <Wrapper>
        <MainInfo
          response={personDetailsResponse as unknown as PersonDetailsResponse}
        />
        <Movies response={moviesResponse as unknown as MovieCreditsResponse} />
        <Biography
          response={personDetailsResponse as unknown as PersonDetailsResponse}
        />
        <SocialMedias
          response={externalLinksResponse as unknown as SocialMediaResponse}
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
