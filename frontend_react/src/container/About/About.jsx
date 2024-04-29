import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./About.scss";
const abouts = [
  {
    title: "Web Development",
    description: "Design extraordinaire",
    imgURL: "",
  },
  { title: "UI/UX", description: "Watch it work", imgURL: "" },
  { title: "Data Scientist", description: "Data driven", imgURL: "" },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        The path to good business is
        <span>Good Design</span>.
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgURL} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <h2 className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </h2>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
