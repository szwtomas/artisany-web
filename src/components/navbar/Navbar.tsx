import React, { useContext } from "react";
import "./Navbar.css";
import { Avatar, Button, Input, Typography } from "antd";
import { UserOutlined, SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const { Title, Text } = Typography;

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const usernameToDisplay = "Demo user";
  const userRole = "user";

  return (
    <nav>
      <div className="navbar-container">
        <Title level={2} onClick={() => navigate("/")}>
          Artisany
        </Title>
        <div className="searchbar-avatar">
          <Input
            placeholder="Search something..."
            className="navbar-search"
            prefix={<SearchOutlined />}
          />

          <div className="username-role-avatar">
            <Text italic>
              @{usernameToDisplay} - {userRole}
            </Text>
            <Avatar size={"large"} icon={<UserOutlined />} />
            <Button className="logout-btn" onClick={logout}>
              Log out
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
