import { Card } from "antd";
import { EMPATHY_TASKS_TITLES, options, ruLocale, TODAY } from "./constants";
import { CheckOutlined, LockOutlined, LoginOutlined } from "@ant-design/icons";
import {
  StyledBodyContent,
  StyledDoneContainer,
  StyledInProcessContainer,
  StyledInProgressContainer,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

type TasksStoryProps = {
  startDate: string;
};

export const TasksStory = ({ startDate }: TasksStoryProps) => {
  const navigate = useNavigate();
  const myRef = useRef<HTMLDivElement | null>(null);

  const scrollToElement = () => {
    if (myRef.current) {
      myRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    scrollToElement();
  }, []);

  const formattedDate = Array.from({ length: 30 }, (_, index) => {
    const currentDate: Date = new Date(startDate ?? "");
    currentDate.setDate(currentDate.getDate() + index);
    return currentDate;
  });

  return (
    <Card style={{ overflow: "auto", height: "100%" }}>
      <StyledBodyContent>
        {formattedDate.map((day, idx) => (
          <div
            onClick={() => navigate(`${idx + 1}`)}
            style={{
              display: "flex",
              justifyContent: "space-between",
              color:
                day <= TODAY ||
                day.toLocaleDateString() === TODAY.toLocaleDateString()
                  ? "black"
                  : "#D3D3D3",
              width: "100%",
              pointerEvents:
                day.toLocaleDateString() === TODAY.toLocaleDateString()
                  ? "auto"
                  : "none",
            }}
            key={idx}
          >
            <div>
              {day.toLocaleDateString(ruLocale, options)} —{" "}
              {EMPATHY_TASKS_TITLES[idx + 1]}
            </div>
            {day < TODAY ? (
              <StyledDoneContainer>
                {day.toLocaleDateString() == TODAY.toLocaleDateString() ? (
                  <StyledInProgressContainer ref={myRef}>
                    <LoginOutlined /> К заданию
                  </StyledInProgressContainer>
                ) : (
                  <>
                    <CheckOutlined />
                    Выполнено {day.toLocaleDateString()}{" "}
                  </>
                )}
              </StyledDoneContainer>
            ) : day.toLocaleDateString() == TODAY.toLocaleDateString() ? (
              <StyledInProgressContainer ref={myRef}>
                <LoginOutlined /> К заданию
              </StyledInProgressContainer>
            ) : (
              <StyledInProcessContainer>
                <LockOutlined /> Ожидает
              </StyledInProcessContainer>
            )}
          </div>
        ))}
      </StyledBodyContent>
    </Card>
  );
};
