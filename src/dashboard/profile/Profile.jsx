import React, { useEffect, useRef } from "react";
import Layout from "../components/Layout/Layout";
import ChangePassword from "./change_password/ChangePassword";
import "./Profile.css";
import { BsGenderMale, BsGenderFemale } from "react-icons/bs";
import { useState } from "react";
import { BiEdit, BiUserCircle } from "react-icons/bi";
import Countries from "./Countries";
import Phone from "./Phone";
import axios from "axios";
import toast from "react-hot-toast";
import Delete from "./change_password/Delete";

const Profile = () => {
  const uname = sessionStorage.getItem("username");
  const fname = sessionStorage.getItem("userFirstname");
  const lname = sessionStorage.getItem("userLastname");
  const email = sessionStorage.getItem("userEmail");
  let balance = sessionStorage.getItem("balance");
  const [origin, setOrigin] = useState(sessionStorage.getItem("country"));
  const [phoneNumber, setPhoneNumber] = useState(
    sessionStorage.getItem("userPhone")
    );
    const [birthday, setBirthday] = useState(sessionStorage.getItem("dob"));
  const [gender, setGender] = useState(sessionStorage.getItem("gender"));
  const [profileImage, setProfileImage] = useState(
    sessionStorage.getItem("userImg")
  );

  const [changePass, setChangePass] = useState(false);
  const [del, setDel] = useState(false);
  const fileInputRef = useRef(null);
  const formData = new FormData();

  const ShowChangePass = () => {
    setChangePass(true);
  };

  const HideChangePass = () => {
    setChangePass(false);
    setDel(false);
  };

  const handleEditClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    if (image && image.type.startsWith("image/")) {
      setProfileImage(URL.createObjectURL(image));
    } else {
      toast.error("Please select a valid image file.");
    }
  };

  const GetProfile = async () => {
    try {
      const response = await axios.get(
        `https://api.certifieddump.com/api/profile`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data);
      setOrigin(response.data.country);
      setBirthday(response.data.dob);
      setGender(response.data.gender);
      setProfileImage(response.data.image_path);
      setPhoneNumber(response.data.phone_no);
      // setTickets(response.data.result);
    } catch (error) {
      // console.log(error);
    }
  };

  const updateData = async () => {
    try {
      let response;
      if (profileImage) {
        formData.append("file", profileImage);
        response = await axios.post(
          "https://api.certifieddump.com/upload",
          formData,

          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        // console.log(response);
      }
      await axios.post(
        "https://api.certifieddump.com/api/edituser",
        {
          firstname: sessionStorage.getItem("userFirstname"),
          lastname: sessionStorage.getItem("userLastname"),
          phone_no: `${phoneNumber}`,
          dob: birthday,
          country: localStorage.getItem("userCountry"),
          userid: sessionStorage.getItem("userId"),
          gender: gender,
          image: response.data.path,
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );
      GetProfile();
      // console.log(response);
      // console.log(formData);
      toast.success("Profile update is successful!" || response.data.msg);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetProfile();
    //  setLoading(!loading);
  }, []);

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
          {profileImage ? (
            <div className="d-profile-image">
              <BiEdit
                onClick={handleEditClick}
                style={{
                  color: "black",
                  fontSize: "2rem",
                  position: "absolute",
                  right: "5px",
                }}
              />
              <img src={profileImage} alt="Profile" />
            </div>
          ) : (
            <div className="d-profile-image pic">
              <BiUserCircle />
              <BiEdit
                onClick={handleEditClick}
                style={{
                  color: "var(--light-text-color)",
                  fontSize: "2rem",
                  position: "absolute",
                  right: "5px",
                }}
              />
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
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
            <Countries origin={origin} />
            <div className="d-input-box d-phone-box">
              <Phone />
              <input
                type="number"
                value={phoneNumber}
                onChange={(e) =>{
                  setPhoneNumber(
                    `${parseInt(localStorage.getItem("userCode"))}${
                      e.target.value
                    }`
                  )}
                }
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
              className={gender == "Male" ? "male-gender" : ""}
            >
              <BsGenderMale />
              <p>Male</p>
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setGender("Female");
              }}
              className={gender == "Female" ? "female-gender" : ""}
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
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setDel(!del);
                }}
                style={{ color: "red", fontWeight: "bold" }}
              >
                Delete Account
              </button>
            </div>
          </div>
        </form>
        {changePass && <ChangePassword HideChangePass={HideChangePass} />}
        {del && <Delete HideChangePass={HideChangePass} />}
      </div>
    </Layout>
  );
};

export default Profile;
