import React, { useState, useEffect } from "react";

const usersAPIURL = "https://jsonplaceholder.typicode.com/users";

function Usestateeffect() {
  const [users, setUsers] = useState([]);

  const fetchUsersData = async (usersAPIURL) => {
    var response = await fetch(usersAPIURL);
    var jsonUsersData = await response.json();
    console.log(jsonUsersData);
  };
  useEffect(() => {
    fetchUsersData(usersAPIURL);
  }, []);
  return <></>;
}
export default Usestateeffect;
