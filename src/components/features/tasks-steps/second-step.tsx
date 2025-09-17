import { Card, Flex, Typography } from "antd";
import { useState } from "react";
import { FEELINGS_TAGS } from "./constants";
import { RightOutlined } from "@ant-design/icons";
import type { StepTypeProps } from "./types";
import { StyledNextButton } from "./styles";

export const SecondStep = ({ nextButtonClick }: StepTypeProps) => {
  const [selectFeels, setSelectFeels] = useState<string[]>([]);
  return (
    <Flex
      style={{ height: "100%", width: "inherit" }}
      vertical
      justify="space-between"
      align="center"
      gap={48}
    >
      <div style={{ textAlign: "center" }}>
        <Typography style={{ fontSize: "32px", color: "#8bc4d1" }}>
          Какие чувства <br />
          испытал твой партнер сегодня?
        </Typography>
      </div>

      <Flex justify="center" wrap gap={12}>
        {FEELINGS_TAGS.map((feel, idx) => (
          <Card
            onClick={() => {
              if (selectFeels.includes(feel.title)) {
                setSelectFeels((prev) =>
                  prev.filter((el) => el !== feel.title)
                );
              } else {
                setSelectFeels((prev) => [...prev, feel.title]);
              }
            }}
            key={idx}
            style={{
              background: selectFeels.includes(feel.title)
                ? feel.activeColor
                : feel.color,
              color: "white",
              border: selectFeels.includes(feel.title)
                ? `1px solid ${feel.activeBorderColor}`
                : "none",
              width: 180,
              cursor: "pointer",
            }}
          >
            <Flex justify="center">
              <h3>{feel.title}</h3>
            </Flex>
          </Card>
        ))}
      </Flex>
      <Flex style={{ width: "inherit" }}>
        <StyledNextButton
          onClick={() => nextButtonClick(3, selectFeels)}
          justify="end"
        >
          ДАЛЕЕ
          <RightOutlined />
        </StyledNextButton>
      </Flex>
    </Flex>
  );
};
