import React, { useEffect, useState } from "react";
import "./work.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faPenToSquare, faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllData, patchData } from "../../Service/requests";
import { AddVeterinars } from "../../Redux/Slices/veterinarSlice";
import { AddGroomers } from "../../Redux/Slices/groomerSlice";
import { AddUsers } from "../../Redux/Slices/userSlice";
import CircleLoader from "react-spinners/CircleLoader";
const Work = () => {
  const dispatch = useDispatch();
  let profile = JSON.parse(localStorage.getItem("user"));
  const [workers, setWorkers] = useState([]);
  const worker = workers.find((elem) => elem.name === profile.name);
  const [status, setStatus] = useState("");
  const [detail, setDetail] = useState(""); 
  const users = useSelector(state=> state.user.arr)
  console.log(users);
  useEffect(() => {
    getAllData("users").then((res) => {
      dispatch(AddUsers(res));
      setLoading(false);

    });
  }, [dispatch]);
  
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
  }, [dispatch, profile.user]);

  const [DetailModal, setDetailModal] = useState(false);
  const [EditModal, setEditModal] = useState(false);
  const [loading, setLoading] = useState(true);


  const openDetailModal = (detail) => {
    setDetail(detail); 
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
   window.scrollTo(0, 0)
  };

  const updateStatus = (index, newStatus) => {
    const updatedRandevus = worker.randevus.map((r, i) =>
      i === index ? { ...r, status: newStatus } : r
    );
    const updatedWorker = { ...worker, randevus: updatedRandevus };

    patchData(profile.user + "s", updatedWorker._id, updatedWorker).then(() => {
      setWorkers((prevWorkers) =>
        prevWorkers.map((w) =>
          w._id === updatedWorker._id ? updatedWorker : w
        )
      );
    });
  };

  const handleUser=(id)=>{
    const user = users && users.find(elem => elem._id === id);
    return user ? user : { image: '' };
  
  }

  return (
    <section id="work">
      <div className="container">
        <div className="title">
          <h2 style={{ textTransform: "capitalize" }}>
            {profile.user} Work Page
          </h2>
          <FontAwesomeIcon icon={faUserDoctor} />
          <Link onClick={handleLogOut} to="/login" className="logOut">
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
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
        {loading ? (
           <div
           style={{
             display: "flex",
             alignItems: "center",
             justifyContent: "center",
             marginTop:"3rem"
           }}
         >
           <CircleLoader color="#53a8b6" size={120} />
         </div>
        ): (
         
          <table className="bottom">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Name Surname</th>
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
                worker.randevus.map((elem, index) => (
                  <tr key={index}>
                    <td className="firstRow"><div className="user"><img src={handleUser(elem.id).image} alt="" /></div></td>
                    <td>{`${elem.name} ${elem.surname ? elem.surname : ""}`}</td>
                    <td>{`${elem.pet ? elem.pet : elem.category}-${elem.petName}`}</td>
                    <td>{elem.phone}</td>
                    <td>{elem.email}</td>
                    <td>{elem.date}</td>
                    <td>{elem.time}</td>
                    <td>
                      {elem.packag ? (
                        elem.packag + " package"
                      ) : (
                        <button onClick={() => openDetailModal(elem.info)}>Detail</button>
                      )}
                    </td>
                    <td className="radio">
                      {elem.status === "Accepted" ? (
                        <span style={{ color: "green" }} className="accepted">
                          Accepted
                        </span>
                      ) : elem.status === "Rejected" ? (
                        <span style={{ color: "red" }} className="rejected">
                          Rejected
                        </span>
                      ) : (
                        <>
                          <div className="col">
                            <label htmlFor={`accept-${index}`}>Accept</label>
                            <input
                              value="Accepted"
                              name={`status-${index}`}
                              id={`accept-${index}`}
                              type="radio"
                              checked={status === "Accepted"}
                              onChange={() => updateStatus(index, "Accepted")}
                            />
                          </div>
                          <div className="col">
                            <label htmlFor={`reject-${index}`}>Reject</label>
                            <input
                              value="Rejected"
                              checked={status === "Rejected"}
                              onChange={() => updateStatus(index, "Rejected")}
                              name={`status-${index}`}
                              id={`reject-${index}`}
                              className="reject"
                              type="radio"
                            />
                          </div>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
      

        )}
          </div>
        
      </div>
      {DetailModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeDetailModal}>
              &times;
            </span>
            <h3>Details</h3>
            <textarea value={detail} readOnly rows={5}></textarea>
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
                <input defaultValue={profile.name} type="text" id="name" />
              </div>
              <div className="info">
                <label htmlFor="surname">Surname</label>
                <input defaultValue={profile.surname} type="text" id="surname" />
              </div>
              <div className="info">
                <label htmlFor="username">Username</label>
                <input defaultValue={profile.username} type="text" id="username" />
              </div>
              <div className="info">
                <label htmlFor="email">Email</label>
                <input
                  defaultValue={profile.email}
                  type="email"
                  id="email"
                />
              </div>
              <div className="info">
                <label htmlFor="password">Password</label>
                <input defaultValue={profile.password} type="password" id="password" />
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
