import React, { useState, useEffect } from "react";
import {
  updateAdmonition,
  fetchAdmonitionstypes,
} from "../../../../services/ApiAdmonitions";
import { fetchUsers } from "../../../../services/ApiUsers";
import "./updateform.css";

function UpdateAdmonitionForm({ id, initialData }) {
  const [data, setData] = useState(initialData);
  const [getUsers, setGetUsers] = useState([]);
  const [getAdmonitions_types, setGetAdmonitions_types] = useState([]);

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const updatedData = await updateAdmonition(id, data);
      setData(updatedData);
    } catch (error) {
      console.error("Failed to update admonition", error);
    }
    window.location.reload();
  };

  // with this function we get the users  and the admonition types
  useEffect(() => {
    async function GetUsersandType() {
      try {
        const data = await fetchUsers();
        setGetUsers(data);
        const type = await fetchAdmonitionstypes();
        setGetAdmonitions_types(type);
      } catch (error) {
        console.error("Failed to load admonitions", error);
      }
    }
    GetUsersandType();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="form-modal-update-admonition">
      <h2 className="title-update-admonition">Update Admonition</h2>
      <div className="container-form-div">
        <label htmlFor="status_admonition" className="label">
          Status:
         <select
            name="status_justification"
            value={data?.status_admonition}
            onChange={handleChange}
            className="title-input"
          >
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </label>
        <label htmlFor="user_id" className="label">
          Student:
          <select
            name="user_id"
            value={data?.user_id}
            onChange={handleChange}
            className="title-input"
          >
            {getUsers
              .filter((user) => user.role === "student")
              .map((user) => (
                <option key={user.id} value={user.id}>
                  {user.username}
                </option>
              ))}
          </select>
        </label>

        <label htmlFor="admonition_types_id" className="label">
          Admonition Type:
          <select
            name="admonition_types_id"
            value={data?.admonition_types_id}
            onChange={handleChange}
            className="title-input"
          >
            {getAdmonitions_types.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        </label>
        <button type="submit" className="submit-button">
          Update Admonition
        </button>
      </div>
    </form>
  );
}

export default UpdateAdmonitionForm;
