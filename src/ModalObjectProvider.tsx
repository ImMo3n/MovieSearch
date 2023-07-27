/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import { ModalType } from "./Types";

const SelectedModalContext = createContext<ModalType | null>(null);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const UpdateModalContext = createContext((modal: ModalType | null) => {
  return;
});

export const useModalObject = () => {
  return useContext(SelectedModalContext);
};

export const useUpdateModalObject = () => {
  return useContext(UpdateModalContext);
};

export const ModalObjectProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedModal, setSelectedModal] = useState<ModalType | null>(null);

  const updateModal = (modal: ModalType | null) => {
    setSelectedModal(modal);
  };

  return (
    <SelectedModalContext.Provider value={selectedModal}>
      <UpdateModalContext.Provider value={updateModal}>
        {children}
      </UpdateModalContext.Provider>
    </SelectedModalContext.Provider>
  );
};
