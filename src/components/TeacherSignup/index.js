import React, { useCallback, useState } from 'react'
import './Signup.css';
import logo from '../../images/logo.png';
import app from '../../firebase';
import { withRouter } from "react-router";
import {Link} from "react-router-dom";
import firebase from 'firebase';
import dots from '../../images/login_background_dots.png';
import line1 from '../../images/signup__line_1.png';
import line2 from '../../images/signup__line_2.png'

function TeacherSignup({history}) {
        const [fullname, setFullName] = useState("");
        const [mobile, setMobile] = useState("");
        const [email, setEmail] = useState("");
        const [school, setSchool] = useState("");
        const [password, setPassword] = useState("");

       const handleSignUp = (e) => {
           e.preventDefault();
           try {
                app
               .auth()
               .createUserWithEmailAndPassword(email, password)
               .then((authUser) => {
                    console.log(authUser.user.updateProfile({ displayName:fullname })
                    .then(()=>{
                        // history.push("/")
                        updateUserDetails(authUser.user)
                    })
                    .catch(e=>{console.log("Error:",e);}));
                })
                .catch(e => console.log(e));
           } catch (error) {
               alert(error);
           }       
        };

        const updateUserDetails = (user) => {
            app.firestore().collection("users").doc(user.uid).set({
                assessmentTaken: false,
                phoneNumber: mobile,
                school,
                userType: "teacher",
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            })
            .then(()=>history.push('/teacher/dashboard'))
            .catch(e=>console.log("Error in updating details: ", e))
        }


    return (
        <div className="login">
             <div className="mobile__head-teach"><img src={logo}></img></div>
           <div className="navbar-s">
                <div className="logo-s"><img src={logo}></img></div>
                <div className="options-s">
                    <div className="option-1-s">
                        <Link to="/" style={{textDecoration:"none", color:"#FFF5D1"}}>Home</Link>
                    </div>
                    <div className="option-2-s">
                        About Us
                    </div>
                    <div className="option-3-s">
                        Contact us
                    </div>
                </div>
                <div className="buttons-s">

                <Link to="/login"> <button className="login-btn-s">Login</button></Link>  
                    <button className="signup-btn-s">SignUp</button>

                </div>
            </div>
            <div className="total-p-s"> 
                <div className="left-p-s">
                <img src={dots} alt="Dots" className="login__dots_1 signup__dots_1 index-d"/>
            <img src={dots} alt="Dots" className="login__dots_2 signup__dots_2 index-d"/>
            <img className="picture-s" src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"></img>
            <div className="blank-s"></div>
            <img className="line-1 signup__line_1 index-l" src={line1}></img>
            <img className="line-2 signup__line_2 index-l" src={line2}></img>
            </div>
                <div className="right-p-s">
                <span className="title-s">SIGNUP</span>
                <form> 
                <div className="forms-s">
                    
                    <input name="fullname" className="form-1-si" type="text" placeholder="  Full Name" value={fullname} onChange={(e)=>{setFullName(e.target.value)}} required></input>
                    <label>
                    <input name="email" className="form-1-si" type="email" placeholder="  Email Id" value={email} onChange={(e)=>{setEmail(e.target.value)}} required></input>
                    </label>
                    <span className="form-div">
                    <input className="form-3-si" type="text" placeholder="  Mobile No." value={mobile} onChange={(e)=>{setMobile(e.target.value)}} required></input>
                    <input className="form-3-si" type="text" placeholder="  Subject" value={mobile} onChange={(e)=>{setMobile(e.target.value)}} required></input>
                    </span>
                    <input className="form-1-si" type="text" placeholder="  School Name" value={school} onChange={(e)=>{setSchool(e.target.value)}} required></input>
                    <label>
                    <input name="password" className="form-1-si" type="password" placeholder="  Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required></input>
                    </label>
                    
                </div>

                <button onClick={(e)=>handleSignUp(e)}className="final-btn-s">SignUp</button>
                </form>
               <Link to="/login"><span className="footer-s">Already have an account? Login Now</span></Link>

                </div>
                </div>
        </div>
    )
}

export default withRouter(TeacherSignup);
