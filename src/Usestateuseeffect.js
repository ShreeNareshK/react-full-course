import React, { useState, useEffect } from "react";

const usersAPIURL = "https://jsonplaceholder.typicode.com/user";

function Usestateeffect() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState({ status: false, msg: "" });
  const fetchUsersData = async (usersAPIURL) => {
    setLoading(true);
    setIsError({ status: false, msg: "" });
    try {
      var response = await fetch(usersAPIURL);
      var jsonUsersData = await response.json();
      //console.log(jsonUsersData);
      setUsers(jsonUsersData);
      setLoading(false);
      setIsError({ status: false, msg: "" });
      if (response.status === 404) {
        throw new Error("User Data Not Found");
      }
    } catch (error) {
      setLoading(false);
      setIsError({
        status: true,
        msg: error.message || "Something went wrong while fetching data",
      });
    }
  };
  useEffect(() => {
    fetchUsersData(usersAPIURL);
  }, []);
  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError?.status) {
    return (
      <div>
        <h1>{isError.msg}</h1>
      </div>
    );
  }
  return (
    <>
      <div className="user-data">
        <ul>
          {users.map((eachUser) => {
            const { name, username, email, phone, id } = eachUser;
            return (
              <li className="user" key={id}>
                <h1 className="name">{name}</h1>
                <h3 className="username">{username}</h3>
                <p className="email">{email}</p>
                <p className="mobile">{phone}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
export default Usestateeffect;
