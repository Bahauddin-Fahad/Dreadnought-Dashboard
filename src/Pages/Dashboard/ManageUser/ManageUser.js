import React from "react";

const ManageUser = ({ user, index }) => {
  const {
    name,
    img,
    address,
    company,
    profession,
    instructor,
    enrollment,
    status,
    progress,
  } = user;
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
            <div class="text-sm opacity-50">{address}</div>
          </div>
        </div>
      </td>
      <td>
        {company}
        <br />
        <span class="badge badge-ghost badge-sm">{profession}</span>
      </td>
      <td className="font-semibold">{instructor}</td>
      <td>{enrollment}</td>
      <td className="font-semibold">{status}</td>
      <td>
        <div className="flex flex-col">
          <p>{progress}%</p>
          <progress
            class="progress progress-primary w-32"
            value={progress}
            max="100"
          ></progress>
        </div>
      </td>
    </tr>
  );
};

export default ManageUser;
