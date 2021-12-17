import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Admission from "./Components/Admission/Admission";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Institute from "./Components/Institute/Institute";
import NotFind from "./Components/NotFind/NotFind";
import Notice from "./Components/Notice/Notice";
import Login from "./Components/Register/Login/Login";
import Register from "./Components/Register/Register";
import Students from "./Components/Students/Students";
import YourClasses from "./Components/Students/YourClasses/YourClasses";
import AddNotice from "./Components/Teachers/AddNotice/AddNotice";
import Allteacher from "./Components/Teachers/Allteacher/Allteacher";
import TeacherDetails from "./Components/Teachers/Allteacher/TeacherDetails/TeacherDetails";
import Teachers from "./Components/Teachers/Teachers";
import AuthProvider from "./Context/AuthProvider";
import PrivateRouter from "./Context/PrivateRouter";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/institute" element={<Institute></Institute>}></Route>
          <Route path="/notice" element={<Notice></Notice>}></Route>
          <Route path="/students" element={<Students></Students>}></Route>
          <Route path="/teachers" element={<PrivateRouter><Teachers></Teachers></PrivateRouter>}></Route>
          <Route path="/admission" element={<PrivateRouter><Admission></Admission></PrivateRouter>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/yourClasses" element={<YourClasses></YourClasses>}></Route>
          <Route path="/allTeacher" element={<Allteacher></Allteacher>}></Route>
          <Route path="/teacherDetails/:Id" element={<PrivateRouter><TeacherDetails></TeacherDetails></PrivateRouter>}></Route>
          <Route path="/addNotice" element={<AddNotice></AddNotice>}></Route>
          {/* <Route path="/addHead" element={<AddHead></AddHead>}></Route>
          <Route path="/newTeacher" element={<NewTeacher></NewTeacher>}></Route> */}
          <Route path="*" element={<NotFind></NotFind>}></Route>
        </Routes>
        <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
