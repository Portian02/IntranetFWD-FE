import React from "react";
import "./home.css";
import Navbar from "../../components/NavBar";
import ControlledCarousel from "../../components/carrousel";
import Footer from "../../components/footer";
const Home = () => {



  
  return (
    <div className="Home">
         <Navbar/>
      <ControlledCarousel />
      <div className="content">
        <h1 className="title">Welcome to Forward Costa Rica</h1>
        <p className="description">
          At Forward Costa Rica, we are dedicated to providing quality education in frontend and backend programming, shaping the developers of the future.
        </p>

        <h2 className="section-title">Our study programs</h2>
        <ul className="program-list">
          <li className="program-item">Frontend Development Program</li>
          <li className="program-item">Backend Development Program</li>
          <li className="program-item">Full Stack Development Program</li>
        </ul>

        <h2 className="section-title">Why choose us</h2>
        <ul className="reasons-list">
          <li className="reason-item">Expert programming instructors</li>
          <li className="reason-item">Practical and challenging projects</li>
          <li className="reason-item">Focus on the latest technologies and trends</li>
          <li className="reason-item">Collaboration with industry-leading companies</li>
        </ul>
        </div>
        <Footer/>
    </div>
  );
};

export default Home;
