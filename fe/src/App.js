import { Routes, Route } from "react-router-dom";
import Home from "./page/home/Home";
import Detail from "./page/detail/Detail";
import Endow from "./page/endow/Endow";
import Seo from "./page/seo/Seo";
import Notfound from "./page/404/404";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/seo' element={<Seo />} />
      <Route path='/endow' element={<Endow />} />
      <Route path='/company' element={<Detail />} />
      <Route path='/404' element={<Notfound />} />
    </Routes>
  );
}

export default App;
