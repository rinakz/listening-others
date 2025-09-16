import { HomeOutlined, HeatMapOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { StyledBottomBar, StyledBottomBarButton } from "./styles";

export const BottomBar = () => {
  const navigate = useNavigate();
  return (
    <StyledBottomBar>
      <StyledBottomBarButton onClick={() => navigate("/")}>
        <HomeOutlined style={{ fontSize: "24px" }} />
        Главная
      </StyledBottomBarButton>
      <StyledBottomBarButton onClick={() => navigate("/tasks")}>
        <HeatMapOutlined style={{ fontSize: "24px" }} />
        Задание
      </StyledBottomBarButton>
    </StyledBottomBar>
  );
};
