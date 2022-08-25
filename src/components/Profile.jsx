import React from "react";
import { useState } from "react";
import { userData } from "../features/user/userSlice";
import { useSelector } from "react-redux";
import { getAuth, updateProfile } from "firebase/auth";

function Profile(props) {
  const user = useSelector(userData);
  const [formData, setFormData] = useState({
    displayname: ""
  })

  const handleChange = (e)=>{
    const {name, value } = e.target;
    setFormData((prev)=>({
        ...prev,
        [name]: value
    }))
  }

  const updateUser = (e) => {
    e.preventDefault();
    const auth = getAuth();
    updateProfile(auth.currentUser, {
      displayName: formData.displayname
    })
      .then(() => {
        alert("profile name udpated")
      })
      .catch((error) => {
        alert (error.code);
      });
  };
  return (
    <div className="container-fluid vh-100 d-flex align-items-center">
      <form>
        <p className="text-white">
          {user.profileName === null ? "Add Display Name" : user.profileName}
        </p>
        <input type="text" name="displayname" placeholder="Update Profile Name" onChange={handleChange} />
        <button onClick={updateUser}>Update</button>
      </form>
    </div>
  );
}

export default Profile;
