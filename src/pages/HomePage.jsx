//Styled Components
import { Container } from '../utils/container.styles';
//Images
import addIcon from '../assets/icon/ic_add_tint.svg';
//React Component
import Folder from '../components/UserFolder/Folder';
import FolderTabs from '../components/UserFolder/FolderTabs';
import Button from '../components/UI/Button/Button';
//在我的文件中文件數量大於0時才會出現右邊加入按鈕
const HomePage = () => {
  return (
    <Container>
      <Folder />
      <FolderTabs />
      {/* <Button variant="none" width="6">
        <img src={addIcon} alt="" />
      </Button> */}
    </Container>
  );
};

export default HomePage;
