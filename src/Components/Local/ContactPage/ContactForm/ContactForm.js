import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    address: "",
    email: "",
    phone: "",
    bestTimeToCall: "",
    query: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, position, address, email, phone, bestTimeToCall, query } =
      formData;

    const emailBody = `
      Name: ${name}
      Position: ${position}
      Address: ${address}
      Email: ${email}
      Phone: ${phone}
      Best Time to Call: ${bestTimeToCall}
      Query: ${query}
    `;

    window.open(
      `mailto:alok4k45h@gmail.com?subject=Contact Form Submission&body=${encodeURIComponent(
        emailBody
      )}`
    );
    setFormData({
      name: "",
      position: "",
      address: "",
      email: "",
      phone: "",
      bestTimeToCall: "",
      query: "",
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {[
          {
            id: "name",
            type: "text",
            placeholder: "Your Name",
            required: true,
          },
          {
            id: "position",
            type: "text",
            placeholder: "Position",
            required: true,
          },
          {
            id: "address",
            type: "text",
            placeholder: "Your Address",
            required: true,
          },
          { id: "email", type: "email", placeholder: "Email", required: true },
          {
            id: "phone",
            type: "tel",
            placeholder: "Phone Number",
            required: true,
          },
          {
            id: "bestTimeToCall",
            type: "text",
            placeholder: "Best Time To Call",
          },
        ].map((field) => (
          <div className="form-group" key={field.id}>
            <input
              type={field.type}
              id={field.id}
              name={field.id}
              placeholder={field.placeholder}
              value={formData[field.id]}
              onChange={handleChange}
              required={field.required}
            />
          </div>
        ))}
        <div className="form-group">
          <textarea
            id="query"
            name="query"
            placeholder="Write your query..."
            value={formData.query}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
