import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Button, Container,Row, Col} from 'reactstrap';
import {ToastContainer, toast} from "react-toastify";
import Home from "./components/Home";
import Course from './components/Course';
import Allcourses from "./components/Allcourses"
import AddCourse from './components/AddCourse';
import Menus from './components/Menus';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

function App() {

const btnHandle=()=>{

  toast.success("success",{position: "bottom-center"});

}
  return (
    <div>
      <ToastContainer /> 
      {/* <Home/>
      <Allcourses></Allcourses>
      <AddCourse></AddCourse> */}
      <Container>
        <Header/>
        <Row>
          <Col md = {4}><Menus/></Col>
          <Col md ={8}>
            {/* <Home/> */}
            <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add-course" element={<AddCourse />} />
              <Route path="/view-courses" element={<Allcourses />} />
            </Routes>
            </BrowserRouter>
            </Col>
        </Row>
      </Container>

    </div>
  );
  
}

export default App;
