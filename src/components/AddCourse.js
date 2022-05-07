import React, { Fragment, useEffect, useState } from "react";
import { Button, Form, FormGroup, Input,Container } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
const AddCourse=()=>{

    useEffect(()=>{
        document.title="Add Course"
    },[])

    const [course,setCourse] = useState({});
    //form handler function
    const handleForm=(e)=>{
        console.log(course);
        postDatatoServer(course);
        e.preventDefault();
    };

    //creating function to post data on server
    const postDatatoServer=(data)=>{

        axios.post(`${base_url}/courses`,data).then(
            (response)=>{
                    console.log(response);
                    toast.success("Course added successfully",{position:"bottom-center"});
            },(error)=>{
                console.log(error);
                toast.error("Error! Something went wrong...please try again!",{position:"bottom-center"});
            }
        )
    };

    return(

        <Fragment>
            <h1 className="text-center my-3">Fill Course Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for = "userId" >Course ID</label>
                    <Input type = "text" placeholder="Enter Course ID" name="UserId" id="userId" onChange={(e)=>{
                        setCourse({...course,id:e.target.value});
                    }}/>
                </FormGroup>
                <FormGroup>
                    <label for = "title" >Course Title</label>
                    <Input type = "text" placeholder="Enter Course Title" id="title" onChange={(e)=>{
                        setCourse({...course,title:e.target.value});
                    }}/>
                </FormGroup>
                <FormGroup>
                    <label for = "description" >Course Description</label>
                    <Input type = "textarea" placeholder="Enter Course Description" id="description" style={{height: 200}}
                    onChange={(e)=>{
                        setCourse({...course,description:e.target.value});
                    }}/>
                </FormGroup>

                    <Container className="text-center">
                    <Button type="submit" color="success">Add Course</Button>
                    <Button type="reset" color="warning ml-3">Clear</Button>
                    </Container>

            </Form>

        </Fragment>

    );

}

export default AddCourse;