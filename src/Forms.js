import { DatePicker, Form, Radio, Select , Button } from "antd";
import React from "react";
import DefaultLayout from "./DefaultLayout";
import { Input } from "antd";
import TextArea from "rc-textarea";


const { Option } = Select;
function Forms() {
  return (
    <DefaultLayout>
      <h3 style={{marginLeft:20}}>Register form</h3>
      <Form layout="vertical" className='register-form'>
        <Form.Item label="First Name" name="firstName" required>
          <Input />
        </Form.Item>

        <Form.Item label="Last Name" name="lastName" required>
          <Input />
        </Form.Item>

        <Form.Item label="Email" name="email" required>
          <Input />
        </Form.Item>

        <Form.Item label="Gender" name="gender" required>
          <Radio.Group>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Date Of Birth" name="dob" required>
          <DatePicker />
        </Form.Item>

        <Form.Item label="Department" name="department" required>
          <Select>
            <Option value="computers">Computers</Option>
            <Option value="electrical">Electrical</Option>

            <Option value="mechanical">Mechanical</Option>
            <Option value="civil">Civil</Option>
            <Option value="computers">Computers</Option>
            <Option value="bio">Bio</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Address" name="address" required>
          <TextArea className='w-100'/>
        </Form.Item>

        <Button htmlType='submit' type='primary'>Register</Button>
      </Form>
    </DefaultLayout>
  );
}

export default Forms;
