//Styled Components
import { SFolder } from './Folder.styles';

//React Components
import Divider from '../UI/Divider/Divider';
import SearchBar from './FolderSearch';
import FileList from './FileList';

/*
Notes:
Searbar 在 沒有 file 的情況下：display: none
*/

const Folder = () => {
  return (
    <SFolder>
      <header>
        <h5>我的文件</h5>
        <SearchBar />
      </header>
      <Divider />
      <FileList />
    </SFolder>
  );
};

export default Folder;
