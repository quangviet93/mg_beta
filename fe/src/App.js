import { Routes, Route } from "react-router-dom";
import Home from "./page/home/Home";
import Detail from "./page/detail/Detail";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  );
}

export default App;
