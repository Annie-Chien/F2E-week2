import Button from '../Button/Button';
import ModalContent from '../../ModalContent/ModalContent';
import Divider from '../Divider/Divider';
import { SFolderHeader } from './FolderHeader.styles';
import Modal from '../Modal/Modal';
//React Router
import { Link, useNavigate } from 'react-router-dom';
//context
import { useUIContext } from '../../../context/UIContext';
//Images
import downloadIcon from '../../../assets/icon/ic_download.svg';
import archiveIcon from '../../../assets/icon/ic_archive.svg';
import trashIcon from '../../../assets/icon/ic_trash.svg';
import downloadIcon_h from '../../../assets/icon/ic_download_h.svg';
import archiveIcon_h from '../../../assets/icon/ic_archive_h.svg';
import trashIcon_h from '../../../assets/icon/ic_trash_h.svg';
import Icon from '../../Icon/Icon';
//Notes: buttonList 只是陽春版，之後開始實作功能時，要重新建構新的資料結構（加入 clickHandler）
// const finishPageBtns = [downloadIcon, archiveIcon, trashIcon];
const finishPageBtns = [
  { img: downloadIcon, action: 'download', imgOnHover: downloadIcon_h },
  { img: archiveIcon, action: 'archive', imgOnHover: archiveIcon_h },
  { img: trashIcon, action: 'trash', imgOnHover: trashIcon_h },
];
const FolderHeader = ({
  data,
  handleClickNextPage,
  clickNextPage,
  isLoading,
  isConfirm,
  finalizePdf,
  downloadPdf,
  setIsLoading,
  nextStepAvailable,
}) => {
  const { title, step, pathArr } = data;
  const [prevPath, nextPath] = pathArr;
  const { isOpen, openModal } = useUIContext();
  const navigate = useNavigate();
  const finishBtns = finishPageBtns.map((btn, index) => (
    <Button
      variant="none"
      key={index}
      onClick={() => finishBtnsHanlder(btn.action)}
    >
      <Icon src={btn.img} alt="" srcOnHover={btn.imgOnHover} />
    </Button>
  ));

  const finishBtnsHanlder = (action) => {
    switch (action) {
      case 'download':
        downloadPdf();
        break;
      case 'trash':
        navigate('/');
      default:
        return;
    }
  };

  const handleNextStep = (step) => {
    if (step === 'edit') {
      openModal();
      handleClickNextPage();
    } else {
      console.log(nextStepAvailable);
      nextStepAvailable && navigate(nextPath);
    }
  };

  const modalFactory = () => {
    if (isOpen && clickNextPage) {
      if (isLoading) {
        return (
          <Modal title="創建檔案">
            <ModalContent
              setIsLoading={setIsLoading}
              variant="load"
              optionArr={[{ title: '取消', action: 'cancel' }]}
            />
          </Modal>
        );
      }
      if (isConfirm) {
        return (
          <Modal title="創建檔案">
            <ModalContent
              variant="confirm"
              optionArr={[{ title: '確定', action: 'goFinish' }]}
            />
          </Modal>
        );
      }
      return (
        <Modal title="創建檔案">
          <ModalContent
            finalizePdf={finalizePdf}
            variant="warn"
            optionArr={[
              { title: '等一下', action: 'close' },
              { title: '確定', action: 'done' },
            ]}
          />
        </Modal>
      );
    }
  };

  return (
    <>
      {modalFactory()}
      <SFolderHeader>
        <Link to={prevPath}>
          <Button variant="none">
            &larr; <span>上一步</span>
          </Button>
        </Link>
        <h3>{title}</h3>
        <div>
          {step === 'finish' ? (
            finishBtns
          ) : (
            <Button onClick={() => handleNextStep(step)}>下一步 &rarr;</Button>
          )}
        </div>
      </SFolderHeader>
      <Divider />
    </>
  );
};

export default FolderHeader;
