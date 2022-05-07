import React, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "./../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const AllCourses=()=>{

        useEffect(() =>{

            document.title="All Courses"

        },[]);

        //function to call server

        const getAllCoursesFromServer=()=>{

            axios.get(`${base_url}/courses`).then(
                (response)=>{
                    console.log(response);
                    toast.success("courses has been loaded",{position:"bottom-center"});
                    setCourses(response.data);
                },
                (error)=>{
                    console.log(error);
                    toast.error("Something went wrong....please refresh and try again!",{position:"bottom-center"})
                    
                }
            )

        };

        //calling loading course function
        useEffect(()=>{

            getAllCoursesFromServer();

        },[]);

    const [courses,setCourses] = useState([

        // {title:"Java Course",description:"this is demo course"},
        // {title:"django Course",description:"this is demo course"},
        // {title:"react Course",description:"this is demo course"}
        
    ]); //hook

    const removeCourseById=(id)=>{

        setCourses(courses.filter((c)=>c.id != id));

    };

    return(

            <div>
                <h1>All Courses</h1>

                <p>List of courses are as follows</p>
                    {

                            courses.length>0?courses.map((item)=>(
                                <Course key={item.id} course = {item} update = {removeCourseById}></Course>
                            )): "No courses"



                    }


            </div>

    );
}
export default AllCourses;

