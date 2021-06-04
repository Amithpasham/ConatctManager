import React from "react";
import user from "../images/user.png";
import {Link} from "react-router-dom"

const ContactDetails = (props) => {
const {name,email}=props.location.state.contact;
return (
    <>
<div className="main">
    <div className="ui card centered">
        <div className="image"> 
            <img src={user} alt="user"/>
        </div>
        <div classname="content">
            <div  classname="header">{name}</div>
            <div classname="description">{email}</div>
        </div> </div>
        </div>
    <div className="centered" >
    <Link to="/" > <button className="ui button blue center ">Back to contactList</button></Link>
    </div> 
   </>
);
};

export default ContactDetails;
