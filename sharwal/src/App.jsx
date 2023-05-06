import "./index.css";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./routes/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Categories } from "./routes/categories";
import { Footer } from "./components/footer/Footer";
import { AllFabrics } from "./routes/AllFabrics";
import { LoginPage } from "./routes/Login";
import { SignupPage } from "./routes/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>

    // <div className=" bg-myPrimary h-full gap-y-16 flex flex-col overflow-hidden">
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/categories" element={<Categories />} />
    //     <Route path="/allfabrics" element={<AllFabrics />} />
    //   </Routes>
    //   <Footer />
    // </div>
  );
}

export default App;
