import React, { useEffect, useRef, useState } from "react";
import paw from "../../assets/images/pngwing.com (29).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRightFromBracket,
  faCamera,
  faEye,
  faEyeSlash,
  faGear,
  faPen,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import "./profile.scss";
import { Link } from "react-router-dom";
import { getAllData, patchData } from "../../Service/requests";
import { useDispatch, useSelector } from "react-redux";
import { AddVeterinars } from "../../Redux/Slices/veterinarSlice";
import { AddGroomers } from "../../Redux/Slices/groomerSlice";
import { UpdateUser } from "../../Redux/Slices/userSlice";
import Swal from 'sweetalert2';

const Profile = () => {
  let user = JSON.parse(localStorage.getItem("user"));

  const [showPassword, setShowPassword] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();
  const veterinars = useSelector((state) => state.veterinar.arr);
  const groomers = useSelector((state) => state.groomer.arr);
  const [right, setRight] = useState(localStorage.getItem("selectedTab") || "Info");
  const editName = useRef()
  const editSurname = useRef()
  const editUsername = useRef()
  const editEmail = useRef()
  const editPassword= useRef()



  useEffect(() => {
    getAllData("veterinars").then((res) => {
      dispatch(AddVeterinars(res));
    });
  }, [dispatch]);
  useEffect(() => {
    getAllData("groomers").then((res) => {
      dispatch(AddGroomers(res));
    });
  }, [dispatch]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogOut = () => {
    localStorage.setItem("user", JSON.stringify(null));
    window.scrollTo(0, 0);
  };
  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        setSelectedImage(reader.result);

        try {
          await patchData("users", user._id, { image: reader.result });
          const updatedUser = { ...user, image: reader.result };
          localStorage.setItem("user", JSON.stringify(updatedUser));
        } catch (error) {
          console.error(error);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const findAppointments = (arr) => {
    return arr.flatMap((elem) =>
      elem.randevus
        .filter((el) => el.id === user._id)
        .map((el) => ({
          ...el,
          docName: `${elem.name} ${elem.surname}`,
          docType: arr === veterinars ? "Veterinarian" : "Groomer",
        }))
    );
  };

  const handleStatus = () => {
    const vetAppointments = findAppointments(veterinars);
    const groomerAppointments = findAppointments(groomers);
    return [...vetAppointments, ...groomerAppointments];
  };

  const handleSaveSettings = async (e) => {
    e.preventDefault()
    const newName = editName.current.value;
    const newSurname = editSurname.current.value;
    const newUsername = editUsername.current.value;
    const newEmail = editEmail.current.value;
    const newPassword = editPassword.current.value;
  
    try {
      await patchData("users", user._id, {
        name: newName,
        surname: newSurname,
        username: newUsername,
        password: newPassword,
        email: newEmail
      });
      const updatedUser = {
        ...user,
        name: newName,
        surname: newSurname,
        username: newUsername,
        password: newPassword,
        email: newEmail
      };

     
      localStorage.setItem("user", JSON.stringify(updatedUser));
      dispatch(UpdateUser(user))
      Swal.fire({
        icon: 'success',
        title: 'Profile Successful',
        text: 'Your profile is successfully edited',
    });
    } catch (error) {
      console.error(error);
    }
  };
  

  const rightSide = () => {
    switch (right) {
      case "Info":
        return (
          <div className="infos">
            <div className="info">
              <label htmlFor="name">Name</label>
              <input value={user.name} type="text" id="name" disabled />
            </div>
            <div className="info">
              <label htmlFor="surname">Surname</label>
              <input value={user.surname} type="text" id="surname" disabled />
            </div>
            <div className="info">
              <label htmlFor="username">Username</label>
              <input value={user.username} type="text" id="username" disabled />
            </div>
            <div className="info">
              <label htmlFor="email">Email</label>
              <input value={user.email} type="email" id="email" disabled />
            </div>
        
          </div>
        );
      case "My Orders":
        return (
          <div className="orders">
            {user.orders == [] ? (
              <div className="loader">
                <div className="truckWrapper">
                  <div className="truckBody">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 198 93"
                      className="trucksvg"
                    >
                      <path
                        strokeWidth={3}
                        stroke="#282828"
                        fill="#F83D3D"
                        d="M135 22.5H177.264C178.295 22.5 179.22 23.133 179.594 24.0939L192.33 56.8443C192.442 57.1332 192.5 57.4404 192.5 57.7504V89C192.5 90.3807 191.381 91.5 190 91.5H135C133.619 91.5 132.5 90.3807 132.5 89V25C132.5 23.6193 133.619 22.5 135 22.5Z"
                      />
                      <path
                        strokeWidth={3}
                        stroke="#282828"
                        fill="#7D7C7C"
                        d="M146 33.5H181.741C182.779 33.5 183.709 34.1415 184.078 35.112L190.538 52.112C191.16 53.748 189.951 55.5 188.201 55.5H146C144.619 55.5 143.5 54.3807 143.5 53V36C143.5 34.6193 144.619 33.5 146 33.5Z"
                      />
                      <path
                        strokeWidth={2}
                        stroke="#282828"
                        fill="#282828"
                        d="M150 65C150 65.39 149.763 65.8656 149.127 66.2893C148.499 66.7083 147.573 67 146.5 67C145.427 67 144.501 66.7083 143.873 66.2893C143.237 65.8656 143 65.39 143 65C143 64.61 143.237 64.1344 143.873 63.7107C144.501 63.2917 145.427 63 146.5 63C147.573 63 148.499 63.2917 149.127 63.7107C149.763 64.1344 150 64.61 150 65Z"
                      />
                      <rect
                        strokeWidth={2}
                        stroke="#282828"
                        fill="#FFFCAB"
                        rx={1}
                        height={7}
                        width={5}
                        y={63}
                        x={187}
                      />
                      <rect
                        strokeWidth={2}
                        stroke="#282828"
                        fill="#282828"
                        rx={1}
                        height={11}
                        width={4}
                        y={81}
                        x={193}
                      />
                      <rect
                        strokeWidth={3}
                        stroke="#282828"
                        fill="#DFDFDF"
                        rx="2.5"
                        height={90}
                        width={121}
                        y="1.5"
                        x="6.5"
                      />
                      <rect
                        strokeWidth={2}
                        stroke="#282828"
                        fill="#DFDFDF"
                        rx={2}
                        height={4}
                        width={6}
                        y={84}
                        x={1}
                      />
                    </svg>
                  </div>
                  <div className="truckTires">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 30 30"
                      className="tiresvg"
                    >
                      <circle
                        strokeWidth={3}
                        stroke="#282828"
                        fill="#282828"
                        r="13.5"
                        cy={15}
                        cx={15}
                      />
                      <circle fill="#DFDFDF" r={7} cy={15} cx={15} />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 30 30"
                      className="tiresvg"
                    >
                      <circle
                        strokeWidth={3}
                        stroke="#282828"
                        fill="#282828"
                        r="13.5"
                        cy={15}
                        cx={15}
                      />
                      <circle fill="#DFDFDF" r={7} cy={15} cx={15} />
                    </svg>
                  </div>
                  <div className="road" />
                  <svg
                    xmlSpace="preserve"
                    viewBox="0 0 453.459 453.459"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                    id="Capa_1"
                    version="1.1"
                    fill="#000000"
                    className="lampPost"
                  >
                    <path
                      d="M252.882,0c-37.781,0-68.686,29.953-70.245,67.358h-6.917v8.954c-26.109,2.163-45.463,10.011-45.463,19.366h9.993
        c-1.65,5.146-2.507,10.54-2.507,16.017c0,28.956,23.558,52.514,52.514,52.514c28.956,0,52.514-23.558,52.514-52.514
        c0-5.478-0.856-10.872-2.506-16.017h9.992c0-9.354-19.352-17.204-45.463-19.366v-8.954h-6.149C200.189,38.779,223.924,16,252.882,16
        c29.952,0,54.32,24.368,54.32,54.32c0,28.774-11.078,37.009-25.105,47.437c-17.444,12.968-37.216,27.667-37.216,78.884v113.914
        h-0.797c-5.068,0-9.174,4.108-9.174,9.177c0,2.844,1.293,5.383,3.321,7.066c-3.432,27.933-26.851,95.744-8.226,115.459v11.202h45.75
        v-11.202c18.625-19.715-4.794-87.527-8.227-115.459c2.029-1.683,3.322-4.223,3.322-7.066c0-5.068-4.107-9.177-9.176-9.177h-0.795
        V196.641c0-43.174,14.942-54.283,30.762-66.043c14.793-10.997,31.559-23.461,31.559-60.277C323.202,31.545,291.656,0,252.882,0z
        M232.77,111.694c0,23.442-19.071,42.514-42.514,42.514c-23.442,0-42.514-19.072-42.514-42.514c0-5.531,1.078-10.957,3.141-16.017
        h78.747C231.693,100.736,232.77,106.162,232.77,111.694z"
                    />
                  </svg>
                </div>
              </div>
            ) : (
              <div className="orders">
              {user.orders.map(order => {
                const totalSum = order.reduce((sum, elem) => {
                  return sum + elem.count * (elem.price - (elem.price * elem.discount / 100));
                }, 0);
            
                return (
                  <div className="order">
                    <div className="left">
                      {order.map(elem => (
                    <h5 key={elem.id}>{elem.title} - {elem.count} - {Math.round((elem.count * (elem.price - (elem.price * elem.discount / 100))) * 100) / 100} $</h5>
                      ))}
                    </div>
                    <div className="right">
                      <h4>SUM - {(Math.round(totalSum * 100) / 100)+5} $</h4>
                    </div>
                  </div>
                );
              })}
            </div>
            
            )}
          </div>
        );
        case "Notifications":
          const appointments = handleStatus();
          return (
            <div className="messages">
              {appointments.length === 0 ? (
                <p style={{color:"gray", fontSize:"2rem"}}>
                  No notifications
                </p>
              ) : (
                appointments.map((appointment, index) => (
                  appointment.status && (
                    <div
                      className="message"
                      key={index}
                      style={
                        appointment.status === "Accepted"
                          ? { backgroundColor: "rgb(80, 194, 80)" }
                          : { backgroundColor: "red" }
                      }
                    >
                      <div className="info__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          viewBox="0 0 24 24"
                          height={24}
                          fill="none"
                        >
                          <path
                            fill="#393a37"
                            d="m12 1.5c-5.79844 0-10.5 4.70156-10.5 10.5 0 5.7984 4.70156 10.5 10.5 10.5 5.7984 0 10.5-4.7016 10.5-10.5 0-5.79844-4.7016-10.5-10.5-10.5zm.75 15.5625c0 .1031-.0844.1875-.1875.1875h-1.125c-.1031 0-.1875-.0844-.1875-.1875v-6.375c0-.1031.0844-.1875.1875-.1875h1.125c.1031 0 .1875.0844.1875.1875zm-.75-8.0625c-.2944-.00601-.5747-.12718-.7808-.3375-.206-.21032-.3215-.49305-.3215-.7875s.1155-.57718.3215-.7875c.2061-.21032.4864-.33149.7808-.3375.2944.00601.5747.12718.7808.3375.206.21032.3215.49305.3215.7875s-.1155.57718-.3215.7875c-.2061.21032-.4864.33149-.7808.3375z"
                          />
                        </svg>
                      </div>
                      <div className="info__title">
                        {appointment.docType} - {appointment.docName} is {appointment.status}
                        {` your randevu`} {appointment.status === "Accepted" ? ` on ${appointment.date} at ${appointment.time}` : ` please choose another time`}
                      </div>
                      
                    </div>
                  )
                ))
              )}
            </div>
          );
            case "Settings":
        return (
          <form onSubmit={handleSaveSettings} className="infos">
            <div className="row">
            <div className="info">
              <label htmlFor="name">Name</label>
              <input ref={editName}  required defaultValue={user.name} type="text" id="name" />
            </div>
            <div className="info">
              <label htmlFor="surname">Surname</label>
              <input ref={editSurname}  required defaultValue={user.surname} type="text" id="surname" />
            </div>
            </div>
          <div className="row">
          <div className="info">
              <label htmlFor="username">Username</label>
              <input ref={editUsername}  required defaultValue={user.username} type="text" id="username" />
            </div>
            <div className="info">
              <label htmlFor="email">Email</label>
              <input ref={editEmail}  defaultValue={user.email} type="email" id="email" />
            </div>
          </div>
            <div className="info">
              <label htmlFor="password">Password</label>
              <div className="password-input">
                <input
                ref={editPassword} 
                required
                  defaultValue={user.password}
                  type={showPassword ? "text" : "password"}
                  id="password"
                />
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  className="toggle-password"
                  onClick={togglePasswordVisibility}
                />
              </div>
            </div>
      
            <button type="submit" className="save">Save</button>
          </form>
        );
      default:
        return null;
    }
  };
  useEffect(() => {
    localStorage.setItem("selectedTab", right);
  }, [right]);

  return (
    <section id="profile">
      <div className="container">
        <div className="title">
          <h3>My Profile</h3>
          <img src={paw} alt="paw" />
        </div>
        <div className="profile">
          <div className="left">
            <Link onClick={handleLogOut} to="/" className="logOut">
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </Link>
            <div className="top">
              <div className="profileBox">
                <label htmlFor="fileInput">
                  <img
                    src={selectedImage || user.image}
                    alt="Profile"
                    className="profileImage"
                  />
                  <input
                    type="file"
                    id="fileInput"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                  <FontAwesomeIcon icon={faCamera} className="camera" />
                </label>
              </div>
              <h4>{`${user.name} ${user.surname}`}</h4>
            </div>
            <div className="menu">
              <div className="row" onClick={() => setRight("Info")}>
                <FontAwesomeIcon icon={faUser} />
                Info
              </div>
              <div className="row" onClick={() => setRight("My Orders")}>
                <FontAwesomeIcon icon={faTruck} />
                My Orders
              </div>
              <div className="row" onClick={() => setRight("Notifications")}>
                <FontAwesomeIcon icon={faBell} />
                Notifications
              </div>
              <div className="row" onClick={() => setRight("Settings")}>
                <FontAwesomeIcon icon={faGear} />
                Settings
              </div>
            </div>
          </div>
          <div className="right">
            <h4>{right}</h4>
            {rightSide()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
