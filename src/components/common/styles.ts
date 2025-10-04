import styled from "styled-components";

export const StyledBottomBar = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  border-top: 1px solid #d3d3d3;
  background: white;
`;

export const StyledBottomBarButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  cursor: pointer;
  gap: 4px;
  padding: 12px;
`;
