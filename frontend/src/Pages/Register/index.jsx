import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Swal from 'sweetalert2';
import RegisterSchema from './schema/RegisterSchema';
import back from '../../assets/images/home-n1-footer-0.png';
import pets from '../../assets/images/home-n1-footer-1.png';
import './register.scss';
import { useDispatch, useSelector } from "react-redux";
import { getAllData} from '../../Service/requests';
import { AddUsers, UpdateUser } from '../../Redux/Slices/userSlice';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Register = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  useEffect(() => {
    getAllData("users").then((res) => {
      dispatch(AddUsers(res));
    });
  }, [dispatch]);
  
  const users = useSelector(state => state.user.arr);
  const navigate = useNavigate()
  const handleSubmit = async (values, { setSubmitting }) => {
    const user = users.find(elem => elem.email === values.email || elem.username === values.username);
    if (!user) {
      try {
        await axios.post('http://localhost:3000/auth/register', values); 
        Swal.fire({
          icon: 'success',
          title: 'Registered successfully',
        });
        dispatch(UpdateUser(values));
        navigate("/login");
      } catch (error) {
        console.error('Error during registration:', error);
        Swal.fire({
          icon: 'error',
          title: 'Registration failed',
          text: 'An error occurred while registering. Please try again later.',
        });
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Cannot register',
        text: 'Email or Username already exists',
      });
    }
    setSubmitting(false);
  };

  return (
    <section id="register">
      <div className="container">
        <div className="login">
          <div className="top">
            <h3>Register</h3>
            <Link className="register" to="/login">Log in</Link>
          </div>
          <Formik
            initialValues={{
              name: '',
              surname: '',
              date: '',
              gender: '',
              email: '',
              username: '',
              password: '',
            }}
            validationSchema={RegisterSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="info">
                  <div className="row">
                    <label htmlFor="name">Name</label>
                    <Field type="text" id="name" name="name" required />
                    <ErrorMessage style={{color:"red"}} name="name" component="div" className="error" />
                  </div>
                  <div className="row">
                    <label htmlFor="surname">Surname</label>
                    <Field type="text" id="surname" name="surname" required />
                    <ErrorMessage style={{color:"red"}} name="surname" component="div" className="error" />
                  </div>
                </div>
                <div className="info">
                  <div className="row">
                    <label htmlFor="date">Date</label>
                    <Field max="2015-12-31" type="date" id="date" name="date" required />
                    <ErrorMessage style={{color:"red"}} name="date" component="div" className="error" />
                  </div>
                  <div className="radio-button-container">
                    <div className="radio-button">
                      <Field type="radio" className="radio-button__input" id="radio1" name="gender" value="Male" />
                      <label className="radio-button__label" htmlFor="radio1">
                        <span className="radio-button__custom" />
                        Male
                      </label>
                    </div>
                    <div className="radio-button">
                      <Field  type="radio" className="radio-button__input" id="radio2" name="gender" value="Female" />
                      <label className="radio-button__label" htmlFor="radio2">
                        <span className="radio-button__custom" />
                        Female
                      </label>
                    </div>
                  </div>
                  <ErrorMessage style={{color:"red"}} name="gender" component="div" className="error" />
                </div>
                <div className="row">
                  <label htmlFor="email">Email</label>
                  <Field type="email" id="email" name="email" required />
                  <ErrorMessage style={{color:"red"}} name="email" component="div" className="error" />
                </div>
                <div className="row">
                  <label htmlFor="username">Username</label>
                  <Field type="text" id="username" name="username" required />
                  <ErrorMessage style={{color:"red"}} name="username" component="div" className="error" />
                </div>
                <div className="row">
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
                <button type="submit" className="button" disabled={isSubmitting}>Register</button>
              </Form>
            )}
          </Formik>
          <div className="icons">
            <Link to="https://www.facebook.com/" target="_blank" className="icon">
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link to="https://www.instagram.com/" target="_blank" className="icon">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link to="https://x.com/?lang=en" target="_blank" className="icon">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
          </div>
        </div>
        <div className="pets">
          <img src={pets} alt="Pets" />
        </div>
      </div>
      <div className="back">
        <img src={back} alt="Background" />
      </div>
    </section>
  );
};

export default Register;
