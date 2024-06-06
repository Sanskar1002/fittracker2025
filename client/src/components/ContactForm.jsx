import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

// npm i @emailjs/browser

// Styles
const StyledContactForm = styled.div`
  min-width: 300px;
  max-width:400px
  display: flex;
  align-items: center;
  justify-content: center;
  
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    

    input {
      width: 96%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 1px solid ${({ theme }) => theme.primary};
      }

      &:hover{
        border: 1px solid #fcaf0a;
      }
    }

    textarea {
        width: 96%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 1px solid ${({ theme }) => theme.primary};
      }

      &:hover{
        border: 1px solid #fcaf0a;
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: white;
      background: ${({ theme }) => theme.primary};
      color: white;
      width: 100%;
      font-size: 16px;

      &:hover {
        
        background: #fcaf0a;
      color: white;
    }
  }
`;

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tzyub15",
        "template_7xc8uhk",
        form.current,
        "DopvSEQufIKApRlSF"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent successfully");
          // location.reload();
        },
        (error) => {
          console.log(error.text);
          alert("server error");
        }
      );
  };

  return (
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_mail" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
  );
};

export default ContactForm;
