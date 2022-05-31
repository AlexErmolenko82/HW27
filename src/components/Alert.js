import styled from "styled-components";
import PropTypes from "prop-types";

const StyledAlert = styled.div`
  line-height: 64px;
  width: 1440px;
  height: 64px;
  background-color: ${(props) =>
    props.color === "primary"
      ? "#605dec"
      : props.color === "warning"
      ? "#FFD12F"
      : "#EB5757"};

  color: ${(props) => (props.color === "warning" ? "#1513A0" : "#f6f6fe")};
  font-family: "Nunito Sans", sans-serif;
  font-size: 18px;
  font-weight: 600;
  font-style: normal;
  text-align: center;
`;

const StyledCloseButton = styled.button`
  border: none;
  position: relative;
  left: 1170px;
  top: 2px;
  width: 16px;
  height: 16px;
  background: url('data:image/svg+xml,\
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\
<path d="M4.58602 6L0.343378 1.75736C-0.0471466 1.36684 -0.0471467 0.73367 0.343378 0.343146C0.733902 -0.0473788 1.36707 -0.0473785 1.75759 0.343146L6.00023 4.58579L10.2429 0.343146C10.6334 -0.0473788 11.2666 -0.0473784 11.6571 0.343146C12.0476 0.73367 12.0476 1.36683 11.6571 1.75736L7.41444 6L11.6571 10.2426C12.0476 10.6332 12.0476 11.2663 11.6571 11.6569C11.2666 12.0474 10.6334 12.0474 10.2429 11.6569L6.00023 7.41421L1.75759 11.6569C1.36707 12.0474 0.733902 12.0474 0.343377 11.6569C-0.0471473 11.2663 -0.047147 10.6332 0.343377 10.2426L4.58602 6Z" fill="%23F6F6FE"/>\
</svg>')
    no-repeat center center;

  &:hover {
    background-image: url('data:image/svg+xml,\
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\
<path d="M4.58602 6L0.343378 1.75736C-0.0471466 1.36684 -0.0471467 0.73367 0.343378 0.343146C0.733902 -0.0473788 1.36707 -0.0473785 1.75759 0.343146L6.00023 4.58579L10.2429 0.343146C10.6334 -0.0473788 11.2666 -0.0473784 11.6571 0.343146C12.0476 0.73367 12.0476 1.36683 11.6571 1.75736L7.41444 6L11.6571 10.2426C12.0476 10.6332 12.0476 11.2663 11.6571 11.6569C11.2666 12.0474 10.6334 12.0474 10.2429 11.6569L6.00023 7.41421L1.75759 11.6569C1.36707 12.0474 0.733902 12.0474 0.343377 11.6569C-0.0471473 11.2663 -0.047147 10.6332 0.343377 10.2426L4.58602 6Z" fill="red"/>\
</svg>');
  }
`;

const Alert = ({ children, color, onClose }) => {
  return (
    <StyledAlert color={color}>
      <StyledCloseButton onClick={onClose}></StyledCloseButton>
      {children}
    </StyledAlert>
  );
};

Alert.propTypes = {
  color: PropTypes.oneOf(["primary", "error", "warning"]).isRequired,
  onClose: PropTypes.func.isRequired,
};

Alert.defaultProps = {
  color: "primary",
};

export default Alert;
