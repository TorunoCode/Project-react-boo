import "./newShowing.css";
import TopBar from "../../components/topbar/TopBar";
import Sidebar from "../../components/sidebar/Sidebar";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { addShowing } from "../../../../redux/apiRequest";
export default function NewProduct() {
  const [cinema, setCinema] = useState([]);
  const [listmovie, setlistMovie] = useState([]);
  const [cinemaHall, setCinemaHall] = useState([]);
  const [idHall, setIdHall] = useState([]);
  const [idMovie, setIdMovie] = useState([]);
  const [price, setPrice] = useState([]);
  const [time, setTime] = useState([]);
  const [startTime, setStartTime] = useState([]);
  const [image, setImage] = useState([]);
  const [status, setStatus] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddShowing = (e) => {
    e.preventDefault();
    const newShowing = {
      idHall: idHall,
      idMovie: idMovie,
      price: price,
      startTime: startTime,
      time: time,
      image: image,
      status: status
    };
    
    addShowing(newShowing, dispatch,toast, navigate);
  };
  useEffect(() => {
    const fetchMovies = async () => {
      const {data} = await axios.get("http://localhost:5000/api/movies");
      setlistMovie(data);
    };
    const fetchCinemas = async () => {
      const {data} = await axios.get("http://localhost:5000/api/movies/cinemas");
      setCinema(data);
    };
    const fetchCinemaHalls = async () => {
      const {data} = await axios.get("http://localhost:5000/api/movies/cinemaHalls");
      setCinemaHall(data);
    };
    fetchCinemaHalls();
    fetchCinemas();
    fetchMovies();
  }, []);
  return (
    <div className="body">
      <TopBar />
      <div className="container">
        <Sidebar />
        <div className="newProduct">
          <h1 className="addProductTitle">Add Show</h1>
          <div>
            <form  className="addProductForm" onSubmit={handleAddShowing}>
              <div className="table">
                <div className="info">    
                <div className="select">
                  <select placeholder="Upload Image"  className="select form-control">
                  <option>Select Cinema</option>
                  {cinema.map((items) => (
                  <option value={items.name} key={items.value}>{items.name}</option>
                 ))} 
                  </select>
                 
                </div>            
                <div className="select">
                  
                  <select className="select form-control"  onChange={(e)=>{ setIdMovie(e.target.value); setImage(e.target.getAttribute('name'))}} >
                  <option  disabled={true}>Select Movie</option>
                  {listmovie.map((items) => (
                  <option name={items.image} key={items.value} value={items._id}>{items.name}</option>
                 ))} 
                  </select>
                  <select placeholder="Select Actor" className="form-control"  onChange={(e)=>{ setIdHall(e.target.value)}}>
                  <option disabled={true}>Select Room</option>
                  {cinemaHall.map((items) => (
                  <option key={items.value} value={items._id}>{items.name}</option>
                 ))} 
                  </select>
                </div>
                
                <input placeholder="Movie Duration" className="form-control" type="date"  onChange={(e)=>{ setStartTime(e.target.value)}}/>
                <input placeholder="Movie Price" className="form-control"  onChange={(e)=>{ setPrice(e.target.value)}}/>
                <input type="time" name="time"  onChange={(e)=>{ setTime(e.target.value)}}/>
                </div>
                <div className="info">
                  <div className="video"></div>
                </div>
                </div>
               
                <div className="infoo">
              </div>

              
              <div className="submit">
                <button className="addProductButton" onClick={handleAddShowing}>Create</button>
                <button className="addProductButton">Cancel</button>
              </div>
              
            </form>
            <div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
