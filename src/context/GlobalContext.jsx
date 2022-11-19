import { useState, useContext, createContext, useEffect } from 'react';

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  //儲存使用者上傳的 pdf 資訊
  const [fileInfo, setFileInfo] = useState({
    fileName: null,
    totalPages: 0,
    file: null,
    typedArr: null,
  });
  const [finishPDF, setFinishPDF] = useState();
  const [signatureList, setSignatureList] = useState([]);
  const [imgList, setImgList] = useState([]);

  //利用timestamp來生成 id
  const uniqueId = () => {
    return new Date().valueOf();
  };

  const addNewSignature = (newSign) => {
    const id = uniqueId();
    setSignatureList([...signatureList, { id, img: newSign }]);
  };

  const removeSignature = (id) => {
    const newList = signatureList.filter((sig) => sig.id !== id);
    setSignatureList(newList);
  };

  const addNewImg = (newImg) => {
    const id = uniqueId();
    setImgList([...imgList, { id, img: newImg }]);
  };

  useEffect(() => {
    localStorage.setItem('img', JSON.stringify(signatureList));
  }, [signatureList]);

  return (
    <GlobalContext.Provider
      value={{
        addNewSignature,
        removeSignature,
        signatureList,
        fileInfo,
        setFileInfo,
        finishPDF,
        setFinishPDF,
        addNewImg,
        imgList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
