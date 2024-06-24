import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import RegisterSchema from './schema/RegisterSchema';
import back from '../../assets/images/home-n1-footer-0.png';
import pets from '../../assets/images/home-n1-footer-1.png';
import './register.scss';

const Register = () => {
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
            onSubmit={(values) => {

              console.log('Form values:', values);
            }}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
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
                    <Field type="date" id="date" name="date" required />
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
                      <Field type="radio" className="radio-button__input" id="radio2" name="gender" value="Female" />
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
                  <label htmlFor="password">Password</label>
                  <Field type="password" id="password" name="password" required />
                  <ErrorMessage style={{color:"red"}} name="password" component="div" className="error" />
                </div>
                <button type="submit" className="button">Register</button>
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
