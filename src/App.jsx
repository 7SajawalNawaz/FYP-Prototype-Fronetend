import React, { useState, useEffect } from "react";
import { Button, Layout, theme, Drawer } from "antd";
import MenuList from "./Components/MenuList";
import { MenuUnfoldOutlined, MenuFoldOutlined, MenuOutlined } from "@ant-design/icons";
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import './App.css';
import Home from "./Components/pages/Home";
import NE from "./Components/pages/NE";
import Login from "./Components/pages/login/Login";

const { Header, Sider, Content } = Layout;

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [darkTheme, setDarkTheme] = useState(true);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {!isMobile && (
        <Sider
          className="sidebar"
          theme={darkTheme ? "dark" : "light"}
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
          breakpoint="lg"
          collapsedWidth="0"
          width={200}
        >
          <MenuList darkTheme={darkTheme} toggleTheme={toggleTheme} />
        </Sider>
      )}
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            {!isMobile ? (
              <Button
                className="toggle"
                onClick={() => setCollapsed(!collapsed)}
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                style={{ marginLeft: 16 }}
              />
            ) : (
              <Button
                className="mobile-menu-button"
                type="text"
                icon={<MenuOutlined />}
                onClick={showDrawer}
                style={{ marginLeft: 16 }}
              />
            )}
          </div>
          <div className="header-right">
            {!isAuthenticated ? (
              <Button className="login-button" type="primary" onClick={() => navigate("/login")}>
                Login
              </Button>
            ) : (
              <Button
                className="login-button"
                type="default"
                onClick={() => {
                  // Handle logout logic here
                }}
              >
                Logout
              </Button>
            )}
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/news-events" element={<NE />} />
            <Route path="/login" element={<Login />} />

            {/* Protected Reports Routes */}
            <Route path="/reports/sar" element={<ProtectedRoute element={<div>SAR</div>} />} />
            <Route path="/reports/sipe" element={<ProtectedRoute element={<div>SIPE</div>} />} />
            <Route path="/reports/hecs" element={<ProtectedRoute element={<div>HEC's</div>} />} />
            <Route path="/reports/upr" element={<ProtectedRoute element={<div>UPR</div>} />} />
            <Route path="/reports/ipe" element={<ProtectedRoute element={<div>IPE</div>} />} />

            {/* Unprotected Routes */}
            <Route path="/functions/training" element={<div>Training</div>} />
            <Route path="/assessments/departments" element={<div>Departments</div>} />
            <Route path="/assessments/programs" element={<div>Programs</div>} />
            <Route path="/assessments/self-assessment" element={<div>Self Assessment</div>} />
            <Route path="/assessments/assessment-team" element={<div>Assessment Team</div>} />
            <Route path="/capacity-building/services" element={<div>Services</div>} />
            <Route path="/capacity-building/workshop" element={<div>Workshop</div>} />
            <Route path="/capacity-building/training" element={<div>Training</div>} />
            <Route path="/capacity-building/presentations" element={<div>Presentations</div>} />
            <Route path="/affiliated-colleges" element={<div>Affiliated Colleges</div>} />
            <Route path="/mous" element={<div>MOU's</div>} />
            <Route path="/downloads/manuals" element={<div>Manuals</div>} />
            <Route path="/downloads/hec-rules" element={<div>HEC Rules</div>} />
          </Routes>
        </Content>
      </Layout>
      <Drawer
        title="Menu"
        placement="left"
        onClose={closeDrawer}
        visible={drawerVisible}
        bodyStyle={{ padding: 0 }}
        className={darkTheme ? "dark-theme" : "light-theme"}
      >
        <MenuList darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </Drawer>
    </Layout>
  );
};

export default App;
