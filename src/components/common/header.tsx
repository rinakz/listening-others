import { StarOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const { pathname } = useLocation();
  const isVisibleHeader = !pathname.includes("tasks/");

  return (
    <>
      {isVisibleHeader && (
        <div
          style={{
            display: "flex",
            gap: "8px",
            background: "#8bc4d1",
            opacity: 0.4,
            padding: "12px",
            color: "white",
          }}
        >
          <StarOutlined />
          Слушая Других
        </div>
      )}
    </>
  );
};
