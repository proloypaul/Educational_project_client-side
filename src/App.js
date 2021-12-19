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
import Review from "./Components/Review/Review";
import AddReview from "./Components/Students/AddReview/AddReview";
import ContactUs from "./Components/Students/ContactUs/ContactUs";
import Library from "./Components/Students/Library/Library";
import Students from "./Components/Students/Students";
import YourClasses from "./Components/Students/YourClasses/YourClasses";
import AddHead from "./Components/Teachers/AddHead/AddHead";
import AddNotice from "./Components/Teachers/AddNotice/AddNotice";
import Allteacher from "./Components/Teachers/Allteacher/Allteacher";
import TeacherDetails from "./Components/Teachers/Allteacher/TeacherDetails/TeacherDetails";
import ManageStudents from "./Components/Teachers/ManageStudents/ManageStudents";
import NewTeacher from "./Components/Teachers/NewTeacher/NewTeacher";
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
          <Route path="/review" element={<Review></Review>}></Route>
          <Route path="/teachers" element={<Teachers></Teachers>}></Route>
          <Route path="/admission" element={<PrivateRouter><Admission></Admission></PrivateRouter>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/yourClasses" element={<YourClasses></YourClasses>}></Route>
          <Route path="/library" element={<Library></Library>}></Route>
          <Route path="/addReview" element={<AddReview></AddReview>}></Route>
          <Route path="/contactUs" element={<ContactUs></ContactUs>}></Route>
          <Route path="/manageStudents" element={<ManageStudents></ManageStudents>}></Route>
          <Route path="/allTeacher" element={<Allteacher></Allteacher>}></Route>
          <Route path="/teacherDetails/:Id" element={<PrivateRouter><TeacherDetails></TeacherDetails></PrivateRouter>}></Route>
          <Route path="/addNotice" element={<AddNotice></AddNotice>}></Route>
          <Route path="/addHead" element={<AddHead></AddHead>}></Route>
          <Route path="/newTeacher" element={<NewTeacher></NewTeacher>}></Route> 
          <Route path="*" element={<NotFind></NotFind>}></Route>
        </Routes>
        <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
