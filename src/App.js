import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./pages/Home";
import Accessibility from "./pages/Accessibility"
import Environment from "./pages/Environment"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/access"element={<Accessibility/>} />
        <Route path="/env"element={<Environment/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;