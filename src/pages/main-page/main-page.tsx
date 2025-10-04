import { Progress, Typography, type ProgressProps } from "antd";
import { LayoutPage } from "../../layouts/layout-page";
import {
  CheckOutlined,
  FieldTimeOutlined,
  LockOutlined,
} from "@ant-design/icons";
import {
  StyledMainPage,
  StyledProgressInfo,
  StyledProgressStep,
} from "./styles";

const conicColors: ProgressProps["strokeColor"] = {
  "0%": "#8bc4d1",
  "100%": "#f8d7b7",
};

const PROGRESS_STEP = [
  "Начало",
  "Внимание",
  "Чуткость",
  "Рефлексия",
  "Сострадание",
  "Завершение",
];

export const MainPage = () => {
  const startDate = localStorage.getItem("startDate") ?? "";

  const currentDate = new Date();
  const date = new Date(startDate ?? "");
  const differenceInTime: number = currentDate.getTime() - date.getTime();
  const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));
  const percent = Number(((differenceInDays / 30) * 7).toFixed());

  return (
    <LayoutPage>
      <StyledMainPage>
        <Typography.Title style={{ color: " #8bc4d1" }}>
          Твой путь эмпатии
        </Typography.Title>
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <Progress
            type="line"
            strokeColor={conicColors}
            showInfo={false}
            percent={100}
          />
          <StyledProgressInfo>
            {PROGRESS_STEP.map((el, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <StyledProgressStep
                  style={{
                    background:
                      percent > idx + 1
                        ? "#bfd9cd"
                        : percent === idx + 1
                        ? "#f8d7b7"
                        : "#d3d3d3",
                  }}
                >
                  {percent > idx + 1 && <CheckOutlined />}
                  {percent === idx + 1 && <FieldTimeOutlined />}
                  {percent < idx + 1 && <LockOutlined />}
                </StyledProgressStep>
                <span>{el}</span>
              </div>
            ))}
          </StyledProgressInfo>
        </div>
        <div>
          <Typography.Paragraph style={{ fontSize: "18px" }}>
            <b>
              «Каждый шаг - это маленькая победа на пути к большой чуткости».
            </b>
          </Typography.Paragraph>
          <Typography.Paragraph style={{ fontSize: "18px" }}>
            Выполняй задания каждый день, чтобы развивать эмпатию и стать ближе
            к себе и другим.
          </Typography.Paragraph>
        </div>
      </StyledMainPage>
    </LayoutPage>
  );
};
