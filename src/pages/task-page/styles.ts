import { Progress } from "antd";
import styled from "styled-components";

export const StyledProgress = styled(Progress)`
  width: 100%;
  .ant-progress-steps-outer {
    width: 100%;
    justify-content: space-between;
  }
  .ant-progress-steps-item {
    flex: 1;
    border-radius: 8px;
  }
`;
