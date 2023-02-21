import React, { useState } from "react";

import Navbar from "../../layouts/navbar/Navbar";
import Sidebar from "../../layouts/sidebar/Sidebar";

import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import "./new.scss";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    <div className="new">
      <Sidebar />
      <div className="new-container">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt="avater"
            />
          </div>
          <div className="right">
            <form>
              <div className="form-input">
                <label htmlFor="file">
                  Upload Image: <DriveFolderUploadIcon className="icon" />
                </label>
                <input
                  onChange={(e) => setFile(e.target.files[0])}
                  type="file"
                  name="image"
                  id="file"
                  style={{ display: "none" }}
                />
              </div>
              {inputs.map((input) => {
                return (
                  <div className="form-input" key={input.id}>
                    <label htmlFor="Username">{input.label}</label>
                    <input
                      type={input.type}
                      name="username"
                      placeholder={input.placeholder}
                    />
                  </div>
                );
              })}

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
