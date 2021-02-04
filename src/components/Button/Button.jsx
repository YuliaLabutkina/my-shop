import { RedButton } from './Button.style';

const Button = ({ text, ...props }) => {
  return <RedButton {...props}>{text}</RedButton>;
};

export default Button;
