import "./newProduct.css";
import TopBar from "../../components/topbar/TopBar";
import Sidebar from "../../components/sidebar/Sidebar";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function NewProduct() {
  useEffect(() => {
    const fetchGenres = async () => {
      const {data} = await axios.get("/api/genre/genres");
      fetchGenres(data);
    };
    fetchGenres();
  }, []);
  return (
    <div className="body">
      <TopBar />
      <div className="container">
        <Sidebar />
        <div className="newProduct">
          <h1 className="addProductTitle">Add Movie</h1>
          <div>
            <form action="" class="addProductForm">
              <div className="table">
                <div className="info">
                <input placeholder="Title" className="title form-control" />{" "}                
                <div className="infoo">
                <input placeholder="Upload Image" className="form-control"/>
                <input placeholder="Upload Video"  className="form-control"/>
                </div>
                <div className="select">
                  <select  className="select form-control" >
                  <option>Select Director</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="vw">VW</option>
                    <option value="audi">Audi</option>
                  </select>
                  <select placeholder="Select Actor" className="form-control">
                  <option>Select Actor</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="vw">VW</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
                <div className="select">
                  <select placeholder="Upload Image" className="select form-control">
                  <option>Select Genre</option>
                    <option value="saab">Saab</option>
                    <option value="vw">VW</option>
                    <option value="audi">Audi</option>
                  </select>
                 
                </div>
                <textarea placeholder="Description"></textarea>
                </div>
                <div className="info">
                  <div className="video"></div>
                </div>
                </div>
                <div className="infoo">
                <input placeholder="Release year" className="form-control"/>
                <select class="form-control" id="exampleFormControlSelect3"><option>Choose Language</option><option>English</option><option>Hindi</option><option>Tamil</option><option>Gujarati</option></select>
                </div>
                <input placeholder="Movie Duration" className="form-control"/>

              
              <div className="submit">
                <button class="addProductButton">Create</button>
                <button class="addProductButton">Cancel</button>
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
