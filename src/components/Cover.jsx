import React from "react";
import { Parallax, Background } from "react-parallax";
export default function Cover({ image, title, text }) {
  return (
    <Parallax
      className="max-w-6xl mx-auto mb-6"
      blur={{ min: -50, max: 50 }}
      bgImage={image}
      bgImageAlt="menu image"
      strength={-200}
    >
      <div className="">
        <div className="hero h-[600px] ">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">{title}</h1>
              <p className="mb-5">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
}
