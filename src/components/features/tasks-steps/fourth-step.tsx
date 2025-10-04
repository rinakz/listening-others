import { Flex, Tag, Typography } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import type { StepTypeProps } from "./types";
import { StyledNextButton } from "./styles";
import { SITUATIONS } from "./constants";
import { EMPATHY_TASKS_TITLES } from "../tasks-story/constants";

type ThirdStepProps = {
  day: number;
};

export const FourthStep = ({
  nextButtonClick,
  day,
}: StepTypeProps & ThirdStepProps) => {
  return (
    <Flex
      style={{ height: "100%", width: "inherit" }}
      vertical
      align="center"
      justify="space-between"
      gap={24}
    >
      <Flex
        style={{ width: "inherit", height: "100%" }}
        align="end"
        vertical
        justify="center"
        gap={24}
      >
        <Tag color="#bfd9cd" bordered>
          +2 балла к {EMPATHY_TASKS_TITLES[day]}
        </Tag>
        <div style={{ textAlign: "center" }}>
          <Flex justify="center" wrap gap={12}>
            <Typography style={{ fontSize: 16, whiteSpace: "break-spaces" }}>
              {SITUATIONS[Number(day) - 1]}
            </Typography>
          </Flex>
        </div>
      </Flex>
      <Flex
        style={{
          width: "inherit",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <StyledNextButton onClick={() => nextButtonClick(3)} justify="end">
          <LeftOutlined /> НАЗАД
        </StyledNextButton>
        <StyledNextButton onClick={() => nextButtonClick(5)} justify="end">
          ДАЛЕЕ
          <RightOutlined />
        </StyledNextButton>
      </Flex>
    </Flex>
  );
};
