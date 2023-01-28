import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { Link } from "react-router-dom";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { TbLocation } from "react-icons/tb";

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
    <div className="Contact">
      <h2 className="contactHeading">CONTACT ME</h2>
      <div className="contactWrapper">
        <div className="contactContainer">
          <div className="contactContent">
            {/* <h3 className="contactTitle">Talk to me</h3> */}

            <div className="contactInfo">
              <div className="contactCard">
                <MdOutlineMarkEmailUnread className="contactCardIcon" />
                <h3 className="contactCardTitle">Gmail</h3>
                <span className="contactCardData">
                  vishalvarma537@gmail.com
                </span>
                <Link className="contactBtn">
                  Write me <HiOutlineArrowSmRight className="contactbtnicon" />
                </Link>
              </div>

              <div className="contactCard">
                <AiOutlineWhatsApp className="contactCardIcon" />
                <h3 className="contactCardTitle">Whatsapp</h3>
                <span className="contactCardData">+91 9702760705</span>
                <Link className="contactBtn">
                  Write me <HiOutlineArrowSmRight className="contactbtnicon" />
                </Link>
              </div>

              <div className="contactCard">
                <GrLinkedinOption className="contactCardIcon" />
                <h3 className="contactCardTitle">LinkedIn</h3>
                <span className="contactCardData">
                  vishalvarma537@gmail.com
                </span>
                <Link className="contactBtn">
                  Write me <HiOutlineArrowSmRight className="contactbtnicon" />
                </Link>
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
