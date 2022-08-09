// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Students from "./components/Students";
import Home from "./components/Home";
import Form from "./components/Form";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/success/:name" element={<Students />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
