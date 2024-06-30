import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Swal from "sweetalert2";
import { LoginSchema, ResetPasswordSchema } from "./schema/LoginSchema";
import { useDispatch, useSelector } from "react-redux";
import { AddUsers, UpdatePass } from "../../Redux/Slices/userSlice";
import { getAllData } from "../../Service/requests";
import back from "../../assets/images/home-n1-footer-0.png";
import pets from "../../assets/images/c-s-1.png";
import "./login.scss";
import axios from "axios";
import emailjs from "emailjs-com";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.arr);

  function generateRandomCode() {
    const min = 10000;
    const max = 99999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const initialCode = generateRandomCode();

  const [showPassword, setShowPassword] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [emaill, setEmail] = useState("");

  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);
  const [showResetPasswordForm, setShowResetPasswordForm] = useState(false);

  useEffect(() => {
    getAllData("users").then((res) => {
      dispatch(AddUsers(res));
    });
  }, [dispatch]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = () => {
    setForgotPassword(true);
  };

  const handleLoginSubmit = async (values) => {
    const user = users.find(
      (elem) =>
        (elem.email === values.username || elem.username === values.username) &&
        elem.password === values.password
    );

    if (user) {
      try {
        const res = await axios.post("http://localhost:3000/auth/login", {
          usernameOrEmail: values.username,
          password: values.password,
        });

        if (res.status === 200) {
          const token = res.data;
          localStorage.setItem("token", JSON.stringify(token));
          localStorage.setItem("user", JSON.stringify(user));
          if (user.user === "groomer" || user.user === "veterinar") {
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
        icon: "error",
        title: "Login Error",
        text: "Invalid username or password.",
      });
    }
  };

  const handleForgotPasswordSubmit = async (values) => {
    try {
      const res = await axios.post("http://localhost:3000/auth/resetPassword", {
        email: values.email,
      });

      if (res.status === 200) {
        setIsCodeModalOpen(true);
        setVerificationCode(initialCode);
        setEmail(values.email);
        Swal.fire({
          icon: "success",
          title: "Email Sent",
          text: "Please check your email for further instructions.",
        });

        const templateParams = {
          to_email: values.email,
          message: initialCode,
        };

        emailjs
          .send(
            "service_7nxm06n",
            "template_v71vrvs",
            templateParams,
            "BICDGqrcabRKWdXvt"
          )
          .then((response) => {
            console.log("Email successfully sent:", response);
          })
          .catch((error) => {
            console.error("Error sending email:", error);
          });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "There was an error processing your request. Please try again later.",
      });
    }
  };

  const handleVerifyCodeSubmit = (values) => {
    if (values.codeInput === verificationCode.toString()) {
      setIsCodeModalOpen(false);
      setShowResetPasswordForm(true);
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Incorrect verification code. Please try again.",
      });
    }
  };

  const handleResetPasswordSubmit = async (values) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/auth/updatePassword",
        {
          email: values.email,
          newPassword: values.newPassword,
        }
      );

      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Password Updated",
          text: "Your password has been updated successfully.",
        });
        setShowResetPasswordForm(false);
        setForgotPassword(false);
        dispatch(UpdatePass({
          email: values.email,
          password: values.newPassword,
        }));
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "There was an error updating your password. Please try again later.",
      });
    }
  };

  return (
    <section id="login">
      <div className="container">
        <div className="login">
          <div className="top">
            <h3>{forgotPassword ? "Forgot Password" : "Log in"}</h3>
            {!forgotPassword && (
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to="/register"
                className="register"
              >
                Register
              </Link>
            )}
          </div>
          {forgotPassword ? (
            <>
              <Formik
                initialValues={{ email: "" }}
                onSubmit={handleForgotPasswordSubmit}
              >
                {({ handleSubmit }) => (
                  <Form onSubmit={handleSubmit}>
                    <div className="row">
                      <label htmlFor="email">Email</label>
                      <Field type="email" id="email" name="email" required />
                      <ErrorMessage
                        style={{ color: "red" }}
                        name="email"
                        component="div"
                        className="error"
                      />
                    </div>
                    <button type="submit" className="button">
                      Next
                    </button>
                  </Form>
                )}
              </Formik>
              {isCodeModalOpen && (
                <div className="modal">
                  <div className="modal-content">
                    <h3>Enter Verification Code</h3>
                    <Formik
                      initialValues={{ codeInput: "" }}
                      onSubmit={handleVerifyCodeSubmit}
                    >
                      {({ handleSubmit }) => (
                        <Form onSubmit={handleSubmit}>
                          <div className="row">
                            <label htmlFor="codeInput">Verification Code</label>
                            <Field
                              type="text"
                              id="codeInput"
                              name="codeInput"
                              required
                            />
                          </div>
                          <button type="submit" className="button">
                            Verify Code
                          </button>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              )}
              {showResetPasswordForm && (
                <Formik
                  initialValues={{
                    email: emaill || "",
                    newPassword: "",
                    confirmPassword: "",
                  }}
                  validationSchema={ResetPasswordSchema}
                  onSubmit={handleResetPasswordSubmit}
                >
                  {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                      <div className="row">
                        <label htmlFor="newPassword">New Password</label>
                        <Field
                          type="password"
                          id="newPassword"
                          name="newPassword"
                          required
                        />
                        <ErrorMessage
                          style={{ color: "red" }}
                          name="newPassword"
                          component="div"
                          className="error"
                        />
                      </div>
                      <div className="row">
                        <label htmlFor="confirmPassword">
                          Confirm Password
                        </label>
                        <Field
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          required
                        />
                        <ErrorMessage
                          style={{ color: "red" }}
                          name="confirmPassword"
                          component="div"
                          className="error"
                        />
                      </div>
                      <button type="submit" className="button">
                        Reset Password
                      </button>
                    </Form>
                  )}
                </Formik>
              )}
            </>
          ) : (
            <Formik
              initialValues={{ username: "", password: "" }}
              validationSchema={LoginSchema}
              onSubmit={handleLoginSubmit}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <div className="row">
                    <label htmlFor="username">Email or Username</label>
                    <Field type="text" id="username" name="username" required />
                    <ErrorMessage
                      style={{ color: "red" }}
                      name="username"
                      component="div"
                      className="error"
                    />
                  </div>
                  <div className="row">
                    <label htmlFor="password">Password</label>
                    <div className="password-input">
                      <Field
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        required
                      />
                      <FontAwesomeIcon
                        icon={showPassword ? faEyeSlash : faEye}
                        className="toggle-password"
                        onClick={togglePasswordVisibility}
                      />
                    </div>
                    <ErrorMessage
                      style={{ color: "red" }}
                      name="password"
                      component="div"
                      className="error"
                    />
                  </div>
                  <Link className="forgot" onClick={handleForgotPassword}>
                    Forgot password?
                  </Link>
                  <button type="submit" className="button">
                    Log in
                  </button>
                </Form>
              )}
            </Formik>
          )}
          <div className="icons">
            <Link
              to="https://www.facebook.com/"
              target="_blank"
              className="icon"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link
              to="https://www.instagram.com/"
              target="_blank"
              className="icon"
            >
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

export default Login;
