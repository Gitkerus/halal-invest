import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [visibleContent, setVisibleContent] = useState();
  const [openModalContactForm, setOpenModalContactForm] = useState(false);
  const [openModalReviewForm, setOpenModalReviewForm] = useState(false);

  return (
    <AppContext.Provider
      value={{
        visibleContent,
        setVisibleContent,
        openModalContactForm,
        setOpenModalContactForm,
        openModalReviewForm,
        setOpenModalReviewForm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
