import Button from '../UI/Button/Button';
// Images
import fileItemIcon from '../../assets/icon/ic_file_item.svg';
import downloadIcon from '../../assets/icon/ic_download.svg';
import archiveIcon from '../../assets/icon/ic_archive.svg';
import trashIcon from '../../assets/icon/ic_trash.svg';
//Styled Components
import { SFileItem, SFileDate, SFileName, SFileBtns } from './FileItem.styles';

const FileItem = ({ isGrid }) => {
  return (
    <SFileItem isGrid={isGrid}>
      <img src={fileItemIcon} alt="" />
      <SFileDate>2022-11-07 12:34:56</SFileDate>
      <SFileName>合約finalfinalfinal</SFileName>
      <SFileBtns>
        <Button variant="none" width="3">
          <img src={downloadIcon} alt="" />
        </Button>
        <Button variant="none" width="3">
          <img src={archiveIcon} alt="" />
        </Button>
        <Button variant="none" width="3">
          <img src={trashIcon} alt="" />
        </Button>
      </SFileBtns>
    </SFileItem>
  );
};

export default FileItem;
