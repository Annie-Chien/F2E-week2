import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Container } from '../utils/container.styles';
import Button from '../components/UI/Button/Button';
import Divider from '../components/UI/Divider/Divider';
import FolderHeader from '../components/UI/Layout/FolderHeader';
import Icon from '../components/Icon/Icon';
import Modal from '../components/UI/Modal/Modal';
import ModalContent from '../components/ModalContent/ModalContent';

// Styled Components
import {
  SEditArea,
  SEditTools,
  SEditScreen,
  SToolBtn,
  ToolContainer,
  CanvasContainer,
  SignCotainer,
  SSign,
  SPage,
} from './EditPage.styles';
//Images
import signIcon from '../assets/icon/ic_sign.svg';
import picIcon from '../assets/icon/ic_pic.svg';
import textIcon from '../assets/icon/ic_text.svg';
import pageIcon from '../assets/icon/ic_page.svg';
import signIcon_h from '../assets/icon/ic_sign_h.svg';
import picIcon_h from '../assets/icon/ic_pic_h.svg';
import textIcon_h from '../assets/icon/ic_text_h.svg';
import pageIcon_h from '../assets/icon/ic_page_h.svg';
import addIcon from '../assets/icon/ic_add_dark.svg';
import closeIcon from '../assets/icon/ic_close_s.svg';

import { fabric } from 'fabric';
import * as pdfjsLib from 'pdfjs-dist/webpack';

import { useUIContext } from '../context/UIContext';
import { useGlobalContext } from '../context/GlobalContext';

import {
  initFabricCanvas,
  createPDFCanvas,
  pdfToImage,
} from '../utils/helperFns';

const TOOLS = [
  { name: '簽名', img: signIcon, imgOnHover: signIcon_h },
  { name: '圖片', img: picIcon, imgOnHover: picIcon_h },
  { name: '文字', img: textIcon, imgOnHover: textIcon_h },
  { name: '頁數', img: pageIcon, imgOnHover: pageIcon_h },
];
//============================================//

const EditPage = () => {
  const { signatureList, fileInfo, setFinishPDF, removeSignature, imgList } =
    useGlobalContext();
  const { isOpen, openModal } = useUIContext();
  const fabricCanvasRef = useRef(null);
  const [canvas, setCanvas] = useState();
  const [curTool, setCurTool] = useState(0);
  const [curPage, setCurPage] = useState(1); //頁數從1開始計算
  const [clickNextPage, setClickNextPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //confirm
  const [isConfirm, setIsConfirm] = useState(false);

  const pageRefs = useMemo(
    () =>
      Array(fileInfo.totalPages)
        .fill(0)
        .map((i) => React.createRef()),
    [fileInfo.totalPages]
  );

  useEffect(() => {
    if (!fileInfo.file) return;
    const fabricCanvas = initFabricCanvas('canvas');
    setCanvas(fabricCanvas);

    const makeFabricJS = async () => {
      fabricCanvas.requestRenderAll();
      const pdfCanvas = await createPDFCanvas(fileInfo.file, curPage);
      const pdfImg = await pdfToImage(pdfCanvas);
      fabricCanvas.setWidth(pdfImg.width / window.devicePixelRatio);
      fabricCanvas.setHeight(pdfImg.height / window.devicePixelRatio);
      fabricCanvas.setBackgroundImage(
        pdfImg,
        fabricCanvas.renderAll.bind(fabricCanvas)
      );
    };
    makeFabricJS();
  }, [fileInfo.file, curPage]);

  const renderPDF = async (typedArr, index) => {
    const pdf = await pdfjsLib.getDocument(typedArr).promise;
    const page = await pdf.getPage(index);
    const viewport = page.getViewport({ scale: 0.3 });
    const canvas = pageRefs[index - 1].current;
    const canvasContext = canvas.getContext('2d');
    canvas.height = 220;
    canvas.width = 180;
    const renderContext = { canvasContext, viewport };
    page.render(renderContext);
  };

  //渲染左側欄頁數 preview 畫面
  useEffect(() => {
    if (!pageRefs[0]) return;

    if (pageRefs[0].current !== null) {
      for (let i = 1; i <= fileInfo.totalPages; i++) {
        renderPDF(fileInfo.typedArr, i);
      }
    }
  }, [fileInfo.totalPages, fileInfo.typedArr, pageRefs, curTool]);

  // 在 PDF 上放上簽名/圖片
  const handleSelectSignature = (imgSrc) => {
    fabric.Image.fromURL(imgSrc, function (oImg) {
      oImg.top = 300;
      oImg.scaleX = 0.5;
      oImg.scaleY = 0.5;
      canvas.add(oImg);
    });
  };

  //在PDF上插入文字
  const handleSelectText = (textSelected) => {
    const text = new fabric.Text('hello world', { left: 100, top: 100 });
    canvas.add(text);
  };

  const handleClickNextPage = () => {
    setClickNextPage(true);
  };

  //儲存完成的PDF
  const finalizePdf = () => {
    setIsLoading(true);
    const image = canvas.toDataURL('image/png');
    setFinishPDF(image);
  };

  //設定三秒後結束合併檔案中的動畫
  useEffect(() => {
    let timeId;
    if (isLoading) {
      timeId = setTimeout(() => {
        setIsLoading(false);
        setIsConfirm(true);
      }, 3000);
    }
    return () => {
      clearTimeout(timeId);
    };
  }, [isLoading]);

  //============= JSX varibles=============//
  const signatureCollection = signatureList.map((sig) => (
    <SSign key={sig.id}>
      <img src={closeIcon} alt="" onClick={() => removeSignature(sig.id)} />
      <img
        src={sig.img}
        alt=""
        onClick={() => handleSelectSignature(sig.img)}
      />
    </SSign>
  ));

  const imgCollection = imgList.map((img) => (
    <img src={img.img} key={img.id} />
  ));

  const pageCollection = Array.from(
    new Array(fileInfo.totalPages),
    (_, index) => {
      return (
        <SPage
          key={index}
          data-key={index + 1 + '.'}
          onClick={() => setCurPage(index + 1)}
          active={curPage === index + 1}
        >
          <canvas ref={pageRefs[index]}></canvas>
        </SPage>
      );
    }
  );

  const signatureModal = (
    <Modal title="建立簽名檔">
      <ModalContent
        optionArr={[
          { title: '取消', action: 'close' },
          { title: '確定', action: 'save' },
        ]}
        variant="sign"
      />
    </Modal>
  );
  const imgModal = (
    <Modal title="新增圖片">
      <ModalContent
        optionArr={[{ title: '取消', action: 'close' }]}
        variant="img"
      />
    </Modal>
  );

  const textModal = (
    <Modal title="新增文字">
      <ModalContent
        optionArr={[
          { title: '取消', action: 'close' },
          { title: '確定', action: 'close' },
        ]}
        variant="text"
      />
    </Modal>
  );

  //============= content factory =============//
  const modalFactory = (curTool) => {
    if (isOpen) {
      switch (curTool) {
        case 0:
          return signatureModal;
        case 1:
          return imgModal;
        case 2:
          return textModal;
        default:
          return signatureModal;
      }
    }
  };

  const signContentFactory = (curTool) => {
    switch (curTool) {
      case 0:
        return signatureCollection;
      case 1:
        return imgCollection;
      case 2:
        return signatureCollection;
      case 3:
        return pageCollection;
      default:
        console.log('default');
        return signatureCollection;
    }
  };

  return (
    <Container>
      {!clickNextPage && modalFactory(curTool)}

      <FolderHeader
        data={{
          title: '簽署文件',
          pathArr: ['/upload', '/finish'],
          step: 'edit',
        }}
        clickNextPage={clickNextPage}
        handleClickNextPage={handleClickNextPage}
        isLoading={isLoading}
        isConfirm={isConfirm}
        finalizePdf={finalizePdf}
        setIsLoading={setIsLoading}
      />
      <SEditArea>
        <SEditTools>
          <ToolContainer>
            {TOOLS.map((tool, index) => (
              <SToolBtn key={index} onClick={() => setCurTool(index)}>
                <Button variant="none">
                  <Icon
                    src={tool.img}
                    alt=""
                    srcOnHover={tool.imgOnHover}
                    active={index === curTool}
                  />
                </Button>
                <span>{tool.name}</span>
              </SToolBtn>
            ))}
          </ToolContainer>
          <SignCotainer>
            {signContentFactory(curTool)}
            {curTool !== 3 ? (
              <Button variant="none" width="6" onClick={openModal}>
                <img src={addIcon} alt="" />
              </Button>
            ) : null}
            {!signContentFactory(curTool).length ? (
              <h5>新增{TOOLS[curTool].name}</h5>
            ) : (
              ''
            )}
          </SignCotainer>
        </SEditTools>
        <Divider variant="vertical" />
        <SEditScreen>
          <CanvasContainer>
            <canvas id="canvas" ref={fabricCanvasRef}></canvas>
          </CanvasContainer>
        </SEditScreen>
      </SEditArea>
    </Container>
  );
};

export default EditPage;
