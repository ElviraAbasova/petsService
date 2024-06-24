import React, { useState } from "react";
import "./work.scss";
import profile from "../../assets/images/c74eeb4e048db1ec522bd7ab2b5f611d.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faUserDoctor } from "@fortawesome/free-solid-svg-icons";
const Work = () => {
  let profile = JSON.parse(localStorage.getItem("user"))

    const [DetailModal, setDetailModal] = useState(false); 
    const [EditModal, setEditModal] = useState(false); 

  const openDetailModal = () => {
    setDetailModal(true);
  };

  const closeDetailModal = () => {
    setDetailModal(false);
  };
  const openEditModal = () => {
    setEditModal(true);
  };

  const closeEditModal = () => {
    setEditModal(false);
  };
  return (
    
    <section id="work">
      <div className="container">
        <div className="title">
          <h2 style={{textTransform:"capitalize"}}>{profile.user} Work Page</h2>

          <FontAwesomeIcon icon={faUserDoctor} />
        </div>
        <div className="work">
          <div className="top">
            <div className="profile">
              <img src={profile.image} alt="profile" />
            </div>
            <div className="about">
              <div className="edit">
                <h3>{`${profile.name} ${profile.surname}`}</h3>
                <FontAwesomeIcon icon={faPenToSquare} onClick={openEditModal} />
              </div>
              <h5 style={{textTransform:"capitalize"}}>{profile.user}</h5>
            </div>
          </div>

          <table className="bottom">
            <thead>
              <tr>
                <th>Custumer</th>
                <th>Pet</th>
                <th>Contact</th>
                <th>Date</th>
                <th>Time</th>
                <th>Detail</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="firstRow">
                  <div className="user">
                    <img src={profile} alt="" />
                  </div>
                  <h4>Elvira Abasova</h4>
                </td>
                <td>Cat-cat</td>
                <td>0388378373</td>
                <td>12.12.2024</td>
                <td>12:00</td>
                <td>
                <button onClick={openDetailModal}>Detail</button>
                </td>
                <td className="radio">
                  <div className="col">
                    <label htmlFor="accept">Accept</label>
                    <input name="status1" id="accept" className="accept" type="radio" />
                  </div>
                  <div className="col">
                    <label htmlFor="reject">Reject</label>
                    <input name="status1" id="reject" className="reject" type="radio" />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="firstRow">
                  <div className="user">
                    <img src={profile} alt="" />
                  </div>
                  <h4>Elvira Abasova</h4>
                </td>
                <td>Cat-cat</td>
                <td>0388378373</td>
                <td>12.12.2024</td>
                <td>12:00</td>
                <td>
                <button onClick={openDetailModal}>Detail</button>
                </td>
                <td className="radio">
                  <div className="col">
                    <label htmlFor="accept">Accept</label>
                    <input name="status2" id="accept" type="radio" />
                  </div>
                  <div className="col">
                    <label htmlFor="reject">Reject</label>
                    <input name="status2" id="reject" type="radio" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {DetailModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeDetailModal}>
              &times;
            </span>
            <h3>Details</h3>
            <textarea placeholder="Enter details..." rows={5}></textarea>
          </div>
        </div>
      )}
         {EditModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeEditModal}>
              &times;
            </span>
            <h3>Edit</h3>
            <div className="infos">
            <div className="info">
              <label htmlFor="name">Name</label>
              <input  defaultValue="Elvira" type="text" id="name"  />
            </div>
            <div className="info">
              <label htmlFor="surname">Surname</label>
              <input defaultValue="Abasova" type="text" id="surname"/>
            </div>
            <div className="info">
              <label htmlFor="username">Username</label>
              <input defaultValue="elviraa" type="text" id="username"  />
            </div>
            <div className="info">
              <label htmlFor="email">Email</label>
              <input
                defaultValue="elvira@gmail.com"
                type="email"
                id="email"
             
              />
            </div>
            <div className="info">
              <label htmlFor="tel">Phone</label>
              <input
                defaultValue="+123"
                type="tel"
                id="tel"
             
              />
            </div>
            <div className="info">
              <label htmlFor="password">Password</label>
              <input
                defaultValue="helell"
                type="password"
                id="password"
             
              />
            </div>
            <button className="save">Save</button>
            </div>
           
 
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
