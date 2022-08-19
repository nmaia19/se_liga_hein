import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";
import About from "./pages/About";
import Login from "./pages/Login";
import Search from "./pages/Search";
import CreateAccount from "./pages/CreateAccount";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
