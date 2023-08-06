import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext"; // Import your AuthContext

const UserProfile: React.FC = () => {
  const { accessToken, user } = useContext(AuthContext); // Assuming you have a user object in your AuthContext
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (accessToken && user) {
          const response = await fetch(
            `http://localhost:5000/api/v1/user?email=${user.email}`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
              },
            }
          );

          if (response.ok) {
            const userData = await response.json();
            setUserData(userData);
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [accessToken, user]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userData.userName}</p>
      <p>Email: {userData.email}</p>
      {/* Display other user information */}
    </div>
  );
};

export default UserProfile;
