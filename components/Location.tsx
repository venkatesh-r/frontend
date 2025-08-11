"use client";
import { useState } from "react";
import axios from "axios";
const Location = ({ refreshWidget }) => {
  const [location, setLocation] = useState<string>("");
  const [error, setError] = useState<string>("");

  const isvalidtext = /^[a-zA-Z]*$/;

  const addWidget = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!location.trim()) {
      setError("Please enter location");
      return;
    }
    if (!isvalidtext.test(location)) {
      setError("Please enter only letter");
      return;
    }
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/widgets", {
        location,
      });
      refreshWidget();
      setLocation("");
    } catch (error) {
      console.error("Error posting data:", error);
      setError("Failed to add widget. Please try again");
    }
  };

  return (
    <div className="">
      <div className="flex justify-center mt-20">
        <form onSubmit={addWidget}>
          <div className="flex flex-row space-x-4 items-center">
            <input
              className="border-1 border-[#48484A] rounded-md px-2 py-2"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-5">
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="flex justify-center">
        {error && (
          <p className="text-red-500 text-sm mt-5 mr-10 w-full text-center">
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default Location;
