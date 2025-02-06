import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
