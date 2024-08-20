import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
import { useAuth } from "../../../AuthContext";
import { useNavigate } from "react-router-dom";
import Logo from "../../Logo";
import './Login.css';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Success:', values);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      login();
      message.success('Login successful');
      navigate('/home');
    }, 1000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    message.error('Login failed. Please try again.');
  };

  return (
    <div style={{ maxWidth: 300, margin: 'auto', padding: '10px 0' }}>
      <Logo />
      <div className="qec">
        <h2>Quality Enhancement Cell</h2>
      </div>
      <Form
        className="form1"
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <a><h5>Admin Login?</h5></a>
        <Form.Item>
          <Button className="but1" type="primary" htmlType="submit" loading={loading}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
