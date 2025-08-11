import RemoveWidget from "./RemoveWidget";

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

interface DisplayWidgetProps {
  widgets: Widget[];
}

const DisplayWidget = ({ widgets, loadWidget }: DisplayWidgetProps) => {
  return (
    <>
      <div className="flex mt-15 mr-2 flex-wrap px-10 justify-center mb-20">
        {widgets.map((item) => (
          <div
            key={item._id}
            className="relative flex flex-col my-6 bg-[#52B7FB] shadow-sm border border-slate-200 rounded-lg w-70 mr-10 text-center"
          >
            <div className="px-4 py-4 text-white">
              <div className="text-2xl my-2 py-4 text-center ">
                {item.location.charAt(0).toUpperCase() + item.location.slice(1)}
              </div>
              <div className="text-white text-base">
                <p className="text-6xl text-center">
                  {(item?.weather?.main?.temp - 273).toFixed(0)}&deg;C
                </p>
                <p className="text-xl text-center my-1">
                  {item?.weather?.weather[0].description}
                </p>
                <p className="mt-7">
                  <span className="text-lg">Minimum Temperature:</span>{" "}
                  <span className="font-bold">
                    {(item?.weather?.main?.temp_min - 273).toFixed(0)}&deg;C
                  </span>
                </p>
                <p>
                  <span className="text-lg">Maximum Temperature:</span>{" "}
                  <span className="font-bold">
                    {(item?.weather?.main?.temp_max - 273).toFixed(0)}&deg;C
                  </span>
                </p>

                <p>
                  <span className="text-lg">Feels like:</span>{" "}
                  <span className="font-bold">
                    {(item?.weather?.main?.feels_like - 273).toFixed(0)}&deg;C
                  </span>
                </p>
                <p>
                  <span className="text-lg">Humidity:</span>{" "}
                  <span className="font-bold">
                    {item?.weather?.main?.humidity}%
                  </span>
                </p>
              </div>
              <RemoveWidget id={item?._id} onRemove={loadWidget} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DisplayWidget;
