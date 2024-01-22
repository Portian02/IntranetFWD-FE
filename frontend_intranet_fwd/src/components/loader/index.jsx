import React from 'react';
import './loader.css';
const HamsterWheel = () => {
  return (
    <div className="wheel-and-hamster">
      <style>
        {`
          --dur: 1s;
          @keyframes hamster {
            from, to {
              transform: rotate(4deg) translate(-0.8em, 1.85em);
            }
          
            50% {
              transform: rotate(0) translate(-0.8em, 1.85em);
            }
          }
          
          @keyframes hamsterHead {
            from, 25%, 50%, 75%, to {
              transform: rotate(0);
            }
          
            12.5%, 37.5%, 62.5%, 87.5% {
              transform: rotate(8deg);
            }
          }
          
          @keyframes hamsterEye {
            from, 90%, to {
              transform: scaleY(1);
            }
          
            95% {
              transform: scaleY(0);
            }
          }
          
          @keyframes hamsterEar {
            from, 25%, 50%, 75%, to {
              transform: rotate(0);
            }
          
            12.5%, 37.5%, 62.5%, 87.5% {
              transform: rotate(12deg);
            }
          }
          
          @keyframes hamsterBody {
            from, 25%, 50%, 75%, to {
              transform: rotate(0);
            }
          
            12.5%, 37.5%, 62.5%, 87.5% {
              transform: rotate(-2deg);
            }
          }
          
          @keyframes hamsterFRLimb {
            from, 25%, 50%, 75%, to {
              transform: rotate(50deg) translateZ(-1px);
            }
          
            12.5%, 37.5%, 62.5%, 87.5% {
              transform: rotate(-30deg) translateZ(-1px);
            }
          }
          
          @keyframes hamsterFLLimb {
            from, 25%, 50%, 75%, to {
              transform: rotate(-30deg);
            }
          
            12.5%, 37.5%, 62.5%, 87.5% {
              transform: rotate(50deg);
            }
          }
          
          @keyframes hamsterBRLimb {
            from, 25%, 50%, 75%, to {
              transform: rotate(-60deg) translateZ(-1px);
            }
          
            12.5%, 37.5%, 62.5%, 87.5% {
              transform: rotate(20deg) translateZ(-1px);
            }
          }
          
          @keyframes hamsterBLLimb {
            from, 25%, 50%, 75%, to {
              transform: rotate(20deg);
            }
          
            12.5%, 37.5%, 62.5%, 87.5% {
              transform: rotate(-60deg);
            }
          }
          
          @keyframes hamsterTail {
            from, 25%, 50%, 75%, to {
              transform: rotate(30deg) translateZ(-1px);
            }
          
            12.5%, 37.5%, 62.5%, 87.5% {
              transform: rotate(10deg) translateZ(-1px);
            }
          }
          
          @keyframes spoke {
            from {
              transform: rotate(0);
            }
          
            to {
              transform: rotate(-1turn);
            }
        `}
      </style>
      <div className="wheel">
        <div className="hamster">
          <div className="hamster__head"></div>
          <div className="hamster__ear"></div>
          <div className="hamster__eye"></div>
          <div className="hamster__nose"></div>
          <div className="hamster__body">
            <div className="hamster__limb--fr"></div>
            <div className="hamster__limb--fl"></div>
            <div className="hamster__limb--br"></div>
            <div className="hamster__limb--bl"></div>
            <div className="hamster__tail"></div>
          </div>
        </div>
      </div>
      <div className="spoke"></div>
    </div>
  );
};

export default HamsterWheel;
