import { TasksProgress } from "../../components/features/tasks-progress/tasks-progress";
import { TasksStory } from "../../components/features/tasks-story/tasks-story";
import { LayoutPage } from "../../layouts/layout-page";
import { StyledProgressTitle, StyledTasksContainer } from "./styles";

export const TasksPage = () => {
  const startDate = localStorage.getItem("startDate") ?? "";

  return (
    <LayoutPage>
      <StyledTasksContainer>
        <StyledProgressTitle>Твой прогресс</StyledProgressTitle>
        <TasksProgress startDate={startDate} />
        <div> История заданий</div>
        <TasksStory startDate={startDate} />
      </StyledTasksContainer>
    </LayoutPage>
  );
};
