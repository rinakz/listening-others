import { Flex, Typography } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import type { StepTypeProps } from "./types";
import { StyledNextButton } from "./styles";
import { EMPATHY_SKILLS } from "./constants";

export const ThirdStep = ({ nextButtonClick, day }: StepTypeProps) => {
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
        align="center"
        justify="space-between"
        vertical
        gap={24}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", whiteSpace: "break-spaces"  }}>
          <Typography.Title
            style={{ fontSize: 28, color: "#8bc4d1", textAlign: "center" }}
          >
            {EMPATHY_SKILLS[Number(day) - 1].title}
          </Typography.Title>
          <Typography.Text style={{ color: "#8bc4d1", fontSize: "16px" }}>
            — {EMPATHY_SKILLS[Number(day) - 1].definition}
          </Typography.Text>
          <Typography.Title
            style={{ fontSize: 28, color: "#8bc4d1", textAlign: "center" }}
          >
            Например:
          </Typography.Title>
          <Typography.Text style={{ color: "#8bc4d1", fontSize: "16px" }}>
            {EMPATHY_SKILLS[Number(day) - 1].example}
          </Typography.Text>
        </div>
      </Flex>
      <Flex
        style={{
          width: "inherit",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <StyledNextButton onClick={() => nextButtonClick(2)} justify="end">
          <LeftOutlined /> НАЗАД
        </StyledNextButton>
        <StyledNextButton onClick={() => nextButtonClick(4)} justify="end">
          ДАЛЕЕ
          <RightOutlined />
        </StyledNextButton>
      </Flex>
    </Flex>
  );
};
