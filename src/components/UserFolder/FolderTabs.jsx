import { useState } from 'react';
// Images
import fileIcon from '../../assets/icon/ic_file_h.svg';
import archiveIcon from '../../assets/icon/ic_archive_h.svg';
import trashIcon from '../../assets/icon/ic_trash_h.svg';
//Styled Components
import { TabList, Tab } from './FolderTabs.styles';
const tabs = [
  { title: '我的文件', img: fileIcon },
  { title: '已封存的文件', img: archiveIcon },
  { title: '垃圾桶', img: trashIcon },
];

const FolderTabs = () => {
  const [curTab, setCurTab] = useState(0);
  return (
    <TabList>
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          active={index === curTab}
          onClick={() => setCurTab(index)}
        >
          <img src={tab.img} alt="" />
        </Tab>
      ))}
    </TabList>
  );
};

export default FolderTabs;
