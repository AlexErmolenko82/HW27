import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  padding: ${(props) => (props.size === "small" ? "8px 16px" : "12px 20px")};
  margin: 20px;
  background: ${(props) => (props.color === "primary" ? "#605dec" : "#f6f6fe")};
  border: ${(props) =>
    props.color === "primary" ? "none" : "1px solid #605dec"};
  border-radius: 4px;
  color: ${(props) => (props.color === "primary" ? "#fafafa" : "#605dec")};
  font-family: "Nunito Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => (props.size === "large" ? "18px" : "16px")};
  line-height: 25px;
  &:hover {
    &:not([disabled]) {
      background: ${(props) =>
        props.color === "primary" ? "#1513a0" : "#e9e8fc"};
    }
  }
  &: disabled {
    background: ${(props) =>
      props.color === "primary" ? "#cbd4e6" : "#f6f6fe"};
    border: ${(props) =>
      props.color === "primary" ? "1px solid #7c8db0" : "1px solid #7c8db0"};
    color: #7c8db0;
  }
`;

const Button = ({ children, color, disabled, size }) => {
  return (
    <StyledButton color={color} disabled={disabled} size={size}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary"]),
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["large", "small", "medium"]),
};

Button.defaultProps = {
  size: "medium",
  disabled: false,
  color: "primary",
};

export default Button;
