import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { Link } from "react-router-dom";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { BsPhone, BsGithub } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineLinkedin } from "react-icons/ai";
import { TbLocation } from "react-icons/tb";
import { DiGithubFull } from "react-icons/di";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_65ct6q7",
        "template_dz3d84s",
        form.current,
        "245PZcFNcfzfolyy3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="Contact" id="contact">
      <h2 className="contactHeading">CONTACT ME</h2>
      <div className="contactWrapper">
        <div className="contactContainer">
          <div className="contactContent">
            {/* <h3 className="contactTitle">Talk to me</h3> */}

            <div className="contactInfo">
              <div className="contactCard">
                <MdOutlineMarkEmailUnread className="contactCardIcon" />
                <h3 className="contactCardTitle">Gmail</h3>
                <p className="contactCardData">vishalvarma537@gmail.com</p>
                <a
                  href="mailto:vishalvarma537@gmail.com"
                  target="_blank"
                  className="contactBtn"
                  id="contact-email"
                >
                  Write me <HiOutlineArrowSmRight className="contactbtnicon" />
                </a>
              </div>

              <div className="contactCard">
                <BsPhone className="contactCardIcon" />
                <h3 className="contactCardTitle">Whatsapp</h3>
                <p className="contactCardData">+91 9702760705</p>
                <a
                  href="tel:+919702760705"
                  target="_blank"
                  id="contact-phone"
                  className="contactBtn"
                >
                  Write me <HiOutlineArrowSmRight className="contactbtnicon" />
                </a>
              </div>

              <div className="contactCard">
                <AiOutlineLinkedin className="contactCardIcon" />
                {/* <h3 className="contactCardTitle">LinkedIn</h3> */}
                <p className="contactCardData">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/vishal-varma-96a9bb241/"
                  className="contactBtn"
                  id="contact-linkedin"
                  target="_blank"
                >
                  Write me <HiOutlineArrowSmRight className="contactbtnicon" />
                </a>
              </div>

              <div className="contactCard">
                <BsGithub className="contactCardIcon" />
                {/* <h3 className="contactCardTitle">LinkedIn</h3> */}
                <p className="contactCardData">Github</p>
                <a
                  href="https://github.com/vv97"
                  target="_blank"
                  id="contact-github"
                  className="contactBtn"
                >
                  Write me <HiOutlineArrowSmRight className="contactbtnicon" />
                </a>
              </div>
            </div>
          </div>

          <div className="contactContent">
            <h3 className="contactTitle"></h3>
          </div>
        </div>
        <div className="contactFormContainer">
          <form ref={form} onSubmit={sendEmail} className="contactForm">
            {/* <h3 className="contactTitle">Talk to me</h3> */}
            <div className="contactFormDiv">
              <label className="contactFormTag">Name</label>
              <input
                type="text"
                name="user_name"
                className="contactFormInput"
                placeholder="Insert your name"
              />
            </div>
            <div className="contactFormDiv">
              <label className="contactFormTag">Email</label>
              <input
                type="email"
                name="user_email"
                className="contactFormInput"
                placeholder="Insert your name"
              />
            </div>
            <div className="contactFormDiv contactFormArea">
              <label className="contactFormTag">Message</label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                placeholder=""
                className="contactFormInput"
              />
            </div>

            <button className="contactSendMssgBtn">
              Send message <TbLocation className="contactSendMessageIcon" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
