import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { auth, provider, db } from '../Firebase/Firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setUserLoginDetails, setSignoutState, selectUserEmail, selectUserName, selectUserPhoto } from '../../features/user/userSlice';


function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const username = useSelector(selectUserName);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [phone, setPhone] = useState();

    function setUser(user) {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        )
    }
    
    function handleAuthWithGoogle() {
        auth
            .signInWithPopup(provider)
            .then((result) => {

                setUser(result.user)
                navigate('/');

            }).catch((error) => {
                alert("Error");
            });
    }
    function handleAuthWithEmail(e) {
        e.preventDefault();
        console.log(firstName, '  ', lastName, "  ", phone);
        auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
            // Signed in 
            console.log(firstName,'  ',lastName,"  ",phone);
            db.collection("users").add({
                id: userCredential.user._delegate.uid,
                firstName: firstName,
                lastName: lastName,
                phone: phone
            }).then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
                navigate('/signin')
            }).catch((error) => {
                console.error("Error adding document: ", error);
            });
        })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
                // ..
            });
    }



    return (
        <Container>
            {/* <!-- sighn up ribborn --> */}
            <section class="bg-light ribbon">
                <div class="bg-light container">
                    <div class="row ac-ln-content ">
                        <div class="col-md-6 col-6">
                            <div class="pt-3 ribbon-covid-19 mb-1 col-md-12">
                                <h2 style={{ fontSize: "22px", fontWeight: "600" }}>Apple ID</h2>
                            </div>
                        </div>
                        <div class="col-md-6 col-6 text-center mt-3">
                            <a onClick={() => { navigate('/signin') }} style={{ float: "right", fontSize: "12px" }} class="text-dark ">Sign In</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- apple id banner --> */}
            <section class=" appleid-section bg-dark">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <div class="signup-text-container ">
                                <h1 class="appleid-text">Create Your Apple ID</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="sub-ribborn">
                <div class="container">
                    <div class="row">
                        <div style={{ paddingTop: "30px" }} class="col-md-12 ">
                            <div class="intro text-center">
                                <h6 class="intro-text  ">One Apple ID is all you need to access all Apple services. <br />
                                    You already have an Apple ID? <a >Find it here<i class="bi bi-chevron-right"></i>
                                    </a></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="mt-4">
                <div class="container">
                    <div class="row form-container ">
                        <div class=" col-md-12 text-center ">
                            <form onSubmit={handleAuthWithEmail} >
                                <div class="row text-center">
                                    <div class="  form-group col-md-6">
                                        <input type="text" onChange={(e) => { setFirstName(e.target.value) }} class="form-input-padding form-control" placeholder="first name"
                                            required />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <input type="text" onChange={(e) => { setLastName(e.target.value) }} class="form-input-padding form-control" placeholder="last name"
                                            required />
                                    </div>
                                    <div class="form-group col-md-12">
                                        <input type="email" onChange={(e) => { setEmail(e.target.value) }} class=" form-input-padding form-control"
                                            placeholder="name@example.com" required />
                                        <p class="m-1 text-secondary" style={{ textAlign: "left", fontSize: "15px" }}>This will be
                                            your new Apple ID.</p>
                                    </div>
                                    <div class="form-group col-md-12">
                                        <input type="password" onChange={(e) => { setPassword(e.target.value) }} id="password" class=" form-input-padding form-control"
                                            minlength="4" placeholder="password" />
                                        <p class="password-notmatch-text password-error-text"> The passwords you entered do not
                                            match.</p>
                                    </div>

                                    <div class="form-group col-md-12">
                                        <input type="password" id="confirm-password" class=" form-input-padding form-control"
                                            minlength="4" placeholder="confirm password" />
                                        <p class="password-notmatch-text confirm-password-error-text"> The passwords you entered
                                            do not match.</p>
                                    </div>

                                    <div class="form-group col-md-12">
                                        <input onChange={(e) => { setPhone(e.target.value) }} type="number" id="phone-number" class=" form-input-padding form-control"
                                            //   oninput="javascript: if (this.value.length > this.maxLength ) this.value = this.value.slice(0, this.maxLength);"
                                            placeholder="phone number" maxlength="10" minlength="10" />
                                        <p class="password-notmatch-text phone-error-text confirm-password-error-text"> </p>
                                    </div>
                                    <div class="col-md-12">
                                        <p class="text-secondary" style={{ fontSize: "15px !important", float: "left" }}>Make sure you
                                            enter a phone number you can always access.</p>
                                    </div>
                                    <div class="form-btn-container  col-md-12">
                                        <button
                                            class="form-submit-btn-style  btn btn-primary">Continue</button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <SignupWraper>
                <SignupButtons>
                    <Wrap onClick={handleAuthWithGoogle}>
                        <img src='/images/icons8-google-35.png' alt='' />
                        <span className='ml-1'>Google</span>
                    </Wrap>
                    <Wrap>
                        <img src='/images/124010.png' />
                        <span className='ml-1'>Facebook</span>
                    </Wrap>
                </SignupButtons>
            </SignupWraper>

        </Container>
    )
}
const Container = styled.div`
display:block;
`
const SignupWraper = styled.div`
display:block;
margin-top:22px;
`
const SignupButtons = styled.div`
display:flex;
justify-content: center;
align-items: center;
`
const Wrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin:10px;
display:inline;
border: 1px solid #a0a0a0;
padding: 8px 10px 8px 10px;
min-width: 112px;
font-size: 14px;
border-radius: 6px;
color: #000000;
overflow: hidden;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
cursor:pointer;
img{
    height: 28px;
    width: 28px;
    border-radius: 4px;
}
`

export default Signup