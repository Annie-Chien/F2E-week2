//Images
import searchIcon from '../../assets/icon/ic_search.svg';
//Styled Components
import { SSearchBar, SSearchInput } from './FolderSearch.styles';

const SearchBar = () => {
  return (
    <SSearchBar>
      <label htmlFor="keyword">
        <img src={searchIcon} alt="" />
      </label>
      <SSearchInput type="text" placeholder="請輸入關鍵字" id="keyword" />
    </SSearchBar>
  );
};

export default SearchBar;
