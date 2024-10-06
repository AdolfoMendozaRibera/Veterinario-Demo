import "./App.css";
//import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainScreen from "./components/MainScreen";
import Login from "./components/Login";
import MainClientScreen from "./components/MainClientScreen";
import MainStaffScreen from "./components/MainStaffScreen";
import PetList from './components/PetList.tsx'
import PersonalList from "./components/PersonalList.tsx";
import ChangePassword from "./components/ChangePassword.tsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/MainClientScreen" element={<MainClientScreen />} />
        <Route path="/MainStaffScreen" element={<MainStaffScreen />} />
        <Route path="/PetList" element={<PetList />} />
        <Route path="/PersonalList" element={<PersonalList />} />
        <Route path="/ChangePassword" element={<ChangePassword />} />
      </Routes>
    </Router>
  );
};

export default App;