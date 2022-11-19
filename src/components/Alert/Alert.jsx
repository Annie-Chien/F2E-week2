//Styled Components
import { SAlert } from './Alert.styles';
//React Components
import Button from '../UI/Button/Button';
//Images
import closeIcon from '../../assets/icon/ic_close_s_h.svg';

const Alert = ({ alertMsg }) => {
  return (
    <SAlert type={alertMsg.type}>
      <p>{alertMsg.text}</p>
      <Button variant="none">
        <img src={closeIcon} />
      </Button>
    </SAlert>
  );
};

//for testing
Alert.defaultProps = {
  alertMsg: {
    type: 'danger',
    text: '檔案大小超過 20MB',
  },
};

export default Alert;
