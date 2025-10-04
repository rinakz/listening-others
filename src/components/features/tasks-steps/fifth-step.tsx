import { Card, Flex, Typography } from "antd";
import { StyledNextButton } from "./styles";
import { TASKS } from "./constants";
import type { StepTypeProps } from "./types";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

export const FifthStep = ({ nextButtonClick, day }: StepTypeProps) => {
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
        <img src="/fox.png" style={{ width: 200, height: 213 }} />
        <Typography style={{ color: "#8bc4d1", fontSize: "14px" }}>
          <em>
            Это задание поможет тебе осознанно развивать способность видеть мир
            глазами других, что является фундаментом эмпатии
          </em>
        </Typography>

        <div style={{ textAlign: "center" }}>
          <Card style={{ background: "#faeee0" }}>
            <Typography style={{ fontSize: 16, whiteSpace: "break-spaces" }}>
              {TASKS[Number(day) - 1] ?? (
                <a href="https://psytests.org/boyko/boemp.html">
                  Пройдите тест
                </a>
              )}
            </Typography>
          </Card>
        </div>
      </Flex>
      <Flex
        style={{
          width: "inherit",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <StyledNextButton onClick={() => nextButtonClick(4)} justify="end">
          <LeftOutlined /> НАЗАД
        </StyledNextButton>
        <StyledNextButton onClick={() => nextButtonClick(6)} justify="end">
          {Number(day) < 15 ? (
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
