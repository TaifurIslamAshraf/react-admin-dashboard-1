import React from "react";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import List from "../../components/table/Table";
import Widget from "../../components/widget/Widget";

import Navbar from "../../layouts/navbar/Navbar";
import Sidebar from "../../layouts/sidebar/Sidebar";

import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={4 / 2} title="Last 6 months (Revenue)" />
        </div>
        <div className="list-container">
          <div className="list-title">Latest Transaction</div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
