import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import "./MenuList.css";
import Logo from "./Logo";
import ToggleTheme from "./ToggleTheme";
import {
  DownloadOutlined,
  SoundOutlined,
  DingtalkOutlined,
  TeamOutlined,
  FilePptOutlined,
  InsertRowLeftOutlined,
  ReadOutlined,
  FileProtectOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const MenuList = ({ darkTheme, toggleTheme }) => {
  return (
    <div>
      <Menu className="menubar" theme={darkTheme ? "dark" : "light"} mode="inline">
        <Logo />
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item key="news-events" icon={<SoundOutlined />}>
          <Link to="/news-events">News & Events</Link>
        </Menu.Item>
        <Menu.SubMenu key="functions" icon={<DingtalkOutlined />} title="Functions">
          <Menu.Item key="training">
            <Link to="/functions/training">Training</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="assessments" icon={<TeamOutlined />} title="Assessments">
          <Menu.Item key="departments">
            <Link to="/assessments/departments">Departments</Link>
          </Menu.Item>
          <Menu.Item key="programs">
            <Link to="/assessments/programs">Programs</Link>
          </Menu.Item>
          <Menu.Item key="self-assessment">
            <Link to="/assessments/self-assessment">Self Assessment</Link>
          </Menu.Item>
          <Menu.Item key="assessment-team">
            <Link to="/assessments/assessment-team">Assessment Team</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="reports" icon={<FilePptOutlined />} title="Reports">
          <Menu.Item key="sar">
            <Link to="/reports/sar">SAR</Link>
          </Menu.Item>
          <Menu.Item key="sipe">
            <Link to="/reports/sipe">SIPE</Link>
          </Menu.Item>
          <Menu.Item key="hecs">
            <Link to="/reports/hecs">HEC's</Link>
          </Menu.Item>
          <Menu.Item key="upr">
            <Link to="/reports/upr">UPR</Link>
          </Menu.Item>
          <Menu.Item key="ipe">
            <Link to="/reports/ipe">IPE</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="capacity-building" icon={<InsertRowLeftOutlined />} title="Capacity Building">
          <Menu.Item key="services">
            <Link to="/capacity-building/services">Services</Link>
          </Menu.Item>
          <Menu.Item key="workshop">
            <Link to="/capacity-building/workshop">Workshop</Link>
          </Menu.Item>
          <Menu.Item key="training">
            <Link to="/capacity-building/training">Training</Link>
          </Menu.Item>
          <Menu.Item key="presentations">
            <Link to="/capacity-building/presentations">Presentations</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="affiliated-colleges" icon={<ReadOutlined />}>
          <Link to="/affiliated-colleges">Affiliated Colleges</Link>
        </Menu.Item>
        <Menu.Item key="mous" icon={<FileProtectOutlined />}>
          <Link to="/mous">MOU's</Link>
        </Menu.Item>
        <Menu.SubMenu key="downloads" icon={<DownloadOutlined />} title="Downloads">
          <Menu.Item key="manuals">
            <Link to="/downloads/manuals">Manuals</Link>
          </Menu.Item>
          <Menu.Item key="hec-rules">
            <Link to="/downloads/hec-rules">HEC Rules</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <ToggleTheme darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </Menu>
    </div>
  );
};

export default MenuList;
