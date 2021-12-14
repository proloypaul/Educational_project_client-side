import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Institute from "./Components/Institute/Institute";
import Notice from "./Components/Notice/Notice";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/institute" element={<Institute></Institute>}></Route>
        <Route path="/notice" element={<Notice></Notice>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
