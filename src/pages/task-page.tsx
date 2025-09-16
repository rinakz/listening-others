import { useParams } from "react-router-dom";

export const TaskPage = () => {
  const { id } = useParams();

  //todo: просто так для понимания что за компонент
  console.log(id);
  return <div>task-page</div>;
};
