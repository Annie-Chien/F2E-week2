import { useState, useContext, createContext } from 'react';

const UIContext = createContext();

const UIContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <UIContext.Provider value={{ isOpen, closeModal, openModal }}>
      {children}
    </UIContext.Provider>
  );
};

export default UIContextProvider;

export const useUIContext = () => {
  return useContext(UIContext);
};
