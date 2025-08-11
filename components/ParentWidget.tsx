"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Location from "./Location";
import DisplayWidget from "./DisplayWidget";
import Loader from "./Loader";

interface WeatherData {
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
    feels_like: number;
    humidity: number;
  };
  weather: { description: string }[];
}

interface Widget {
  _id: number;
  location: string;
  weather: WeatherData;
}

const ParentWidget = () => {
  const [widgets, setWidgets] = useState<Widget[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const loadWidget = async () => {
    try {
      setLoading(true);
      const widgetList = await axios.get("http://localhost:5000/widgets");
      setLoading(false);
      setWidgets(widgetList.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadWidget();
  }, []);

  return (
    <>
      <Location refreshWidget={loadWidget} />
      {loading ? (
        <Loader />
      ) : (
        <DisplayWidget widgets={widgets} loadWidget={loadWidget} />
      )}
    </>
  );
};

export default ParentWidget;
