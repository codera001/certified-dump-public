import React from "react";
import Layout from "../components/Layout/Layout";
import ChangePassword from "./change_password/ChangePassword";
import "./Profile.css";
import { BsGenderMale, BsGenderFemale } from "react-icons/bs";
import { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
const Profile = () => {
  const [genderBtn, setGenderBtn] = useState(true);
  const [femaleBtn, setFemaleBtn] = useState(true);
  const [changePass, setChangePass] = useState(false);
  const ShowChangePass = () => {
    setChangePass(true);
  };
  const HideChangePass = () => {
    setChangePass(false);
  };
  const FemaleActiveGender = () => {
    setFemaleBtn(false);
    console.log("yes");
  };
  const ActiveGender = () => {
    setGenderBtn(false);
    console.log("yes");
  };
  return (
    <Layout>
      <div className="profile-wrapper">
        <div className="profile-heading">
          <h1>Personal Information</h1>
          <p>
            Your privacy matters to us. We handle your personal information with
            utmost care and in accordance with our Privacy Policy.
          </p>
        </div>
        <div className="profile-pic">
          <BiUserCircle className="profile-image" />
        </div>
        <div className="account-details">
          <h2>Denis Holland</h2>
          <p>$50.00</p>
          <p>Balance</p>
        </div>
        <form action="">
          <div className="profile-info">
            <div className="input-box">
              <input type="text" required="required" />
              <span>First Name</span>
            </div>
            <div className="input-box">
              <input type="text" required="required" />
              <span>Last Name</span>
            </div>
          </div>
          <div className="input-box" id="email">
            <input type="text" required="required" />
            <span>Email</span>
          </div>
          <div className="profile-info">
            <div className="input-box">
              <input
                type="number"
                required="required"
                placeholder="(+33) - - - - - - -"
              />
            </div>
            <div className="input-box">
              <input type="date" />
            </div>
          </div>
          <div className="gender-button">
            <button onClick={ActiveGender}>
              <BsGenderMale />
              <p>Male</p>
            </button>

            <button onClick={FemaleActiveGender}>
              <BsGenderFemale />
              <p>Female</p>
            </button>
          </div>
          <div>
            <button className="change-password-btn" onClick={ShowChangePass}>
              Change Password
            </button>
            {changePass && <ChangePassword HideChangePass={HideChangePass} />}
          </div>
          <div className="note-before">
            <p>
              In order to access some features from the service, you will have
              to fill out your account details.
            </p>
          </div>
          <div className="button-row">
            <div className="save-cancel-button">
              <button className="save-button">Save</button>
              <button className="cancel-button">Cancel</button>
            </div>
            <div className="delete-button">
              <button>Delete Account</button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Profile;
