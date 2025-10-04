import { Flex, Typography } from "antd";
import { StyledNextButton } from "./styles";
import type { StepTypeProps } from "./types";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

export const SixthStep = ({ nextButtonClick, day }: StepTypeProps) => {
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
        <img src="/fox3.png" style={{ width: 150, height: 173 }} />
        <Typography style={{ color: "#8bc4d1", fontSize: "14px" }}>
          <b>
            За что можно быть благодарным другим людям за их проявление эмпатии.
          </b>
          <br />
          Например:
          <br />
          <em>
            ❝ Я благодарен официанту за то что он так внимательно слушал мой
            заказ ❞
          </em>
          <br />
          <em>
            ❝ Я благодарен человеку в очереди за то что он уступил мне дорогу ❞
          </em>
          <br />
          Это помогает замечать проявление эмпатии в окружающем мире.
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
        <StyledNextButton onClick={() => nextButtonClick(5)} justify="end">
          <LeftOutlined /> НАЗАД
        </StyledNextButton>
        <StyledNextButton onClick={() => nextButtonClick(7)} justify="end">
          {Number(day) < 21 ? (
            "ЗАВЕРШИТЬ"
          ) : (
            <>
              <RightOutlined />
              ДАЛЕЕ
            </>
          )}
        </StyledNextButton>
      </Flex>
    </Flex>
  );
};
