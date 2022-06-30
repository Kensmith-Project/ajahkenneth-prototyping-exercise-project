import logo from "./logo.svg";
import "./App.css";
import HomePage from "./screens/HomePage";
import Navbar from "./components/Navbar";
import im from "../src/assets/dasdas.png";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./screens/Details";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="details/:detailsid" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
