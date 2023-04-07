import "./index.css";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./routes/Home";
import { Route, Routes } from "react-router-dom";
import { Categories } from "./routes/categories";

function App() {
  return (
    <div className=" bg-myGreen h-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
