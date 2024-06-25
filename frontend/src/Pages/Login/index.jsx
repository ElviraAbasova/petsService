import back from "../../assets/images/home-n1-footer-0.png"
import pets from "../../assets/images/c-s-1.png"
import React, { useEffect } from 'react'
import "./login.scss"
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import LoginSchema from "./schema/LoginSchema";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from "react-redux";
import { AddUsers} from "../../Redux/Slices/userSlice";
import { getAllData, postData } from "../../Service/requests";
import axios from "axios";

const Login = () => {
    
        const navigate = useNavigate();
        const dispatch = useDispatch();
        useEffect(() => {
            getAllData("users").then((res) => {
              dispatch(AddUsers(res));

            });
          }, [dispatch]);
        const users = useSelector(state=>state.user.arr)
        console.log(users);
        const handleSubmit =async (values) => {
            const user = users.find(elem => (elem.email === values.username || elem.username === values.username) && elem.password === values.password);

            if (user) {
                try {
                    axios.post("http://localhost:3000/auth/login", values)
                    .then((res) => {
                        localStorage.setItem("token", res.data.token);
            
                    })
                    .catch((error) => {
                        console.error("Error during login:", error);
                        alert("Error during login");
                    });
    
                    if (user.user === "groomer" || user.user === "veterinar") {
                        navigate("/work");
                    } else {
                        navigate("/");
                    }
    
                    localStorage.setItem("user", JSON.stringify(user));
                } catch (error) {
                    console.error("Error during login:", error);
                    alert("Error during login");
                }
            } else {
                alert("Invalid username or password");
            }
        };
    
        return (
            <section id='login'>
                <div className='container'>
                    <div className='login'>
                        <div className='top'>
                            <h3>Log in</h3>
                            <Link to='/register' className='register'>
                                Register
                            </Link>
                        </div>
                        <Formik
                            initialValues={{ username: '', password: '' }}
                            validationSchema={LoginSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ handleSubmit }) => (
                                <Form onSubmit={handleSubmit}>
                                    <div className='row'>
                                        <label htmlFor='username'>Email or Username</label>
                                        <Field type='text' id='username' name='username' required />
                                        <ErrorMessage style={{ color: 'red' }} name='username' component='div' className='error' />
                                    </div>
                                    <div className='row'>
                                        <label htmlFor='password'>Password</label>
                                        <Field type='password' id='password' name='password' required />
                                        <ErrorMessage style={{ color: 'red' }} name='password' component='div' className='error' />
                                    </div>
                                    <Link className='forgot'>Forgot password?</Link>
                                    <button type='submit' className='button'>
                                        Log in
                                    </button>
                                </Form>
                            )}
                        </Formik>
                        <div className='icons'>
                            <Link to='https://www.facebook.com/' target='_blank' className='icon'>
                                <FontAwesomeIcon icon={faFacebookF} />
                            </Link>
                            <Link to='https://www.instagram.com/' target='_blank' className='icon'>
                                <FontAwesomeIcon icon={faInstagram} />
                            </Link>
                            <Link to='https://x.com/?lang=en' target='_blank' className='icon'>
                                <FontAwesomeIcon icon={faTwitter} />
                            </Link>
                        </div>
                    </div>
                    <div className='pets'>
                        <img src={pets} alt='Pets' />
                    </div>
                </div>
                <div className='back'>
                    <img src={back} alt='Background' />
                </div>
            </section>
        );
    };
    
    export default Login;
    