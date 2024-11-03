import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";

function Profile() {
  const { useName } = useContext(LoginContext);

  return (
    <>
      <h1>Profile</h1>
      <br />
      <h1>Username: {useName}</h1>
    </>
  );
}

export default Profile;
