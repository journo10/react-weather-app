import "./App.css";
import { useState } from "react";
import axios from "axios";
import WeatherList from "./components/WeatherList";
import SearchInput from "./components/SearchInput";

function App() {
  const [inputText, setInputText] = useState("");
  const [weather, setWeather] = useState({});

  const getWeatherData = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=${process.env.REACT_APP_KEY}&lang=tr&units=metric`
      )
      .then((res) => setWeather(res.data));
    setInputText(""); //input'un içinin temizlenmesi
  };

  return (
    <div className="App">
      <SearchInput
        inputText={inputText}
        setInputText={setInputText}
        getWeatherData={getWeatherData}
      />
      <WeatherList weather={weather} />
    </div>
  );
}

export default App;
