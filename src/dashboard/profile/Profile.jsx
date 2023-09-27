import React from "react";
import Layout from "../components/Layout/Layout";
import ChangePassword from "./change_password/ChangePassword";
import "./Profile.css";
import { BsGenderMale, BsGenderFemale } from "react-icons/bs";
import { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import Countries from "./Countries";
import Phone from "./Phone";
import axios from "axios";
import toast from "react-hot-toast";

const Profile = () => {
  const uname = sessionStorage.getItem("username");
  const fname = sessionStorage.getItem("userFirstname");
  const lname = sessionStorage.getItem("userLastname");
  const email = sessionStorage.getItem("userEmail");
  let balance = sessionStorage.getItem("balance");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [changePass, setChangePass] = useState(false);

  const ShowChangePass = () => {
    setChangePass(true);
  };
  const HideChangePass = () => {
    setChangePass(false);
  };

  const updateData = async () => {
    try {
      const response = await axios.post(
        "https://api.certifieddump.com/api/edituser",
        {
          phone_no: `${localStorage.getItem("userCode")}${phoneNumber}`,
          dob: birthday,
          country: localStorage.getItem("userCountry"),
          userid: sessionStorage.getItem("userId"),
          gender: gender,
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );
      // console.log(response);
      toast.success("Profile update is successful!");
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <Layout>
      <div className="d-profile-wrapper">
        <div className="d-profile-heading">
          <h1>Personal Information</h1>
          <p>
            Your privacy matters to us. We handle your personal information with
            utmost care and in accordance with our Privacy Policy.
          </p>
        </div>
        <div className="d-profile-pic">
          <BiUserCircle className="d-profile-image" />
        </div>
        <div className="d-account-details">
          <h2>
            {fname} {lname}
          </h2>
          <p>Balance: ${Number(balance).toFixed(2)}</p>
        </div>
        <form action="">
          <div className="d-profile-info">
            <div className="d-input-box">
              <input type="text" required value={fname} readOnly />
            </div>
            <div className="d-input-box">
              <input type="text" value={lname} required readOnly />
            </div>
          </div>
          <div className="d-profile-info">
            <div className="d-input-box">
              <input type="text" value={email} required readOnly />
            </div>
            <div className="d-input-box">
              <input type="text" value={uname} required readOnly />
            </div>
          </div>
          <div className="d-profile-info d-profile-info-xtra">
            <Countries />
            <div className="d-input-box d-phone-box">
              <Phone />
              <input
                type="number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <div className="d-input-box">
              <input
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
              />
            </div>
          </div>
          <div className="d-gender-button">
            <button
              onClick={(e) => {
                e.preventDefault();
                setGender("Male");
              }}
            >
              <BsGenderMale />
              <p>Male</p>
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setGender("Female");
              }}
            >
              <BsGenderFemale />
              <p>Female</p>
            </button>
          </div>
          <div>
            <button className="d-change-password-btn" onClick={ShowChangePass}>
              Change Password
            </button>
          </div>
          <div className="d-note-before">
            <p>
              In order to access some features from the service, you will have
              to fill out your account details.
            </p>
          </div>
          <div className="d-button-row">
            <div className="d-save-cancel-button">
              <button
                className="d-save-button"
                onClick={(e) => {
                  e.preventDefault();
                  updateData();
                }}
              >
                Save
              </button>
              <button className="d-cancel-button">Cancel</button>
            </div>
            <div className="d-delete-button">
              <button>Delete Account</button>
            </div>
          </div>
        </form>
        {changePass && <ChangePassword HideChangePass={HideChangePass} />}
      </div>
    </Layout>
  );
};

export default Profile;
