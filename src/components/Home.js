// react-axios
//react-toastify
//reactstrap


import React, { useEffect } from "react";
// import {Jumbotron} from "reactstrap";
import {Container,Button} from "reactstrap";

const Home =() =>{

    useEffect(()=>{
        document.title="Home";
    },[])

    return(

        <div className="text-center">

            {/* <Jumbotron> */}
                <h1>
                    Welcome to Courses

                </h1>
                <Container>
                    <Button color="primary" outline>Start Using</Button>
                </Container>
            {/* </Jumbotron> */}


        </div>

    );

}

export default Home;