import { styled } from "styled-components";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import React from "react";

export const Modal = ({
  modalRef,
  onClose,
  children,
}: {
  modalRef: React.RefObject<HTMLDialogElement>;
  onClose?: () => void;
  children: React.ReactNode;
}) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const modalContainer = document.getElementById("modal")!;

  const closeModal = () => {
    modalRef?.current?.close?.();
    if (typeof onClose === "function") onClose();
  };

  return createPortal(
    <>
      <Dialog
        ref={modalRef}
        onClick={(event: React.MouseEvent<HTMLDialogElement>) => {
          if (isClickedOutside(modalRef, event)) {
            closeModal();
          }
        }}
      >
        <CloseButton onClick={closeModal}>
          <span className="sr-only">Close</span>
          <AiOutlineClose />
        </CloseButton>
        <Wrapper>{children}</Wrapper>
      </Dialog>
    </>,
    modalContainer
  );
};

const isClickedOutside = (
  modalRef: React.RefObject<HTMLDialogElement>,
  event: React.MouseEvent<HTMLDialogElement>
) => {
  const rect = modalRef?.current?.getBoundingClientRect();
  if (!rect) return false;
  const { clientX, clientY } = event;
  const { left, right, top, bottom } = rect;
  if (left > clientX || right < clientX || top > clientY || bottom < clientY) {
    return true;
  }
  return false;
};

const Dialog = styled.dialog`
  width: clamp(50%, 1200px, 95%);
  height: 90%;
  background-color: #131313;
  color: white;
  border: 1px solid #6f6f6f;
  border-radius: 10px;
  padding: 0.5rem;

  margin-top: 60px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: #252525;
    border-radius: 100vw;
    margin-block: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #dde6ed;
    border-radius: 100vw;
    border: 1px solid #27374d;
  }
`;

const CloseButton = styled.button`
  position: fixed;
  top: 10px;
  right: 10px;

  font-size: 2rem;

  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 10px;
  color: #cacaca;
`;

const Wrapper = styled.div`
  margin-block: 2rem;
`;
