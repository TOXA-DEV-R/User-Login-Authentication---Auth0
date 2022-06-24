/** @format */

import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  console.log(user);
  return (
    <div>
      {isAuthenticated && (
        <>
          <p>
            Name: <strong>{user?.name}</strong>
          </p>
          <p>
            Email: <strong>{user?.email}</strong>
          </p>
          <p>
            <img src={user?.picture} alt={user?.name} />
          </p>
        </>
      )}
    </div>
  );
};

export default Profile;
