import React, { useEffect, useState } from "react";
import "./work.scss";
import profile from "../../assets/images/c74eeb4e048db1ec522bd7ab2b5f611d.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllData, patchData } from "../../Service/requests";
import { AddVeterinars } from "../../Redux/Slices/veterinarSlice";
import { AddGroomers } from "../../Redux/Slices/groomerSlice";
const Work = () => {
  const dispatch = useDispatch();
  let profile = JSON.parse(localStorage.getItem("user"));
  const [workers, setWorkers] = useState([]);
  const worker = workers.find((elem) => elem.name == profile.name);
  const [status,setStatus]=useState("")
  console.log(worker);
  useEffect(() => {
    if (profile.user.toLowerCase() === "groomer") {
      getAllData("groomers").then((res) => {
        dispatch(AddGroomers(res));
        setWorkers(res);
      });
    } else if (profile.user.toLowerCase() === "veterinar") {
      getAllData("veterinars").then((res) => {
        dispatch(AddVeterinars(res));
        setWorkers(res);
      });
    }
  }, [dispatch]);

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
  const handleLogOut = () => {
    localStorage.setItem("user", JSON.stringify(null));
  };
 
  return (
    <section id="work">
      <div className="container">
        <div className="title">
          <h2 style={{ textTransform: "capitalize" }}>
            {profile.user} Work Page
          </h2>

          <FontAwesomeIcon icon={faUserDoctor} />
          <Link onClick={handleLogOut} to="/login" className="logOut">
            Log Out
          </Link>
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
              <h5 style={{ textTransform: "capitalize" }}>{profile.user}</h5>
            </div>
          </div>

          <table className="bottom">
            <thead>
              <tr>
                <th>Custumer</th>
                <th>Pet</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Date</th>
                <th>Time</th>
                <th>Detail</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {worker &&
                worker.randevus.map((elem) => {
                  return (
                    <tr>
                      <td>{`${elem.name} ${
                        elem.surname ? elem.surname : ""
                      }`}</td>
                      <td>{elem.pet}-{elem.petName}</td>
                      <td>{elem.phone}</td>
                      <td>{elem.email}</td>
                      <td>{elem.date}</td>
                      <td>{elem.time}</td>
                      <td>
                        {elem.packag ? elem.packag + " package" :  <button onClick={openDetailModal}>Detail</button>}
                       
                      </td>
                      <td className="radio">
                        <div className="col">
                          <label htmlFor="accept">Accept</label>
                          <input
                            value="accept"
                            name="status1"
                            id="accept"
                            type="radio"
                            checked={status === "Accepted"}
                            onChange={(e) => setStatus(e.target.value)}
                          />
                        </div>
                        <div className="col">
                          <label htmlFor="reject">Reject</label>
                          <input
                           value="reject"
                           checked={status === "Rejected"}
                           onChange={(e) => setStatus(e.target.value)}
                            name="status1"
                            id="reject"
                            className="reject"
                            type="radio"
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
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
                <input defaultValue="Elvira" type="text" id="name" />
              </div>
              <div className="info">
                <label htmlFor="surname">Surname</label>
                <input defaultValue="Abasova" type="text" id="surname" />
              </div>
              <div className="info">
                <label htmlFor="username">Username</label>
                <input defaultValue="elviraa" type="text" id="username" />
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
                <input defaultValue="+123" type="tel" id="tel" />
              </div>
              <div className="info">
                <label htmlFor="password">Password</label>
                <input defaultValue="helell" type="password" id="password" />
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
