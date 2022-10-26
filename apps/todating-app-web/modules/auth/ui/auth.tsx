

import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Logo } from '../../shared';
import s from './auth.module.scss';

const layout = {
  labelCol: {
   span: 8
  },
  wrapperCol: {
    span: 16 
  },
};

export const Auth = () => {
  return (
    <div className={s.auth}>
      <Logo />
      <div className={s.auth__container}>
        <Form 
          {...layout}
          initialValues={{ remember: false }}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input prefix={<UserOutlined className="auth__prefix-icon" />} placeholder="username or email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password prefix={<LockOutlined className="auth__prefix-icon" />}  placeholder="password" />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item className="auth__submit-btn">
            <Button type="primary" htmlType="submit">
            Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}


