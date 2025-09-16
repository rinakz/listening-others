import { Routes, Route, BrowserRouter } from "react-router-dom";
import { MainPage } from "./pages/main-page";
import { TaskPage } from "./pages/task-page";
import { Header } from "./components/common/header";
import { BottomBar } from "./components/common/bottom-bar";
import { TasksPage } from "./pages/tasks-page/tasks-page";
import { useEffect } from "react";

export const AppRoutes = () => {
  const date = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    const userStartDate = localStorage.getItem("startDate");
    if (userStartDate) {
      return;
    }
    localStorage.setItem("startDate", date);
  }, [date]);

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
