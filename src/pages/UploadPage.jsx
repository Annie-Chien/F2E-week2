import { useState, useRef } from 'react';
// Styled Components
import { Container, CenterContainer } from '../utils/container.styles';
import {
  SUploadArea,
  SFileInput,
  Wrap,
  CanvasContainer,
  SFileNameInput,
} from './UploadPage.styles';
//React Components
import FolderHeader from '../components/UI/Layout/FolderHeader';
import Button from '../components/UI/Button/Button';
import Icon from '../components/Icon/Icon';
//Images
import photoImg from '../assets/img/img_photo.svg';
import closeIcon from '../assets/icon/ic_close_s.svg';
import closeIcon_h from '../assets/icon/ic_close_s_h.svg';
import editIcon from '../assets/icon/ic_edit.svg';
//pdf.js

import * as pdfjsLib from 'pdfjs-dist/webpack';
import { useGlobalContext } from '../context/GlobalContext';

const UploadPage = () => {
  const { setFileInfo, fileInfo } = useGlobalContext();
  const fileInputRef = useRef(null);
  const canvasRef = useRef(null);
  const [isUploaded, setIsUploaded] = useState(false);

  const renderPDF = async (data) => {
    const pdf = await pdfjsLib.getDocument(data).promise;
    setFileInfo((prev) => ({ ...prev, totalPages: pdf.numPages }));
    const page = await pdf.getPage(1);
    const viewport = page.getViewport({ scale: 0.3 });
    const canvas = canvasRef.current;
    const canvasContext = canvas.getContext('2d');
    canvas.height = 220;
    canvas.width = 180;
    const renderContext = { canvasContext, viewport };
    page.render(renderContext);
  };

  const handleUploadFile = () => {
    const [file] = fileInputRef.current.files;
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);
    fileReader.addEventListener('load', () => {
      const typedArr = new Uint8Array(fileReader.result);

      setFileInfo((prev) => ({
        ...prev,
        fileName: file.name,
        file: file,
        typedArr: typedArr,
      }));

      setIsUploaded(true);
      renderPDF(typedArr);
    });
  };

  ///////////////////////////JSX
  const beforeUploadJSX = (
    <>
      <img src={photoImg} alt="" />
      <SFileInput htmlFor="file">
        選擇檔案
        <input
          id="file"
          type="file"
          accept="application/pdf"
          ref={fileInputRef}
          onChange={handleUploadFile}
        />
      </SFileInput>
      <h5>或者將檔案拖曳到這裡</h5>
      <p>僅支援 PDF、JPG、PNG 檔案，且容量不超過 20MB。</p>
    </>
  );
  const afterUploadJSX = (
    <Wrap>
      <CanvasContainer>
        <Button variant="none" onClick={() => setIsUploaded(false)}>
          <Icon src={closeIcon} alt="" srcOnHover={closeIcon_h} />
        </Button>
        <canvas ref={canvasRef}></canvas>
      </CanvasContainer>
      <h5>{fileInfo.fileName}</h5>
      <p>{fileInfo.totalPages}頁</p>
      <label htmlFor="fileName">專案名稱</label>
      <SFileNameInput tabIndex="1">
        <input id="fileName" type="text" placeholder={fileInfo.fileName} />
        <img src={editIcon} />
      </SFileNameInput>
    </Wrap>
  );
  return (
    <Container>
      <FolderHeader
        data={{ title: '上傳檔案', pathArr: ['/', '/edit'], step: 'upload' }}
        nextStepAvailable={isUploaded}
      />
      <SUploadArea>
        <CenterContainer>
          {isUploaded ? afterUploadJSX : beforeUploadJSX}
        </CenterContainer>
      </SUploadArea>
    </Container>
  );
};

export default UploadPage;
