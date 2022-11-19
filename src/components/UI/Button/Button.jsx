import { SButton, OutlinedButton, PrimaryButton } from './Button.styles';

const Button = ({ children, variant, disabled, width, onClick }) => {
  switch (variant) {
    case 'none':
      return (
        <SButton width={width} onClick={onClick}>
          {children}
        </SButton>
      );
    case 'outlined':
      return <OutlinedButton onClick={onClick}>{children}</OutlinedButton>;
    default:
      return (
        <PrimaryButton disabled={disabled} onClick={onClick}>
          {children}
        </PrimaryButton>
      );
  }
};

export default Button;
