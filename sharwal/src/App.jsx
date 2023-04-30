import "./index.css";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./routes/Home";
import { Route, Routes } from "react-router-dom";
import { Categories } from "./routes/categories";
import { Footer } from "./components/footer/Footer";
import { AllFabrics } from "./routes/AllFabrics";

function App() {
  return (
    <div className=" bg-myGreen h-full gap-y-16 flex flex-col overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/allfabrics" element={<AllFabrics />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
