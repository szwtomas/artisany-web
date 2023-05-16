import React from "react";
import "./Navbar.css";
import { Avatar, Input, Typography } from "antd";
import { UserOutlined, SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

export const Navbar: React.FC = () => {
  const navigate = useNavigate();

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
          </div>
        </div>
      </div>
    </nav>
  );
};
