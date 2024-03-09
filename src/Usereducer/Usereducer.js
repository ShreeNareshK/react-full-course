import React, { useEffect, useReducer, useState } from "react";
//import "./usereducer.css";
const initialState = { users: [] };

const reducer = (state, action) => {
  //console.log(action.payload);
  if (action.type === "SET_USERS") {
    return { ...state, users: action.payload };
  }
  if (action.type === "REMOVE_USERS") {
    const updatedUsers = state.users.filter((eachUser) => {
      return eachUser.id !== action.payload;
    });
    return { ...state, users: updatedUsers };
    //return { ...state, users: action.payload };
  }
  return state;
};

function UserReducer() {
  const [loading, setLoading] = useState(false);
  const URL = "https://jsonplaceholder.typicode.com/users";
  const [state, dispatch] = useReducer(reducer, initialState);

  async function fetchUsers(URL) {
    try {
      setLoading(true);
      const response = await fetch(URL);
      const data = await response.json();
      dispatch({
        type: "SET_USERS",
        payload: data,
      });
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(true);
    }
  }
  useEffect(() => {
    fetchUsers(URL);
  }, []); // Added URL to the dependency array

  function deleteUser(id) {
    dispatch({
      type: "REMOVE_USERS",
      payload: id,
    });
  }
  return (
    <>
      {loading && (
        <section class="dots-container">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </section>
      )}
      <div className="userDetails">
        {state.users.map((eachUser) => (
          <div className="user-container" key={eachUser.id}>
            <div className="name">{eachUser.name}</div>
            <div className="userName">{eachUser.username}</div>
            <div className="email">{eachUser.email}</div>
            <div className="phone">{eachUser.phone}</div>
            <div className="website">{eachUser.website}</div>
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
