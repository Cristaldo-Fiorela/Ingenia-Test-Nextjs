"use client"

import { useState } from "react";
import axios from "axios";
import Alert from "./Alert";

const baseURL = `http://ingenia.com/snippets/test/contact.php`;

const ContactForm = () => {

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [alert, setAlert] = useState({});

  const handleChange = (e) => {
    const {name, value} = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "lastname") {
      setLastname(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "phone") {
      setPhone(value);
    } else if (name === "comment") {
      setComment(value);
    }
  }

  const handleSubmit =  async (e) => {
    e.preventDefault();

    if ([name].includes(""))  {
      setAlert({
        msg: "The name field is required",
        error: true,
      })

      setTimeout(() => {
        setAlert({});
      }, 4000);

      return;
    }

    
  if(!emailValidation(email)) {
    setAlert({
      msg: "Not a valid email",
      error: true,
    })

    setTimeout(() => {
      setAlert({});
    }, 4000);

    return;
  }

  const formData = {
    fullname: `${name} ${lastname}`,
    email: email,
    phone: phone,
    comment: comment,
  };
  
  try {
    const response = await axios.post('/api/proxy', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // console.log('Response:', response.data);

    setAlert({
      msg: "Successfully sent",
    });

    setTimeout(() => {
      setAlert({});
    }, 4000);

    setName("");
    setLastname("");
    setEmail("");
    setPhone("");
    setComment("");
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    setAlert({
      msg: "Error sending form",
      error: true
    });
    setTimeout(() => {
      setAlert({});
    }, 4000);
  }
  }

  const emailValidation = () => {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const result = regex.test(email);
    return result;
  }

  const { msg } = alert;

  return (
    <>
      <section className="callToActionContact">
        <div>
          <p>Ingenia is located in two major business & goverment hubs in the Americas</p>
          <h2>Contact us</h2>
          <p>Send us an e-mail and we will get back to you:</p>
        </div>
      </section>

      <div className="formContainer">
      <form method="POST" onSubmit={handleSubmit}>
        <small>*REQUIRED FIELD</small>
        <div>
          <p>1</p>
          <div className="labelContainer">
            <input 
              type="text" 
              name="name"
              placeholder="Name"
              value={name}
              onChange={handleChange}
              required
            />
            <input 
              type="text" 
              name="lastname"
              placeholder="Last Name"
              value={lastname}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <p>2</p>
          <div className="labelContainer">
            <input 
              type="email" 
              name="email"
              id="email"
              placeholder="E-mail"
              value={email}
              onChange={handleChange}
            />
            <input 
              type="tel" 
              name="phone"
              placeholder="Phone"
              value={phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <p>3</p>
          <div className="textareContainer">
            <label htmlFor="">Tell us about your challenge or opportunity</label>
            <textarea 
              name="comment"
              value={comment}
              onChange={handleChange}
            />
          </div>
        </div>

        <input className="btnSend" type="submit" value="SEND" />
      </form>
      {msg && <Alert alert={alert}/>}
      </div>
    </>
  )
}

export default ContactForm