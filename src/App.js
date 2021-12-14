import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Admission from "./Components/Admission/Admission";
import Footer from "./Components/Footer/Footer";
// import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Institute from "./Components/Institute/Institute";
import NotFind from "./Components/NotFind/NotFind";
import Notice from "./Components/Notice/Notice";
import Students from "./Components/Students/Students";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Header></Header> */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/institute" element={<Institute></Institute>}></Route>
        <Route path="/notice" element={<Notice></Notice>}></Route>
        <Route path="/students" element={<Students></Students>}></Route>
        {/* <Route path="/notice" element={<Notice></Notice>}></Route> */}
        <Route path="/admission" element={<Admission></Admission>}></Route>
        <Route path="*" element={<NotFind></NotFind>}></Route>

      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
