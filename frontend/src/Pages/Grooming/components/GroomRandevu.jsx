import React, { useEffect, useState } from "react";
import paw from "../../../assets/images/pngwing.com (29).png";
import cat from "../../../assets/images/c74eeb4e048db1ec522bd7ab2b5f611d.jpg";
import { getAllData, patchData } from "../../../Service/requests";
import { AddGroomers } from "../../../Redux/Slices/groomerSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
const GroomRandevu = () => {
  const [pet, setPet] = useState("");
  const [name, setName] = useState("");
  const [petName, setPetName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [groomer, setGroomer] = useState("");
  const [packag, setPackag] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  let user = JSON.parse(localStorage.getItem("user"));
  const groomers = useSelector((state) => state.groomer.arr);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllData("groomers").then((res) => {
      dispatch(AddGroomers(res));
    });
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let obj = {
      pet,
      name,
      petName,
      phone,
      email,
      packag,
      date,
      time,
    };
    if (!user) {
      Swal.fire({
        title: "Login Required",
        text: "You need to log in to get Randevu.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#f47107",
        cancelButtonColor: "#8D19E8",
        confirmButtonText: "Log in",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    } else {
      const find = groomers.find(elem => elem.name.toUpperCase() === groomer.toUpperCase());
      if (find) {
        const updated = { ...find, randevus: [...find.randevus, obj] };
        await patchData("groomers", find._id, updated);
        toast.success("Randevu is successfully!");
      }
      
      setPet("");
      setName("");
      setPetName("");
      setPhone("");
      setEmail("");
      setGroomer("");
      setPackag("");
      setDate("");
      setTime("");
    }
   
  };

  const today = new Date().toISOString().split("T")[0]; 

  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 9; hour <= 23; hour++) {
      const hourString = hour.toString().padStart(2, '0');
      options.push(<option key={hourString} value={`${hourString}:00`}>{`${hourString}:00`}</option>);
    }
    return options;
  };
  return (
    <section id="groomRandevu">
      <div className="container">
        <div className="title">
          <h3>Get A Randevu</h3>
          <img src={paw} alt="paw" />
        </div>
        <div className="randevu">
          <div className="left">
            <img src={cat} alt="cat" />
          </div>
          <form onSubmit={handleSubmit} action="">
            <div className="row">
              <p>Choose Pet</p>
              <div className="radios">
                <label className="radio-button">
                  <input
                    required
                    type="radio"
                    name="pet"
                    value="cat"
                    checked={pet === "cat"}
                    onChange={(e) => setPet(e.target.value)}
                  />
                  <span className="radio" />
                  Cat
                </label>
                <label className="radio-button">
                  <input
                  required
                    type="radio"
                    name="pet"
                    value="dog"
                    checked={pet === "dog"}
                    onChange={(e) => setPet(e.target.value)}
                  />
                  <span className="radio" />
                  Dog
                </label>
              </div>
            </div>
            <div className="names">
              <div className="row">
                <label htmlFor="name">Your Name</label>
                <input
                required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="input"
                  name="name"
                  type="text"
                />
              </div>
              <div className="row">
                <label htmlFor="petName">Pet Name</label>
                <input
                required
                  value={petName}
                  onChange={(e) => setPetName(e.target.value)}
                  placeholder="Pet Name"
                  className="input"
                  name="petName"
                  type="text"
                />
              </div>
            </div>
            <div className="names">
              <div className="row">
                <label htmlFor="phone">Your Phone</label>
                <input
                required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Your Phone"
                  className="input"
                  name="phone"
                  type="tel"
                />
              </div>
              <div className="row">
                <label htmlFor="email">Your Email</label>
                <input
                required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className="input"
                  name="email"
                  type="email"
                />
              </div>
            </div>
            <div className="radio-input">
              <input
              required
                value="Miranda"
                name="groomer"
                id="groom-1"
                type="radio"
                checked={groomer === "Miranda"}
                onChange={(e) => setGroomer(e.target.value)}
              />
              <label htmlFor="groom-1">Miranda Halim</label>
              <input
              required
                value="Rosalina"
                name="groomer"
                id="groom-2"
                type="radio"
                checked={groomer === "Rosalina"}
                onChange={(e) => setGroomer(e.target.value)}
              />
              <label htmlFor="groom-2">Rosalina William</label>
              <input
              required
                value="Kate"
                name="groomer"
                id="groom-3"
                type="radio"
                checked={groomer === "Kate"}
                onChange={(e) => setGroomer(e.target.value)}
              />
              <label htmlFor="groom-3">Kate Browni</label>
            </div>
            <div className="radio-input">
              <input
              required
                value="Basic"
                name="packag"
                id="value-1"
                type="radio"
                checked={packag === "Basic"}
                onChange={(e) => setPackag(e.target.value)}
              />
              <label htmlFor="value-1">Basic</label>
              <input
              required
                value="Advanced"
                name="packag"
                id="value-2"
                type="radio"
                checked={packag === "Advanced"}
                onChange={(e) => setPackag(e.target.value)}
              />
              <label htmlFor="value-2">Advanced</label>
              <input
              required
                value="Pro"
                name="packag"
                id="value-3"
                type="radio"
                checked={packag === "Pro"}
                onChange={(e) => setPackag(e.target.value)}
              />
              <label htmlFor="value-3">Pro</label>
            </div>
            <div className="names">
              <div className="row">
                <label htmlFor="date">Select Date</label>
                <input
                required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="input"
                  name="date"
                  type="date"
                  min={today}
                />
              </div>
              <div className="row">
                <label htmlFor="time">Select Time</label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="input"
                  name="time"
                  required
                >
                  <option value="">Select Time</option>
                  {generateTimeOptions()}
                </select>
              </div>
            </div>
            <button type="submit" className="submit">
              Send Randevu
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default GroomRandevu;
