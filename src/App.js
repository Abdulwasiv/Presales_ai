import Home from "./home";
import Login from "./login";
import Hero from "./register";

import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Hero />} />
      </Routes>
    </>
  );
}

export default App;
