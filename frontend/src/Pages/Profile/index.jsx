import React, { useState } from "react";
import paw from "../../assets/images/pngwing.com (29).png";
import profile from "../../assets/images/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";
import { faGear, faTruck } from "@fortawesome/free-solid-svg-icons";
import "./profile.scss";

const Profile = () => {
  let user = JSON.parse(localStorage.getItem("user"))
  const [right, setRight] = useState("Info");

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
              <input value="elviraa" type="text" id="username" disabled />
            </div>
            <div className="info">
              <label htmlFor="email">Email</label>
              <input
                value={user.email}
                type="email"
                id="email"
                disabled
              />
            </div>
          </div>
        );
      case "My Orders":
        return (
          <div className="orders">
          {user.orders ? (
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
            <p>No orders</p>
          )}
        </div>
        
        );
      case "Notifications":
        return ( 
          <div className="messages">
        <div className="message">
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
        <div className="info__title">lorem ipsum dolor sit amet</div>
        <div className="info__close">
          <svg
            height={20}
            viewBox="0 0 20 20"
            width={20}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
              fill="#393a37"
            />
          </svg>
        </div>
      </div>
      ;
    </div>)
      case "Settings":
        return  (
          <div className="infos">
            <div className="info">
              <label htmlFor="name">Name</label>
              <input  defaultValue={user.name} type="text" id="name"  />
            </div>
            <div className="info">
              <label htmlFor="surname">Surname</label>
              <input defaultValue={user.surname} type="text" id="surname"/>
            </div>
            <div className="info">
              <label htmlFor="username">Username</label>
              <input defaultValue={user.username} type="text" id="username"  />
            </div>
            <div className="info">
              <label htmlFor="email">Email</label>
              <input
                defaultValue={user.email}
                type="email"
                id="email"
             
              />
            </div>
            <div className="info">
              <label htmlFor="password">Password</label>
              <input
                defaultValue={user.password}
                type="password"
                id="password"
             
              />
            </div>
            <button className="save">Save</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="profile">
      <div className="container">
        <div className="title">
          <h3>My Profile</h3>
          <img src={paw} alt="paw" />
        </div>
        <div className="profile">
          <div className="left">
            <div className="top">
              <div className="profileBox">
                <img src={profile} alt="" />
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
