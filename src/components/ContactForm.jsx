import React, { useState } from "react";
import logo from "../../public/logo_jc2.png";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here, e.g., sending data to a server or displaying it.
    console.log(formData);
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <div className="content">
        <div className="left">
          <div className="input-container">
            <label>Nombre </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label>Email </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label>Message </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button className="form-btn" type="submit">
            Enviar
          </button>
        </div>
        <div className="right">
          <img src={logo} alt="logo.png" />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
