import React from "react";
import Header from "./Components/Header.js";
import Navbar from "./Components/Navbar.js";
import Body from "./Components/Body.js";

export default function App() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c33169b7b7mshd4cdd31d9ac58dep1dfd47jsnf4695d416579",
      "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
    },
  };

  fetch(
    "https://community-open-weather-map.p.rapidapi.com/weather?q=Lahore,Pakistan%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=imperial&mode=xml",
    options
  )
    .then((response) => response.text())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  return (
    <>
      <Header />
      <Navbar />
      <Body />
    </>
  );
}
