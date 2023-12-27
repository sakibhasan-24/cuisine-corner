import React from "react";

export default function SectionTitle({ title, text }) {
  return (
    <div className="my-6 max-w-6xl mx-auto text-center">
      <p className="text-xl font-serif text-yellow-400">{text}</p>
      <h1 className="text-4xl font-bold mb-6 border-t-2 border-b-2 p-6  w-1/2 mx-auto">
        {title}
      </h1>
    </div>
  );
}
