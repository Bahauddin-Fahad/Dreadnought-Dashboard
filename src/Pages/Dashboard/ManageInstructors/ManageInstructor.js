import React from "react";

const ManageInstructor = ({ instructor, index }) => {
  const { name, img, student, enrollment, status } = instructor;
  return (
    <tr>
      <th>
        <th>{index + 1}</th>
      </th>
      <td>
        <div class="flex items-center space-x-3">
          <div class="avatar">
            <div class="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div class="font-bold">{name}</div>
          </div>
        </div>
      </td>
      <td>Desktop Support Technician</td>
      <td>{student}</td>
      <td>{enrollment}</td>
      <td>{status}</td>
    </tr>
  );
};

export default ManageInstructor;
