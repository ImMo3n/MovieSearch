import { useEffect, useRef } from "react";
import { useModalObject, useUpdateModalObject } from "../ModalObjectProvider";
import { categories } from "../Types";
import { MovieDetail } from "./MovieDetail/MovieDetail";
import { PersonDetail } from "./PersonDetail/PersonDetail";

export const ModalDetail = () => {
  const modalObject = useModalObject();
  const updateMovieID = useUpdateModalObject();
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (modalObject && modalRef.current) modalRef.current.showModal();
  }, [modalObject?.id, modalObject?.category]);

  if (!modalObject) return <></>;
  const { category } = modalObject;
  let ModalDetail = () => <></>;
  if (category === categories.movie || category === categories.tv) {
    ModalDetail = () => (
      <MovieDetail
        onClose={() => {
          updateMovieID(null);
        }}
        modalObject={modalObject}
        modalRef={modalRef}
      />
    );
  } else if (category === categories.person) {
    ModalDetail = () => (
      <PersonDetail
        onClose={() => {
          updateMovieID(null);
        }}
        modalObject={modalObject}
        modalRef={modalRef}
      />
    );
  }

  return <ModalDetail />;
};
