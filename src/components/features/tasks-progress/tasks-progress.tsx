import { Card, Progress } from "antd";
import { StyledProgressContainer } from "./styles";

type TasksProgressProps = {
  startDate: string;
};

export const TasksProgress = ({ startDate }: TasksProgressProps) => {
  const currentDate = new Date();
  const date = new Date(startDate ?? "");
  const differenceInTime: number = currentDate.getTime() - date.getTime();
  const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));
  const percent = Number(((differenceInDays / 30) * 100).toFixed());

  return (
    <Card>
      <StyledProgressContainer>
        <Progress
          size={100}
          type="circle"
          percent={percent}
          strokeColor={"#8bc4d1"}
          trailColor="transparent"
        />
        <div
          style={{
            display: "flex",
            gap: "4px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          Ты завершил(а)
          <span style={{ color: "#8bc4d1" }}>{differenceInDays} из 30</span>
          заданий. Так держать!
        </div>
      </StyledProgressContainer>
    </Card>
  );
};
