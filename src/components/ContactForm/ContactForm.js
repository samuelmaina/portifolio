import React, { useState, useEffect } from "react";
import emailjs, { init } from "@emailjs/browser";
import {
  StyledForm,
  StyledInput,
  StyledButton,
  StyledAlert,
  StyledLabel,
  StyledTextArea,
  Required,
} from "./ContactFields";

function ContactForm() {
  init(process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY);

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const [name, setName] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);

  const [tel, setTel] = useState("");
  const [isTelValid, setIsTelValid] = useState(true);

  const [message, setMessage] = useState("");
  const [isMessageValid, setIsMessageValid] = useState(true);

  const [buttonEnabled, setButtonEnabled] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);

  const [isFeedbackPositive, setIsFeedbackPositive] = useState(null);

  const [buttonText, setButtonText] = useState("Send Message");

  useEffect(() => {
    setHasErrors(
      !(isNameValid && isEmailValid && isMessageValid && isTelValid)
    );
    setButtonEnabled(
      !hasErrors && !isEmpty(name) && !isEmpty(email) && !isEmpty(tel)
    );
  }, [hasErrors, isNameValid, isEmailValid, isMessageValid, isTelValid]);

  const handleSubmit = (e) => {
    let data = {};

    let from = "samuelmayna@gmail.com";
    e.preventDefault();
    setButtonText("Sending...");
    for (let e of e.target) {
      data[e.name] = e.value;
    }
    data.from = from;
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID,
        data,
        process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY
      )
      .then((res) => {
        setIsFeedbackPositive(true);
        setButtonText("Sent!");
      })
      .catch((err) => {
        setIsFeedbackPositive(false);
        setButtonText("Failed!");
        setButtonText("Send Message Again!");
      });
  };

  const nameEntered = (e) => {
    const name = e.target.value;
    const isNameValid = name && name.length > 1 && name.length < 50;
    setIsNameValid(isNameValid);
    setName(name);
  };

  const emailEntered = (e) => {
    const email = e.target.value;
    const isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    setIsEmailValid(isValid);
    setEmail(email);
  };

  const messageEntered = (e) => {
    const message = e.target.value;
    const isMessageValid =
      message && message.length >= 10 && message.length <= 1000;
    setIsMessageValid(isMessageValid);
    setMessage(message);
  };

  const telEntered = (e) => {
    const tel = e.target.value;
    let isValid = true;
    let firstLetter;

    if (tel) {
      firstLetter = tel[0];
    }

    let isFirstLetterValid = firstLetter === "+" || firstLetter === "0";
    let remaining = tel.slice(1);
    if (!isFirstLetterValid) {
      isValid = false;
    }

    if (firstLetter === "0") {
      if (remaining.length != 9) {
        isValid = false;
      }
    }

    if (!/^\d+$/.test(remaining)) {
      isValid = false;
    }

    if (firstLetter === "+") {
      if (remaining.length != 12) {
        isValid = false;
      }
    }

    setIsTelValid(isValid);
    setTel(tel);
  };

  return (
    <StyledForm
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      {isFeedbackPositive !== null && isFeedbackPositive && (
        <StyledAlert isPositive> Message Received!!.</StyledAlert>
      )}
      {isFeedbackPositive !== null && !isFeedbackPositive && (
        <StyledAlert>
          Sorry message was not recorded due to some technical issues. Please
          try again later.
        </StyledAlert>
      )}
      <StyledLabel invalid={!isNameValid}>
        <Required> * </Required>
        Name:
      </StyledLabel>
      <StyledInput
        type="text"
        name="name"
        value={name}
        placeholder="Enter Your Name"
        onChange={(e) => nameEntered(e)}
      />
      {name && name.length <= 0 && <StyledAlert>Name is required.</StyledAlert>}
      {!isNameValid && <StyledAlert>Invalid Name.</StyledAlert>}
      <StyledLabel invalid={!isNameValid}>
        <Required> * </Required> Email:
      </StyledLabel>
      <StyledInput
        type="text"
        name="email"
        value={email}
        placeholder="Enter Your Email"
        onChange={(e) => emailEntered(e)}
      />
      {email && email.length <= 0 && (
        <StyledAlert>Email is required.</StyledAlert>
      )}
      {!isEmailValid && <StyledAlert>In Valid Email.</StyledAlert>}
      <StyledLabel invalid={!isTelValid}>Tel:</StyledLabel>
      <StyledInput
        type="text"
        value={tel}
        name="tel"
        placeholder="Enter Your Telphone Number"
        onChange={(e) => telEntered(e)}
      />
      {!isTelValid && <StyledAlert>inValidTel</StyledAlert>}
      <StyledLabel invalid={!isMessageValid}>
        <Required> * </Required> Message:
      </StyledLabel>
      <StyledTextArea
        type="text"
        name="message"
        placeholder="Enter Your Message"
        value={message}
        onChange={(e) => messageEntered(e)}
      />
      {message && message.length == 0 && (
        <StyledAlert>Message is required.</StyledAlert>
      )}
      {!isMessageValid && (
        <StyledAlert>
          Message of not less than 10 characters is required.
        </StyledAlert>
      )}
      <StyledButton type="submit" disabled={!buttonEnabled}>
        {buttonText}
      </StyledButton>
      <br />
      <br />

      <div>
        <Required> * </Required>
        <p style={{ color: "black" }}> Required </p>
      </div>
    </StyledForm>
  );
}

export default ContactForm;

function isEmpty(value) {
  return value === "";
}
