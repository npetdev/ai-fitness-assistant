# 🧠 AI Fitness Assistant

**AI Fitness Assistant** is an application that generates personalized daily workout plans based on user data and AI analysis.

## ⚙️ Technologies
- **React + TypeScript + Vite**  
- **Redux Toolkit**  
- **Ant Design**  
- **Axios**  
- **Framer Motion**  
- **Recharts**  
- **Gemini AI (Google)**  
- **Supabase (BaaS)**  

## 🚀 Features
- User input for energy, mood, and available time  
- AI-powered workout plan generation using **Gemini API**  
- Interactive UI for displaying workout plans  
- Data storage and management via **Supabase**  
- Modular structure for easy scalability and feature expansion  

## 📦 Installation
git clone <https://github.com/npetdev/ai-fitness-assistant>
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
- Add user progress tracking and workout history
- Integrate additional AI services
- Improve UI/UX and optimize performance