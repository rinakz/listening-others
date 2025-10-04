import styled from "styled-components";

export const StyledBodyContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 300px;
  @media (max-width: 768px) {
    align-items: start;
  }
`;

export const StyledDoneContainer = styled.div`
  display: flex;
  gap: 8px;
  color: #bfd9cd;

  @media (max-width: 768px) {
    align-items: start;
  }
`;

export const StyledInProgressContainer = styled.div`
  display: flex;
  white-space: nowrap;
  gap: 8px;
  color: #f8d7b7;

  @media (max-width: 768px) {
    align-items: start;
  }
`;

export const StyledInProcessContainer = styled.div`
  display: flex;
  gap: 8px;
  color: #d3d3d3;

  @media (max-width: 768px) {
    align-items: start;
  }
`;
