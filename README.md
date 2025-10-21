# AI Fitness Assistant

AI Fitness Assistant is an application that generates daily workout plans based on user data.

## Technologies
- React + TypeScript + Vite
- Redux Toolkit
- Ant Design
- Axios
- Framer Motion
- Recharts

## Features
- User input for personal data: energy level, mood, available time
- Generation of AI-based textual workout plans (simulated or via AI API)
- Display of the plan in a UI component
- Scalable structure for adding new AI services and features

## Installation

    git clone <your-repo-url>
    cd ai-fitness-assistant
    npm install
    npm run dev

## Project Structure

    src/
     ┣ components/           # Reusable UI components
     ┣ features/             # Redux slices by feature
     ┣ store/                # Redux store configuration
     ┣ utils/                # Helper functions and API calls
     ┣ App.tsx
     ┗ main.tsx

## Next Steps
- Implement UserForm for collecting user data
- Generate and display AI workout plans
- Connect to real AI APIs (OpenAI, HuggingFace, or other services)
