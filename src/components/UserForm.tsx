import React from "react";
import { useDispatch } from "react-redux";
import { Input, InputNumber, Button, Form, Card } from "antd";
import { setName, setEnergy, setMood, setTime } from "../features/user/userSlice";
import { generateAiPlan } from "../features/aiPlan/aiPlanSlice";
import type { AppDispatch } from "../store/store";

interface UserFormValues {
  name: string;
  energy: number;
  mood: string;
  time: number;
}

interface UserFormProps {
  onPlanGenerated: () => void;
}

export const UserForm: React.FC<UserFormProps> = ({ onPlanGenerated }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [form] = Form.useForm<UserFormValues>();

  const onFinish = (values: UserFormValues) => {
    dispatch(setName(values.name));
    dispatch(setEnergy(values.energy));
    dispatch(setMood(values.mood));
    dispatch(setTime(values.time));

    // Poziv Gemini API preko Redux thunk
    dispatch(generateAiPlan(values));
    onPlanGenerated();
  };

  return (
    <Card title="User Info" style={{ maxWidth: 500, width: "100%", padding: "1.5rem" }}>
      <Form<UserFormValues> form={form} layout="vertical" onFinish={onFinish} initialValues={{
        name: "",
        energy: 5,
        mood: "",
        time: 30,
      }}>
        <Form.Item label="Name" name="name" rules={[{ required: true }]}>
          <Input placeholder="Enter your name" />
        </Form.Item>
        <Form.Item label="Energy (1-10)" name="energy" rules={[{ required: true, type: "number", min: 1, max: 10 }]}>
          <InputNumber min={1} max={10} style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item label="Mood" name="mood" rules={[{ required: true }]}>
          <Input placeholder="How do you feel?" />
        </Form.Item>
        <Form.Item label="Available Time (minutes)" name="time" rules={[{ required: true, type: "number", min: 5 }]}>
          <InputNumber min={5} style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>Save & Generate Plan</Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
