

import { Flex } from "antd";
import {
  RightOutlined,
  HistoryOutlined,
  HeartOutlined,
  SmileOutlined,
  MessageOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import type { StepTypeProps } from "./types";
import { StyledNextButton, StyledPromptCard } from "./styles";

export const FourthStep = ({ nextButtonClick }: StepTypeProps) => {
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
        vertical
        gap={24}
      >
        <Flex style={{ height: "100%" }} wrap justify="center" gap={12}>
          <StyledPromptCard
            size="small"
            style={{
              background: "#fcecd9",
            }}
          >
            <div>
              <HistoryOutlined /> <b>Остановитесь и подумайте:</b>
            </div>
            <Flex align="center" flex={1} style={{ fontSize: "12px" }}>
              Когда сталкиваетесь с подобной ситуацией, не спешите делать
              выводы.
            </Flex>
          </StyledPromptCard>
          <StyledPromptCard
            size="small"
            style={{
              background: "#c9e2e9",
            }}
          >
            <div>
              <HeartOutlined /> <b>Поставьте себя на место другого человека:</b>
            </div>
            <Flex align="center" flex={1} style={{ fontSize: "12px" }}>
              Попробуйте представить, что он чувствует и почему он мог поступить
              именно так.
            </Flex>
          </StyledPromptCard>
          <StyledPromptCard
            size="small"
            style={{
              background: "#eaf2ff",
            }}
          >
            <div>
              <SmileOutlined /> <b>Рассмотрите альтернативные объяснения:</b>
            </div>
            <Flex align="center" flex={1} style={{ fontSize: "12px" }}>
              Не зацикливайтесь на негативных интерпретациях.
            </Flex>
          </StyledPromptCard>
          <StyledPromptCard
            size="small"
            style={{
              background: "#f7c7a7",
            }}
          >
            <div>
              <MessageOutlined /> <b>Проиграйте в голове диалог:</b>{" "}
            </div>
            <Flex align="center" flex={1} style={{ fontSize: "12px" }}>
              Представьте, как бы вы объяснили ситуацию другому человеку, и
              какие чувства он мог бы испытать.
            </Flex>
          </StyledPromptCard>
        </Flex>
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

