import React,{useState} from 'react';
import {db} from '../../Firebase/Firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setAdminLogin,selectAdmin,setSignoutState} from '../../../features/admin/adminSlice';
import {useNavigate} from 'react-router-dom';


function Login() {
    const [username,setUserName]=useState();
    const [password,setPassword]=useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const admin = useSelector(selectAdmin);

    function setAdmin() {
        dispatch(
            setAdminLogin({
                admin:true
            })
        )
    }

    function handleAdminLogin(e){
        e.preventDefault();
        console.log(username," ",password);
        db.collection("admin").where("username", "==", username).where("password", "==", password)
            .get()
            .then((querySnapshot) => {
                console.log(querySnapshot);
                querySnapshot.forEach((doc) => {
                    // setMovieDetails(doc.data())
                    console.log(doc.data());
                    localStorage.setItem('admin', JSON.stringify(true));
                    setAdmin();
                    navigate('/admin/dashboard');
                });
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });

    }
    
    return (
        <div>
            <title>Admin Login</title>
            {/* <!-- admin page styles for this template--> */}
            <link href="/admin/css/sb-admin-2.min.css" rel="stylesheet" />

            {/* <!-- admin Custom styles for this page --> */}
            <link href="/admin/vendor/datatables/dataTables.bootstrap4.min.css" rel="stylesheet" />

            {/* <body style="background-color: white; background-image: linear-gradient(180deg, white 10%, white 100%);"
                      class="bg-gradient-primary"> */}

            <div class="container">

                {/* <!-- Outer Row --> */}
                <div style={{marginTop: "107px"}} class="row justify-content-center">

                    <div class="col-xl-10 col-lg-12 col-md-9">

                        <div class="card o-hidden border-0 shadow-lg my-5">
                            <div class="card-body p-0">
                                {/* <!-- Nested Row within Card Body --> */}
                                <div class="row">
                                    <div class="col-lg-6 d-none d-lg-block bg-login-image">
                                        <img style={{ objectFit: "cover", height: "220px", margin: "13%", paddingLeft: "13%" }}
                                            src="/images/58763-logo-computer-apple-icons.png" alt="" />
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="p-5">
                                            <div class="text-center">
                                                <h1 class="h4 text-gray-900 mb-4 mt-3">Admin login</h1>
                                            </div>
                                            <form onSubmit={handleAdminLogin} class="user">
                                                <div class="form-group">
                                                    <input onChange={(e)=>{setUserName(e.target.value)}} style={{ padding: "21px", borderRadius: "8px" }} type="text" class="form-control form-control-user" id="username"
                                                        name="username" aria-describedby="emailHelp" placeholder="User name" required />
                                                </div>
                                                <div class="form-group">
                                                    <input onChange={(e)=>{setPassword(e.target.value)}} style={{padding: "21px" ,borderRadius: "8px"}} type="password" name="password"
                                                        class="form-control form-control-user" id="exampleInputPassword"
                                                        placeholder="Password" required />
                                                </div>
                                                <button type="submit"
                                                    class="p-2 btn btn-primary btn-user btn-block">
                                                    Login
                                                </button>
                                                {/* {{!-- < div class=" text-center m-3 login-google">
                                                          <a style="border-radius: 24px; border-color: #ffa9df; background-color: white; color: black; text-decoration: none;"
                                                              class="btn btn-success" href="/google"><img
                                                                  src="/images/icons8-google-35.png"> Google</a>
                                                  </div> --}} */}
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Login