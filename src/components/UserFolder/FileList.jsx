import {
  FileListContainer,
  SFileListHeader,
  BtnsContainer,
  SFileList,
} from './FileList.styles';
import { CenterContainer } from '../../utils/container.styles';
//React Components
import Button from '../UI/Button/Button';
import FileItem from './FileItem';
//Images
import listIcon from '../../assets/icon/ic_list.svg';
import cardIcon from '../../assets/icon/ic_card.svg';
import addIcon from '../../assets/icon/ic_add_dark.svg';
//React Router
import { Link } from 'react-router-dom';
const files = [];

const FileList = () => {
  if (files.length === 0) {
    return (
      <CenterContainer>
        <Link to="upload">
          <img src={addIcon} alt="" />
        </Link>
        <h2>快來建立新檔吧</h2>
      </CenterContainer>
    );
  }
  return (
    <FileListContainer>
      <SFileListHeader>
        <span>建立時間</span>
        <span>專案名稱</span>
        <BtnsContainer>
          <Button variant="none">
            <img src={listIcon} alt="" />
          </Button>
          <Button variant="none">
            <img src={cardIcon} alt="" />
          </Button>
        </BtnsContainer>
      </SFileListHeader>
      <SFileList isGrid={false}>
        {files.map((f, i) => (
          <FileItem key={i} isGrid={false} />
        ))}
      </SFileList>
    </FileListContainer>
  );
};

export default FileList;
