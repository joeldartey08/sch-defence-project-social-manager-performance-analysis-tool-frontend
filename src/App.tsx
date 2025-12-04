import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import ToastContainer from "./components/toast/ToastContainer";
import Dashboard from "./pages/user/Dashboard";
import SignupPage from "./pages/Signup";
import GetCode from "./pages/auth/GetCode";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

function App() {
  return (
    <>
      <ToastContainer />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/get-code" element={<GetCode />} />
        <Route path="/" element={<SignupPage />} />
        <Route path="/terms-condition" element={<Terms />} />
        <Route path="/privacy-policy" element={<Privacy />} />

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
