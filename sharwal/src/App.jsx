import "./index.css";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./routes/Home";
import { Route, Routes } from "react-router-dom";
import { Categories } from "./routes/categories";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className=" bg-myGreen h-full gap-y-16 flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
