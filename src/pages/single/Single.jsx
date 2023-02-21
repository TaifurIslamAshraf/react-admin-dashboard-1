import React from "react";

import Chart from "../../components/chart/Chart";
import Navbar from "../../layouts/navbar/Navbar";
import Sidebar from "../../layouts/sidebar/Sidebar";
import "./single.scss";

import List from "../../components/table/Table";
import profile from "../../images/Taifur.jpg";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="single-container">
        <Navbar />
        <div className="top">
          <div className="left">
            <button className="edit-btn">Edit</button>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={profile} alt="profile" className="item-img" />
              <div className="details">
                <h2 className="details-title">Taifur Islam</h2>

                <div className="details-item">
                  <span className="item-key">Email:</span>
                  <span className="item-value">
                    Taifurislamashraf.bd@gmail.com
                  </span>
                </div>
                <div className="details-item">
                  <span className="item-key">Phone:</span>
                  <span className="item-value">+08801645120517</span>
                </div>
                <div className="details-item">
                  <span className="item-key">Addrass:</span>
                  <span className="item-value">Chandpur,Faridgang</span>
                </div>
                <div className="details-item">
                  <span className="item-key">Country:</span>
                  <span className="item-value">Bangladesh</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={6 / 2} title="User spending  (Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>

          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
