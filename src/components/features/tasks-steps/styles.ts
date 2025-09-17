import { Card, Flex } from "antd";
import styled from "styled-components";

export const StyledNextButton = styled(Flex)`
  cursor: pointer;
  background: #f8d7b7;
  color: white;
  padding: 12px 24px;
  border-radius: 24px;
  gap: 12px;
  width: inherit;
`;

export const StyledPromptCard = styled(Card)`
  min-width: 200;
  max-width: 300;
  font-size: 13;
`;
