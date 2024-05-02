import React, { useState } from "react";

import { images } from "../../constants";
import {AppWrap, MotionWrap } from "../../wrapper';
import {client} from '../../client';

import './Footer.scss'


const Footer = () => {
const [formData, setFormData] = useState({name: '', email: '', message: ''})
const [isFormSubmitted, setIsFormSubmitted] = useState(false);
const [loading, setLoading] = useState(false);

  return <>
  <h2 className="head-text">Chat with me</h2>
  <div className="app__footer">
    <div className="app__footer-cards">
    <div className="app__footer-card">
      <img src={images.email} alt="email">
        <a href="mailto:hello@example.com" className="p-text">hello@example.com</a>
      </img>
    </div>
    <div className="app__footer-card">
      <img src={images.mobile} alt="mobile">
        <a href="tel:+123456789" className="p-text">123456789</a>
      </img>
    </div>
    </div>
  </div>
  <div className="app__footer-form app__flex">
    <div clasName="app__flex">
      <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput}></input> 
      <input className="p-text" type="text" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput}></input> 
    </div>
    <div>
      <textarea className="p-text" placeholder="Your Message" name="message" value={message} onChange={handleChangeInput}></textarea>
    </div>
    <button className="p-text" type="submit" onClick={handleSubmit}>{loading ? 'loading' : 'Send Message'}</button>
  </div>
  </>;
};

export default AppWrap(
  MotionWrapper(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)
