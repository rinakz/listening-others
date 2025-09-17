import { Card } from "antd";
import { EMPATHY_TASKS_TITLES, options, ruLocale, TODAY } from "./constants";
import { CheckOutlined, HourglassOutlined } from "@ant-design/icons";
import {
  StyledBodyContent,
  StyledDoneContainer,
  StyledInProcessContainer,
} from "./styles";
import { useNavigate } from "react-router-dom";

type TasksStoryProps = {
  startDate: string;
};

export const TasksStory = ({ startDate }: TasksStoryProps) => {
  const navigate = useNavigate();

  const formattedDate = Array.from({ length: 30 }, (_, index) => {
    const currentDate: Date = new Date(startDate ?? "");
    currentDate.setDate(currentDate.getDate() + index);
    return currentDate;
  });

  return (
    <Card>
      <StyledBodyContent>
        {formattedDate.map((day, idx) => (
          <div
            onClick={() => navigate(`${idx + 1}`)}
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: day < TODAY ? "black" : "#D3D3D3",
            }}
            key={idx}
          >
            <div>
              {day.toLocaleDateString(ruLocale, options)} —{" "}
              {EMPATHY_TASKS_TITLES[idx + 1]}
            </div>
            {day <= TODAY ? (
              <StyledDoneContainer>
                <CheckOutlined />
                Выполнено
              </StyledDoneContainer>
            ) : (
              <StyledInProcessContainer>
                <HourglassOutlined /> Ожидает
              </StyledInProcessContainer>
            )}
          </div>
        ))}
      </StyledBodyContent>
    </Card>
  );
};
