import React from "react";

import DataTable from "../../components/dataTable/DataTable";
import Navbar from "../../layouts/navbar/Navbar";
import Sidebar from "../../layouts/sidebar/Sidebar";
import "./list.scss";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="list-container">
        <Navbar />
        <DataTable />
      </div>
    </div>
  );
};

export default List;
