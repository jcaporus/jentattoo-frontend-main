import React from 'react'

import profilePicture from "../../../static/assets/images/headshot.jpg";


export default function About() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      <div className="right-column">
        JenTattoo est 2002. Self-owned and operated by Jennifer Calarco, tattoo artist
      </div>
    </div>
  );
}