import { Flex, Typography } from "antd";
import { StyledNextButton } from "./styles";
import type { StepTypeProps } from "./types";
import { ArrowLeftOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

export const SeventhStep = ({ nextButtonClick }: StepTypeProps) => {
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
        vertical
        justify="center"
        align="center"
        gap={24}
      >
        <img src="/fox2.png" style={{ width: 180, height: 215 }} />
        <Typography style={{ color: "#8bc4d1", fontSize: "14px" }}>
          <b>
            {" "}
            Каждый день фиксируй один эмпатичный поступок — свой или замеченный.
          </b>
          <br />
          Это может быть простая помощь коллеге или поддержка друга. Например:
          <br />
          <em>
            ❝ Сегодня я выслушал коллегу, который переживал из-за проекта ❞
          </em>
          <br />
          Эта практика развивает осознанность и создает теплую атмосферу вокруг.
        </Typography>

        <TextArea rows={4} />
      </Flex>
      <Flex
        style={{
          width: "inherit",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <StyledNextButton onClick={() => nextButtonClick(6)} justify="end">
          <ArrowLeftOutlined />
          НАЗАД
        </StyledNextButton>
        <StyledNextButton onClick={() => nextButtonClick(8)} justify="end">
          ЗАВЕРШИТЬ
        </StyledNextButton>
      </Flex>
    </Flex>
  );
};
