import React, { useEffect, useState } from "react";
import axios from "axios";
import ManageUser from "./ManageUser";
const ManagerUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("users.json").then((data) => setUsers(data.data));
  }, []);
  console.log(users);
  return (
    <div className="m-5">
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Sl. No</th>
              <th>Name</th>
              <th>Profession</th>
              <th>Instructor</th>
              <th>Enrollment</th>
              <th>Status</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <ManageUser key={user._id} index={index} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagerUsers;
