import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";
import About from "./pages/About";
import Login from "./pages/Login";
import Search from "./pages/Search";
import CreateAccount from "./pages/CreateAccount";
import NewOccurrence from "./pages/NewOccurrence";
import MyOccurrences from "./pages/MyOccurrences";

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
        <Route path="/new-occurrence" element={<NewOccurrence />}/>
        <Route path="/myoccurrences" element={<MyOccurrences />} />
      </Routes>
    </div>
  );
}

export default App;
