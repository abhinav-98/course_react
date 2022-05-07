import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import{

    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container
} from "reactstrap";
import base_url from "../api/bootapi";

const Course = ({course,update}) =>{

    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                toast.success("Course Deleted Successfully!");
                update(id);
            },
            (error)=>{

                toast.success("Something went wrong...please try again!");

            })};
    return (
<Card>
<CardBody>
    <CardSubtitle className="font-weight-bold text-center">{course.title}</CardSubtitle>
    <CardText className="text-center">{course.description}</CardText>
    <Container className="text-center">
        <Button color="danger" onClick={()=>{
            deleteCourse(course.id);
        }}>Delete</Button>
        <Button color = "warning ml-3">Update</Button>
    </Container>
</CardBody>
</Card>

    );

}
export default Course;