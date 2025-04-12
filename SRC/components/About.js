import UserClass from "./UserClass";
import React from "react";
import UserInfo from "../utils/UserInfo";

class About extends React.Component {
    constructor(props){
        super(props)
        // console.log("Parent constructor")
    }
    componentDidMount(){
        // console.log("Parent componentDidMount")
    }
    render(){
        console.log("Parent render")
        return(
            <div>
                <h1>About Us</h1>
                <div>
                <UserInfo.Consumer>
                        {({loggedInUser}) => <h1>{loggedInUser}</h1>}
                    </UserInfo.Consumer>
                    
                </div>
                <p>This is a food delivery app.</p>
                <UserClass name={"Bwin Panda"} location={"Ichappur re rahuchi"}/>
            </div>
        )
    }
}
export default About;