import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Spin } from "antd";
import type { RootState, AppDispatch } from "../store/store";
import { clearPlan } from "../features/aiPlan/aiPlanSlice";

interface AiPlanDisplayProps {
  onReset: () => void;
}

export const AiPlanDisplay: React.FC<AiPlanDisplayProps> = ({ onReset }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { plan, status } = useSelector((state: RootState) => state.aiPlan);

  const handleClear = () => {
    dispatch(clearPlan());
    onReset(); // show form
  };

  return (
    <div style={{ maxWidth: 500, width: "100%" }}>
      {status === "loading" && (
        <div style={{ marginBottom: "1rem", textAlign: "center" }}>
          <Spin tip="Generating plan..." />
        </div>
      )}

      {plan && (
        <Card
          title="Your AI Plan"
          style={{
            whiteSpace: "pre-line",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          {plan}
          <div style={{ marginTop: "1rem", textAlign: "center" }}>
            <Button onClick={handleClear}>Back to Form</Button>
          </div>
        </Card>
      )}
    </div>
  );
};
