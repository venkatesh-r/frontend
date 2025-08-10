"use client";
import { useState } from "react";
import axios from "axios";
const Location = () => {
  const [location, setLocation] = useState<string>("");

  const addWidget = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/widgets", {
        location,
      });
      setLocation("");
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div className="flex justify-center mt-20">
      <form onSubmit={addWidget} className="flex ">
        <input
          className="border-1 border-[#48484A] flex rounded-md px-2 py-1"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-5">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Location;
