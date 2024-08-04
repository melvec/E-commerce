import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </>
  );
}

export default App;
