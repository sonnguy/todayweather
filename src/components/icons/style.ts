import { styled } from "styled-components";
import iconImage from'../../assets/icons/icons.png';

const StyledIcon = styled.span<{
  name?: string;
  size?: number;
  x?: number;
  y?: number;
}>`
  display: inline-block;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-image: url(${iconImage});
  background-repeat: no-repeat;
  background-position: ${(props) => `-${props.x}px -${props.y}px`};
`;

export { StyledIcon };
