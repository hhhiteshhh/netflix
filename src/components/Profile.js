import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import "../Css/Profile.css";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "./Nav";
import PlansScreen from "./PlansScreen";
function Profile() {
  const user = useSelector(selectUser);
  const history = useHistory();

  return (
    <div className="profile">
      <Nav />
      <div className="profile__body">
        <h1>Edit Profile</h1>
        <div className="profile__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profile__details">
            <h2>{user.email}</h2>
            <div className="profile__plans">
              <h3>Plans</h3>
              <PlansScreen />
              <button
                className="profile__signOut"
                onClick={() => {
                  auth.signOut();
                  history.push("/");
                }}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
