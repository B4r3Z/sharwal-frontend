import "./index.css";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Categories } from "./pages/categories";
import { Footer } from "./components/footer/Footer";
import { AllFabrics } from "./pages/AllFabrics";
import { LoginPage } from "./pages/Login";
import { SignupPage } from "./pages/Signup";

function App() {
  return (
    <div className=" bg-myPrimary h-full gap-y-16 flex flex-col overflow-hidden">
    <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignupPage />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
  )

    

    // <div className=" bg-myPrimary h-full gap-y-16 flex flex-col overflow-hidden">
    //   <Navbar />
    //   <Routes>
    //     <Route path="/categories" element={<Categories />} />
    //     <Route path="/allfabrics" element={<AllFabrics />} />
    //   </Routes>
    //   <Footer />
    // </div>
}

export default App;
