import styled from "styled-components";

export const StyledMainPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 84px;
  height: 100%;

  @media (max-width: 430px) {
    gap: 48px;
    justify-content: space-around;
  }
`;

export const StyledProgressStep = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 78px;
  height: 78px;
  font-size: 24px;
  border-radius: 50%;
  opacity: 0.6;

  @media (max-width: 430px) {
    width: 60px;
    height: 60px;
  }
`;

export const StyledProgressInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: -70px;
  z-index: 1;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 430px) {
    margin-top: -100px;
  }
`;
