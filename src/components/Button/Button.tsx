import styled from 'styled-components';

type ButtonProps = {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  overrideStyles?: any;
};

type StyledButtonProps = {
  style?: any;
};

const StyledButton = styled('button')<StyledButtonProps>`
  background-color: #8764d0;
  padding: 20px 32px;
  border-radius: 5px;
  color: #fff;
  border: none;
  margin-top: 40px;
  font-size: 20px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
`;

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <StyledButton
      disabled={props.disabled}
      onClick={props.onClick}
      style={props.overrideStyles}
    >
      {props.text}
    </StyledButton>
  );
};
