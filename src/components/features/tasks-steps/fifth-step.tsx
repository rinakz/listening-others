import { Card, Flex, Typography } from "antd";
import { StyledNextButton } from "./styles";
import { TASKS } from "./constants";

type FifthStepProps = {
  day: number;
  sendQuestions: () => void;
};

export const FifthStep = ({ sendQuestions, day }: FifthStepProps) => {
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
        gap={24}
      >
        <Typography style={{ color: "#8bc4d1", fontSize: "18px" }}>
          Это задание поможет вам осознанно развивать способность видеть мир
          глазами других, что является фундаментом эмпатии
        </Typography>

        <div style={{ textAlign: "center" }}>
          <Card style={{ background: "#faeee0" }}>
            <Typography style={{ fontSize: 18 }}>
              {TASKS[Number(day) - 1] ?? (
                <a href="https://psytests.org/boyko/boemp.html">
                  Пройдите тест
                </a>
              )}
            </Typography>
          </Card>
        </div>
      </Flex>
      <Flex style={{ width: "inherit" }}>
        <StyledNextButton onClick={sendQuestions} justify="end">
          ЗАВЕРШИТЬ
        </StyledNextButton>
      </Flex>
    </Flex>
  );
};
