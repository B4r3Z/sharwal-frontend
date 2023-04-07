import "./index.css";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./pages/home";

function App() {
  return (
    <div className=" bg-myGreen h-[3000px]">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
