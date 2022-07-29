import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";
import UserProfile from "./Pages/Dashboard/UserProfile/UserProfile";
import Navbar from "./Pages/Shared/Navbar";
import ManagerUsers from "./Pages/Dashboard/ManageUser/ManagerUsers";
import ManagerInstructors from "./Pages/Dashboard/ManageInstructors/ManageInstructors";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            // <RequireAuth>
            <Dashboard />
            // </RequireAuth>
          }
        >
          <Route index element={<UserProfile />} />
          <Route path="/manageUsers" element={<ManagerUsers />} />
          <Route path="/manageInstructors" element={<ManagerInstructors />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
