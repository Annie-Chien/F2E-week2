import { useState, useRef } from 'react';
// 套件：signature-canvas-react
import SignatureCanvas from 'react-signature-canvas';
// Images
import penClrBlack from '../../assets/icon/ic_color_black.svg';
import penClrBlack_h from '../../assets/icon/ic_color_black_h.svg';
import penClrBlue from '../../assets/icon/ic_color_blue.svg';
import penClrBlue_h from '../../assets/icon/ic_color_blue_h.svg';
import penClrRed from '../../assets/icon/ic_color_red.svg';
import penClrRed_h from '../../assets/icon/ic_color_red_h.svg';
import trashIcon from '../../assets/icon/ic_trash.svg';
import trashIcon_h from '../../assets/icon/ic_trash_h.svg';
import loadingGif from '../../assets/loading.gif';
import finishLogo from '../../assets/finishLogo.png';
import photoImg from '../../assets/img/img_photo.svg';

//React Components
import Button from '../UI/Button/Button';
import Icon from '../Icon/Icon';
//Styled Components
import {
  SModalContent,
  SModalOptions,
  SSignCanvas,
  SLoading,
  SWarn,
  SConfirm,
  SImgInput,
  SNewImg,
  SNewText,
} from './ModalContent.styles';
//Context
import { useUIContext } from '../../context/UIContext';
import { useGlobalContext } from '../../context/GlobalContext';
import { useNavigate } from 'react-router-dom';

// DATA: 畫筆顏色
const PEN_CLRS = {
  black: 'rgb(0, 0, 0)',
  blue: 'rgb(0, 102, 255)',
  red: 'rgb(249, 56, 25)',
};

//============================================//

const ModalContent = ({ optionArr, variant, finalizePdf, setIsLoading }) => {
  const [penClr, setPenClr] = useState(PEN_CLRS.black);
  const signatureCanvasRef = useRef(null);
  const imgInputRef = useRef(null);
  const { closeModal } = useUIContext();
  const { addNewSignature, addNewImg } = useGlobalContext();
  const navigate = useNavigate();

  // 淨空 canvas
  const clearCanvas = () => {
    console.log('cleared');
    signatureCanvasRef.current.clear();
  };

  //改變畫筆顏色
  const changePenClr = (clr) => {
    console.log('changed clr');
    setPenClr(clr);
  };

  //製作儲存簽名圖片
  function saveSign(canvas) {
    const newImgSrc = canvas.toDataURL('image/png');
    addNewSignature(newImgSrc);
  }

  // const handleUploadImg = () => {
  //   const [img] = imgInputRef.current.files;
  //   console.log(img);
  //   addNewImg(img);
  //   closeModal();
  // };

  const handleClickOption = (action) => {
    switch (action) {
      case 'close':
        closeModal();
        break;
      case 'cancel':
        closeModal();
        setIsLoading(false);
        break;
      case 'save':
        saveSign(signatureCanvasRef.current);
        closeModal();
        break;
      case 'done':
        finalizePdf();
        break;
      case 'goFinish':
        navigate('/finish');
        closeModal();
        break;
      default:
        return;
    }
  };

  //===== JSX variables ======//
  const signJSX = (
    <SSignCanvas>
      <div>
        <Button variant="none" onClick={() => changePenClr(PEN_CLRS.black)}>
          <Icon src={penClrBlack} alt="" srcOnHover={penClrBlack_h} />
        </Button>
        <Button variant="none" onClick={() => changePenClr(PEN_CLRS.blue)}>
          <Icon src={penClrBlue} alt="" srcOnHover={penClrBlue_h} />
        </Button>
        <Button variant="none" onClick={() => changePenClr(PEN_CLRS.red)}>
          <Icon src={penClrRed} alt="" srcOnHover={penClrRed_h} />
        </Button>
        <Button variant="none" width="3" onClick={clearCanvas}>
          <Icon src={trashIcon} alt="" srcOnHover={trashIcon_h} />
        </Button>
      </div>
      <SignatureCanvas
        penColor={penClr}
        canvasProps={{ width: 440, height: 200 }}
        ref={signatureCanvasRef}
      />
    </SSignCanvas>
  );

  //待調整🤡
  const imgJSX = (
    <SNewImg>
      <img src={photoImg} alt="" />
      <SImgInput htmlFor="file">
        選擇檔案
        <input
          id="file"
          type="file"
          accept="image/*"
          // ref={imgInputRef}
          // onChange={handleUploadImg}
        />
      </SImgInput>
      <h5>或者將檔案拖曳到這裡</h5>
      <p>僅支援 PDF、JPG、PNG 檔案，且容量不超過 20MB。</p>
    </SNewImg>
  );
  const textJSX = (
    <SNewText>
      <textarea type="text" />
    </SNewText>
  );
  const warnJSX = (
    <SWarn>
      <p>確定已完成簽署文件？</p>
    </SWarn>
  );

  const loadingJSX = (
    <SLoading>
      <img src={loadingGif} alt="" />
      <p>合併檔案中...</p>
    </SLoading>
  );

  const confirmJSX = (
    <SConfirm>
      <img src={finishLogo} alt="" />
      <h5>檔案已完成</h5>
      <p>完成後畫面自動跳轉，如無跳轉頁面請按確定按鈕。</p>
    </SConfirm>
  );

  const contentFactory = (variant) => {
    switch (variant) {
      case 'sign':
        return signJSX;
      case 'img':
        return imgJSX;
      case 'text':
        return textJSX;
      case 'warn':
        return warnJSX;
      case 'load':
        return loadingJSX;
      case 'confirm':
        return confirmJSX;
      default:
        return signJSX;
    }
  };

  return (
    <SModalContent>
      {contentFactory(variant)}
      <SModalOptions>
        {optionArr.map((opt, index) => (
          <Button
            key={index}
            variant="outlined"
            onClick={() => handleClickOption(opt.action)}
          >
            {opt.title}
          </Button>
        ))}
      </SModalOptions>
    </SModalContent>
  );
};

export default ModalContent;
