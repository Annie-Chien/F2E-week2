// Styled Components
import {
  SOverlay,
  SModal,
  SModalHeader,
  SModalContentContainer,
} from './Modal.styles';
import Divider from '../Divider/Divider';

const Modal = ({ title, children }) => {
  return (
    <SOverlay>
      <SModal>
        <SModalHeader>
          <h5>{title}</h5>
        </SModalHeader>
        <Divider />
        <SModalContentContainer>{children}</SModalContentContainer>
      </SModal>
    </SOverlay>
  );
};

export default Modal;
