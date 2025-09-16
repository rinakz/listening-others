import { Routes, Route, BrowserRouter } from "react-router-dom";
import { MainPage } from "./pages/main-page";
import { TaskPage } from "./pages/task-page";
import { Header } from "./components/common/header";
import { BottomBar } from "./components/common/bottom-bar";
import { TasksPage } from "./pages/tasks-page";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />;
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/tasks/:id" element={<TaskPage />} />
      </Routes>
      <BottomBar />
    </BrowserRouter>
  );
};

export default AppRoutes;
