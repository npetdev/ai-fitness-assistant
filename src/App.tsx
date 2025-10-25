import React, { useState } from "react";
import { ConfigProvider, theme, Button, Layout, Typography } from "antd";
import { useSelector } from "react-redux";
import type { RootState } from "./store/store";
import { UserForm } from "./components/UserForm";
import { AiPlanDisplay } from "./components/AiPlanDisplay";

const { Content } = Layout;
const { Title } = Typography;

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showForm, setShowForm] = useState(true);

  // AI plan loading status from Redux
  const aiPlanStatus = useSelector((state: RootState) => state.aiPlan.status);
  const toggleTheme = () => setDarkMode(!darkMode);
  const handlePlanGenerated = () => setShowForm(false);
  const handleReset = () => setShowForm(true);

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <Layout
        style={{
          minHeight: "100vh",
          background: darkMode ? "#141414" : "#fff",
          padding: "2rem",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "3rem",
          }}
        >
          <Title
            level={2}
            style={{ color: darkMode ? "#fff" : "#000", marginBottom: "1rem" }}
          >
            AI Fitness Assistant
          </Title>
          <Button onClick={toggleTheme}>
            Switch to {darkMode ? "Light" : "Dark"} Mode
          </Button>
        </div>

        {/* Main Content */}
        <Content
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          {showForm ? (
            <UserForm onPlanGenerated={handlePlanGenerated} />
          ) : (
            <AiPlanDisplay onReset={handleReset} />
          )}

          {aiPlanStatus === "loading" && (
            <div style={{ marginTop: "2rem" }}>Generating AI plan...</div>
          )}
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
