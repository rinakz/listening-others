import { HomeOutlined, AppstoreOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { StyledBottomBar, StyledBottomBarButton } from "./styles";

export const BottomBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isVisibleBottomBar = !pathname.includes("tasks/");

  return (
    <>
      {isVisibleBottomBar && (
        <StyledBottomBar>
          <StyledBottomBarButton
            style={{ color: pathname === "/" ? "#8bc4d1" : "#f8d7b7" }}
            onClick={() => navigate("/")}
          >
            <HomeOutlined style={{ fontSize: "24px" }} />
            Главная
          </StyledBottomBarButton>
          <StyledBottomBarButton
            style={{ color: pathname === "/tasks" ? "#8bc4d1" : "#f8d7b7" }}
            onClick={() => navigate("/tasks")}
          >
            <AppstoreOutlined style={{ fontSize: "24px" }} />
            Задание
          </StyledBottomBarButton>
        </StyledBottomBar>
      )}
    </>
  );
};
