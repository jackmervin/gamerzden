import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";

import SelectPlane from "./Components/SelectPlane/SelectPlane";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/plane" element={<SelectPlane />}></Route>
      </Routes>{" "}
    </HashRouter>
  );
}

export default App;
