import { Card, Flex } from "antd";
import styled from "styled-components";

export const StyledNextButton = styled(Flex)`
  cursor: pointer;
  display: flex;
  background: #f8d7b7;
  color: white;
  padding: 12px 24px;
  border-radius: 12px;
  gap: 12px;
`;

export const StyledPromptCard = styled(Card)`
  max-width: 80%;

  .ant-card-body {
    display: flex;
    flex-direction: column;
    font-size: 13px;
    height: 100%;
  }
`;

export const StyledEmotionCard = styled(Card)`
  width: 180px;
  cursor: pointer;

  @media (max-width: 400px) {
    & > div {
      padding: 10px !important;
    }
    width: 150px;
  }
`;

export const StyledCard = styled(Card)`
  background: #faeee0;
  .ant-card-body {
    padding: 12px !important;
  }
`;
