import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import ToastContainer from "./components/toast/ToastContainer";
import Dashboard from "./pages/user/Dashboard";
import SignupPage from "./pages/Signup";
import GetCode from "./pages/auth/GetCode";

function App() {
  return (
    <>
      <ToastContainer />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/get-code" element={<GetCode />} />
        <Route path="/" element={<SignupPage />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* when route not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
