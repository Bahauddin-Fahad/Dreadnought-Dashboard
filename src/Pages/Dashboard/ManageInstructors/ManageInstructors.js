import React, { useEffect, useState } from "react";
import axios from "axios";
import Manageinstructor from "./ManageInstructor";
const ManagerInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    axios.get("instructors.json").then((data) => setInstructors(data.data));
  }, []);
  console.log(instructors);
  return (
    <div className="m-5">
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Sl. No</th>
              <th>Name</th>
              <th>Profession</th>
              <th>Student</th>
              <th>Enrollment</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {instructors.map((instructor, index) => (
              <Manageinstructor
                key={instructor._id}
                index={index}
                instructor={instructor}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagerInstructors;
