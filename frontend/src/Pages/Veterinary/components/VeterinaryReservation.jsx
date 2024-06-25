import React, { useEffect, useState } from 'react';
import paw from "../../../assets/images/pngwing.com (29).png";
import cat from "../../../assets/images/h2-contact-img.png";
import { getAllData, patchData } from "../../../Service/requests"; 
import { useDispatch, useSelector } from 'react-redux';
import { AddVeterinars } from '../../../Redux/Slices/veterinarSlice';
import { ToastContainer, toast } from "react-toastify";

const VeterinaryReservation = () => {
  const [category, setCategory] = useState("");
  const [petName, setPetName] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [vet, setVet] = useState("");
  const [info, setInfo] = useState("");


  const veterinars = useSelector((state) => state.veterinar.arr);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllData("veterinars").then((res) => {
      dispatch(AddVeterinars(res));
    });
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let obj = {
      category,
      petName,
      name,
      surname,
      phone,
      email,
      date,
      time,
      info,
    };

    const find = veterinars.find(elem => elem.name.toUpperCase() === vet.toUpperCase());
    if (find) {
      const updated = { ...find, randevus: [...find.randevus, obj] };
      await patchData("veterinars", find._id, updated);
      toast.success("Randevu is successfully!");
    }

    setCategory("");
    setPetName("");
    setName("");
    setSurname("");
    setPhone("");
    setEmail("");
    setDate("");
    setTime("");
    setVet("");
    setInfo("");
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
    <div id="veterinaryRandevu">
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
            <div className="names">
              <div className="row">
                <label htmlFor="category">Pet Category</label>
                <input 
                  required
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Pet Category"
                  className="input"
                  name="category"
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
                <label htmlFor="surname">Your Surname</label>
                <input
                 required
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  placeholder="Your Surname"
                  className="input"
                  name="surname"
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
            <div className="radio-input">
              <input
               required
                value="Mary"
                name="vet"
                id="vet-1"
                type="radio"
                checked={vet === "Mary"}
                onChange={(e) => setVet(e.target.value)}
              />
              <label htmlFor="vet-1">Mary Rodgers</label>
              <input
               required
                value="Clark"
                name="vet"
                id="vet-2"
                type="radio"
                checked={vet === "Clark"}
                onChange={(e) => setVet(e.target.value)}
              />
              <label htmlFor="vet-2">Clark Hudson</label>
              <input
               required
                value="Sandra"
                name="vet"
                id="vet-3"
                type="radio"
                checked={vet === "Sandra"}
                onChange={(e) => setVet(e.target.value)}
              />
              <label htmlFor="vet-3">Sandra Kohn</label>
            </div>
            <div className="row">
              <label htmlFor="info">Enter Info</label>
              <textarea
               required
                value={info}
                onChange={(e) => setInfo(e.target.value)}
                style={{ maxWidth: "100%", height: "20rem", resize: "none" }}
                className="input textarea"
                placeholder="Please write problem of your pet"
              />
            </div>
            <button type="submit" className="submit">
              Send Randevu
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />

    </div>
  );
}

export default VeterinaryReservation;
