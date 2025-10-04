import styled from "styled-components";

export const StyledLayout = styled.div`
  padding: 16px;
  box-sizing: border-box;
  height: calc(100vh - 110px);
  overflow: auto;

  @media (min-width: 768px) {
    padding: 24px 122px;
  }

  @media (min-width: 1024px) {
    padding: 32px 144px;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export const StyledTaskLayout = styled.div`
  padding: 16px;
  box-sizing: border-box;
  height: 100vh;
  overflow: auto;

  @media (min-width: 768px) {
    padding: 24px 122px;
  }

  @media (min-width: 1024px) {
    padding: 32px 144px;
    max-width: 1200px;
    margin: 0 auto;
  }
`;
