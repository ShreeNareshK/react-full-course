import React, { useEffect, useReducer, useState } from "react";
import "./usereducer.css";

// Initial state for the reducer
const initialState = { users: [] };

// Reducer function to manage state updates
const reducer = (state, action) => {
  // Check the type of action and update the state accordingly
  if (action.type === "SET_USERS") {
    // Update state with the received users data
    return { ...state, users: action.payload };
  }
  if (action.type === "REMOVE_USERS") {
    // Remove the user with the specified id from the state
    const updatedUsers = state.users.filter((eachUser) => {
      return eachUser.id !== action.payload;
    });
    return { ...state, users: updatedUsers };
  }
  // If no matching action type, return the current state
  return state;
};

// React component for managing users using useReducer
function UserReducer() {
  // State to track loading status
  const [loading, setLoading] = useState(false);

  // URL for fetching user data
  const URL = "https://jsonplaceholder.typicode.com/users";

  // useReducer hook to manage state with the defined reducer function and initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  // Asynchronous function to fetch users data from the specified URL
  async function fetchUsers(URL) {
    try {
      // Set loading to true while fetching data
      setLoading(true);
      // Fetch data from the specified URL
      const response = await fetch(URL);
      // Parse the response data
      const data = await response.json();
      // Dispatch action to set users in the state
      dispatch({
        type: "SET_USERS",
        payload: data,
      });
      // Set loading to false after data is fetched and state is updated
      setLoading(false);
    } catch (error) {
      // Handle errors during data fetching
      console.error("Error fetching users:", error);
      // Set loading to true in case of an error
      setLoading(true);
    }
  }

  // useEffect hook to fetch users data when the component mounts
  useEffect(() => {
    fetchUsers(URL);
  }, []); // Added URL to the dependency array to avoid unnecessary re-fetching

  // Function to delete a user with the specified id
  function deleteUser(id) {
    dispatch({
      type: "REMOVE_USERS",
      payload: id,
    });
  }

  // Render the component with user details and delete button
  return (
    <>
      {loading && (
        // Display loading animation while data is being fetched
        <section class="dots-container">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </section>
      )}
      <div className="userDetails">
        {/* Map through the users and display their details */}
        {state.users.map((eachUser) => (
          <div className="user-container" key={eachUser.id}>
            <div className="name">{eachUser.name}</div>
            <div className="userName">{eachUser.username}</div>
            <div className="email">{eachUser.email}</div>
            <div className="phone">{eachUser.phone}</div>
            <div className="website">{eachUser.website}</div>
            {/* Button to remove the user */}
            <button
              className="delete"
              onClick={() => {
                deleteUser(eachUser.id);
              }}
            >
              Remove User
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default UserReducer;
