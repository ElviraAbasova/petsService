import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  deleteDataById,
  getAllData,
  patchData,
  postData,
} from "../../../Service/requests";
import { useDispatch, useSelector } from "react-redux";
import RingLoader from "react-spinners/RingLoader";
import {
  AddUsers,
  DeleteUser,
  PostUser,
  UpdateUser,
} from "../../../Redux/Slices/userSlice";

const UserPanel = () => {
  const datas = useSelector((state) => state.user.arr);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [editModal, setEditModal] = useState(false);
  const [postModal, setPostModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [gender, setGender] = useState("");
  const [userType, setUserType] = useState("");

  let name = useRef();
  let surname = useRef();
  let email = useRef();
  let image = useRef();
  let username = useRef();
  let date = useRef();
  let balance = useRef();
  let password = useRef();

  useEffect(() => {
    getAllData("users").then((res) => {
      dispatch(AddUsers(res));
      setLoading(false);
    });
  }, [dispatch]);

  const handleEdit = (user) => {
    setCurrentUser({
      ...user,
      date: new Date(user.date).toISOString().split("T")[0],
    });
    setGender(user.gender);
    setUserType(user.user);
    setEditModal(true);
  };

  const handleCloseEdit = () => {
    setEditModal(false);
    setCurrentUser(null);
  };

  const handlePost = () => {
    setPostModal(true);
  };

  const handleClosePost = () => {
    setPostModal(false);
  };

  const handleDelete = (id) => {
    deleteDataById("users", id);
    dispatch(DeleteUser(id));
  };

  const handleSave = (id, e) => {
    e.preventDefault();
    let obj = {
      _id: id,
      name: name.current.value,
      surname: surname.current.value,
      email: email.current.value,
      username: username.current.value,
      image: image.current.value,
      date: date.current.value,
      gender: gender,
      user: userType,
      balance: balance.current.value,
      password: password.current.value,
    };
    patchData("users", id, obj);
    dispatch(UpdateUser(obj));
    handleCloseEdit();
  };

  const handleSavePost = async(e) => {
    e.preventDefault();
    let obj = {
      name: name.current.value,
      surname: surname.current.value,
      email: email.current.value,
      username: username.current.value,
      image: image.current.value,
      date: date.current.value,
      gender: gender,
      user: userType,
      balance: balance.current.value,
      password: password.current.value,
      basket: [],
      favorite: [],
      orders: [],
    };
    await postData("users", obj);
    dispatch(PostUser(obj));
    handleClosePost();



  };

  return (
    <section id="admin">
      <div className="container" >
        {loading ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <RingLoader color="#f47107" size={100} />
          </div>
        ) : (
          <>
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Profile</th>
                  <th>Name</th>
                  <th>Surname</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Gender</th>
                  <th>User</th>
                  <th>Date</th>
                  <th>Balance</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {datas &&
                  datas.map((item,index) => (
                    <tr key={index}>
                      <td>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="table-image"
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.surname}</td>
                      <td>{item.username}</td>
                      <td>{item.email}</td>
                      <td>{item.password}</td>
                      <td>{item.gender}</td>
                      <td>{item.user}</td>
                      <td>{new Date(item.date).toISOString().split("T")[0]}</td>
                      <td>{item.balance}</td>
                      <td>
                        <FontAwesomeIcon
                          className="edit"
                          onClick={() => handleEdit(item)}
                          icon={faPenToSquare}
                        />
                      </td>
                      <td onClick={() => handleDelete(item._id)}>
                        <FontAwesomeIcon className="trash" icon={faTrash} />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <button className="post" onClick={handlePost}>
              Post
            </button>
          </>
        )}
      </div>

      {editModal && currentUser && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseEdit}>
              &times;
            </span>
            <h3>Edit</h3>
            <form className="infos"  onSubmit={(e) => handleSave(currentUser._id, e)}>
              <div className="info">
                <label htmlFor="image">Image</label>
                <input
                  required
                  ref={image}
                  type="text"
                  id="image"
                  defaultValue={currentUser.image}
                />
              </div>
              <div className="info">
                <label htmlFor="name">Name</label>
                <input
                  required
                  ref={name}
                  type="text"
                  id="name"
                  defaultValue={currentUser.name}
                />
              </div>
              <div className="info">
                <label htmlFor="surname">Surname</label>
                <input
                  required
                  ref={surname}
                  type="text"
                  id="surname"
                  defaultValue={currentUser.surname}
                />
              </div>
              <div className="info">
                <label htmlFor="username">Username</label>
                <input
                  ref={username}
                  type="text"
                  id="username"
                  defaultValue={currentUser.username}
                />
              </div>
              <div className="info">
                <label htmlFor="email">Email</label>
                <input
                  required
                  ref={email}
                  type="email"
                  id="email"
                  defaultValue={currentUser.email}
                />
              </div>
              <div className="info">
                <label htmlFor="password">Password</label>
                <input
                  required
                  ref={password}
                  type="text"
                  id="password"
                  defaultValue={currentUser.password}
                />
              </div>
              <div className="info">
                <label htmlFor="gender">Gender</label>
                <div>
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    checked={gender === "male"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label htmlFor="male">Male</label>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    checked={gender === "female"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
              <div className="info">
                <label htmlFor="user">User</label>
                <div>
                  <input
                    type="radio"
                    id="admin"
                    name="user"
                    value="admin"
                    checked={userType === "admin"}
                    onChange={(e) => setUserType(e.target.value)}
                  />
                  <label htmlFor="admin">Admin</label>
                  <input
                    type="radio"
                    id="user"
                    name="user"
                    value="user"
                    checked={userType === "user"}
                    onChange={(e) => setUserType(e.target.value)}
                  />
                  <label htmlFor="user">User</label>
                  <input
                    type="radio"
                    id="veterinar"
                    name="user"
                    value="veterinar"
                    checked={userType === "veterinar"}
                    onChange={(e) => setUserType(e.target.value)}
                  />
                  <label htmlFor="veterinar">Veterinar</label>
                  <input
                    type="radio"
                    id="groomer"
                    name="user"
                    value="groomer"
                    checked={userType === "groomer"}
                    onChange={(e) => setUserType(e.target.value)}
                  />
                  <label htmlFor="groomer">Groomer</label>
                </div>
              </div>
              <div className="info">
                <label htmlFor="date">Date</label>
                <input
                  required
                  ref={date}
                  type="date"
                  id="date"
                  defaultValue={currentUser.date}
                />
              </div>
              <div className="info">
                <label htmlFor="balance">Balance</label>
                <input
                  required
                  ref={balance}
                  type="number"
                  id="balance"
                  min={0}
                  defaultValue={currentUser.balance}
                />
              </div>
              <button
                className="save"
               
              >
                Save
              </button>
            </form>
          </div>
        </div>
      )}

      {postModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClosePost}>
              &times;
            </span>
            <h3>Post</h3>
            <form className="infos" onSubmit={(e) => handleSavePost(e)}>
              <div className="info">
                <label htmlFor="image">Image</label>
                <input required ref={image} type="text" id="image" />
              </div>
              <div className="info">
                <label htmlFor="name">Name</label>
                <input required ref={name} type="text" id="name" />
              </div>
              <div className="info">
                <label htmlFor="surname">Surname</label>
                <input required ref={surname} type="text" id="surname" />
              </div>
              <div className="info">
                <label htmlFor="username">Username</label>
                <input required ref={username} type="text" id="username" />
              </div>
              <div className="info">
                <label htmlFor="email">Email</label>
                <input required ref={email} type="email" id="email" />
              </div>
              <div className="info">
                <label htmlFor="password">Password</label>
                <input required ref={password} type="text" id="password" />
              </div>
              <div className="info">
                <label htmlFor="gender">Gender</label>
                <div>
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label htmlFor="male">Male</label>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
              <div className="info"> 
                <label htmlFor="user">User</label>
                <div>
                  <input
                    type="radio"
                    id="admin"
                    name="user"
                    value="admin"
                    onChange={(e) => setUserType(e.target.value)}
                  />
                  <label htmlFor="admin">Admin</label>
                  <input
                    type="radio"
                    id="user"
                    name="user"
                    value="user"
                    onChange={(e) => setUserType(e.target.value)}
                  />
                  <label htmlFor="user">User</label>
                  <input
                    type="radio"
                    id="veterinar"
                    name="user"
                    value="veterinar"
                    onChange={(e) => setUserType(e.target.value)}
                  />
                  <label htmlFor="veterinar">Veterinar</label>
                  <input
                    type="radio"
                    id="groomer"
                    name="user"
                    value="groomer"
                    onChange={(e) => setUserType(e.target.value)}
                  />
                  <label htmlFor="groomer">Groomer</label>
                </div>
              </div>
              <div className="info">
                <label htmlFor="date">Date</label>
                <input required ref={date} type="date" id="date" />
              </div>
              <div className="info">
                <label htmlFor="balance">Balance</label>
                <input required ref={balance} type="number" id="balance" min={0} />
              </div>
              <button className="save" >
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default UserPanel;
