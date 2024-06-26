import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Swal from 'sweetalert2';
import LoginSchema from './schema/LoginSchema';
import { useDispatch, useSelector } from 'react-redux';
import { AddUsers } from '../../Redux/Slices/userSlice';
import { getAllData } from '../../Service/requests';
import back from '../../assets/images/home-n1-footer-0.png';
import pets from '../../assets/images/c-s-1.png';
import './login.scss';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector(state => state.user.arr);

  useEffect(() => {
    getAllData("users").then((res) => {
      dispatch(AddUsers(res));
    });
  }, [dispatch]);

  const handleSubmit = async (values) => {
    const user = users.find(elem => (elem.email === values.username || elem.username === values.username) && elem.password === values.password);

    if (user) {
      try {
        const res = await axios.post("http://localhost:3000/auth/login", {
          usernameOrEmail: values.username,
          password: values.password
        });
  
        if (res.status === 200) {
          const token = res.data;
          localStorage.setItem("token", JSON.stringify(token));
          localStorage.setItem("user", JSON.stringify(user));
          if (user.role === "groomer" || user.role === "veterinar") {
            navigate("/work");
          } else {
            navigate("/");
          }
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Login Error',
        text: 'Invalid username or password.',
      });
    }
  };


  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
                <div className='row' >
                  <label htmlFor='password'>Password</label>
                  <div className='password-input'>
                    <Field
                      
                      type={showPassword ? 'text' : 'password'}
                      id='password'
                      name='password'
                      required
                      
                    />
                    <FontAwesomeIcon
                     
                     icon={showPassword ? faEyeSlash : faEye}
                      className='toggle-password'
                      onClick={togglePasswordVisibility}
                    />
                  </div>
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
