import styled from "styled-components";

export const PopupElement = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 120;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const PopupContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  max-width: 100%;
  min-height: 500px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 576px) {
    max-width: 800px;
  }
`;
