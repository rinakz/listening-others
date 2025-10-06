import { Flex, Typography } from "antd";
import { useState } from "react";
import { FEELINGS_TAGS } from "./constants";
import { RightOutlined } from "@ant-design/icons";
import type { StepTypeProps } from "./types";
import { StyledEmotionCard, StyledNextButton } from "./styles";

export const FirstStep = ({ nextButtonClick }: StepTypeProps) => {
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
        <Typography.Title style={{ fontSize: "28px", color: "#8bc4d1" }}>
          Какие чувства <br />
          ты испытал сегодня?
        </Typography.Title>
      </div>

      <Flex justify="center" wrap gap={12}>
        {FEELINGS_TAGS.map((feel, idx) => (
          <StyledEmotionCard
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
            }}
          >
            <Flex justify="center">
              <h3>{feel.title}</h3>
            </Flex>
          </StyledEmotionCard>
        ))}
      </Flex>
      <Flex
        style={{ width: "inherit", display: "flex", justifyContent: "end" }}
      >
        <StyledNextButton
          onClick={() => nextButtonClick(2, selectFeels)}
          justify="end"
        >
          ДАЛЕЕ
          <RightOutlined />
        </StyledNextButton>
      </Flex>
    </Flex>
  );
};
