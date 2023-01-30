import styled from "styled-components";
import { colorSecondary } from "../globalElements";

export const LoadingElement = styled.div`
  color: ${({ color }) => (color ? color : colorSecondary)};
  display: inline-block;
  width: 200px;
  height: 200px;
  vertical-align: -0.125em;
  border: 0.25em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  -webkit-animation: 0.75s linear infinite spinner-border;
  animation: 0.75s linear infinite spinner-border;
  margin: auto;
  @keyframes spinner-border {
    to {
      transform: rotate(360deg) /* rtl:ignore */;
    }
  }
`;
