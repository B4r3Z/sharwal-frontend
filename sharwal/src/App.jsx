import "./index.css";
import { Navbar } from "./components/navbar/Navbar";
import { Header } from "./components/header/Header";

function App() {
  return (
    <div className="App bg-myGreen h-[3000px] w-screen">
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
