import React from "react";
import { useDispatch } from "react-redux";
import { Input, InputNumber, Select, Button, Form, Card } from "antd";
import { setUserData } from "../features/user/userSlice";
import { generateAiPlan } from "../features/aiPlan/aiPlanSlice";
import type { AppDispatch } from "../store/store";
import type { UserState } from "../types";
import { initialUserState } from "../constants/initialUserState";
const { Option } = Select;

interface UserFormProps {
  onPlanGenerated: () => void;
}
export const UserForm: React.FC<UserFormProps> = ({ onPlanGenerated }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [form] = Form.useForm<UserState>();

  const onFinish = (values: UserState) => {
    dispatch(setUserData(values));
    dispatch(generateAiPlan(values));
    onPlanGenerated();
  };

  return (
    <Card
      title="User Information"
      style={{ maxWidth: 600, width: "100%", padding: "1.5rem" }}
    >
      <Form<UserState>
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={initialUserState}
      >
        <Form.Item label="Full Name" name="name" rules={[{ required: true }]}>
          <Input placeholder="Enter your full name" />
        </Form.Item>

        <Form.Item label="Gender" name="gender" rules={[{ required: true }]}>
          <Select>
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Age"
          name="age"
          rules={[{ required: true, type: "number", min: 10, max: 100 }]}
        >
          <InputNumber min={10} max={100} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Height (cm)"
          name="height"
          rules={[{ required: true, type: "number", min: 50 }]}
        >
          <InputNumber min={50} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Weight (kg)"
          name="weight"
          rules={[{ required: true, type: "number", min: 20 }]}
        >
          <InputNumber min={20} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Activity Level"
          name="activityLevel"
          rules={[{ required: true }]}
        >
          <Select>
            <Option value="sedentary">Sedentary</Option>
            <Option value="light">Light</Option>
            <Option value="moderate">Moderate</Option>
            <Option value="active">Active</Option>
            <Option value="very active">Very Active</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Experience Level"
          name="experienceLevel"
          rules={[{ required: true }]}
        >
          <Select>
            <Option value="beginner">Beginner</Option>
            <Option value="intermediate">Intermediate</Option>
            <Option value="advanced">Advanced</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Training Frequency (per week)"
          name="trainingFrequency"
          rules={[{ required: true, type: "number", min: 1, max: 14 }]}
        >
          <InputNumber min={1} max={14} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Training Location"
          name="trainingLocation"
          rules={[{ required: true }]}
        >
          <Select>
            <Option value="home">Home</Option>
            <Option value="gym">Gym</Option>
            <Option value="outdoors">Outdoors</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Available Equipment"
          name="equipment"
          rules={[{ required: true }]}
        >
          <Input placeholder="e.g., dumbbells, resistance bands, none" />
        </Form.Item>

        <Form.Item
          label="Primary Goal"
          name="goal"
          rules={[{ required: true }]}
        >
          <Select>
            <Option value="fat loss">Fat Loss</Option>
            <Option value="muscle gain">Muscle Gain</Option>
            <Option value="strength">Strength</Option>
            <Option value="endurance">Endurance</Option>
            <Option value="mobility">Mobility & Flexibility</Option>
            <Option value="general fitness">General Fitness</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Injuries or Limitations" name="injuries">
          <Input placeholder="Specify if any injuries or limitations" />
        </Form.Item>

        <Form.Item label="Health Conditions" name="healthConditions">
          <Input placeholder="Specify chronic illnesses or conditions" />
        </Form.Item>

        <Form.Item
          label="Available Workout Time (minutes)"
          name="timeAvailable"
          rules={[{ required: true, type: "number", min: 5 }]}
        >
          <InputNumber min={5} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Energy Level (1-10)"
          name="energy"
          rules={[{ required: true, type: "number", min: 1, max: 10 }]}
        >
          <InputNumber min={1} max={10} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Current Mood"
          name="mood"
          rules={[{ required: true }]}
        >
          <Input placeholder="How are you feeling today?" />
        </Form.Item>

        <Form.Item
          label="Sleep Quality"
          name="sleepQuality"
          rules={[{ required: true }]}
        >
          <Select>
            <Option value="poor">Poor</Option>
            <Option value="average">Average</Option>
            <Option value="good">Good</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Stress Level (1-10)"
          name="stressLevel"
          rules={[{ required: true, type: "number", min: 1, max: 10 }]}
        >
          <InputNumber min={1} max={10} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Preferred Workout Type"
          name="preferredWorkoutType"
          rules={[{ required: true, message: "Please select a workout type" }]}
        >
          <Select allowClear>
            <Option value="strength">Strength</Option>
            <Option value="hiit">HIIT</Option>
            <Option value="yoga">Yoga</Option>
            <Option value="mobility">Mobility</Option>
            <Option value="cardio">Cardio</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Save & Generate Plan
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
