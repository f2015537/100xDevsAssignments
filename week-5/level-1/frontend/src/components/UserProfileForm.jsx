import React, { useState } from "react";

const UserProfileForm = ({ setUsers }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    interest1: "",
    interest2: "",
    interest3: "",
    linkedin: "",
    github: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers((users) => [
      ...users,
      {
        name: formData.name,
        desc: formData.description,
        socials: {
          Linkedin: formData.linkedin,
          Github: formData.github,
        },
        interests: [formData.interest1, formData.interest1, formData.interest1],
      },
    ]);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Interest 1:
        <input
          type="text"
          name="interest1"
          value={formData.interest1}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Interest 2:
        <input
          type="text"
          name="interest2"
          value={formData.interest2}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Interest 3:
        <input
          type="text"
          name="interest3"
          value={formData.interest3}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        LinkedIn Profile:
        <input
          type="text"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Github Profile:
        <input
          type="text"
          name="github"
          value={formData.github}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserProfileForm;
