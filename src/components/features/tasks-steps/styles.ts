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
  min-width: 200px;
  max-width: 300px;
  font-size: 13px;
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
