import React from "react";
import "../Css/HomeScreen.css";
import Banner from "./Banner";
import Nav from "./Nav";
import Row from "./Row";
import requests from "../requests";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row
        title={requests.fetchTrending.title}
        fetchUrl={requests.fetchTrending.url}
        isLargeRow
      />
      <Row
        title={requests.fetchTopRated.title}
        fetchUrl={requests.fetchTopRated.url}
      />{" "}
      <Row
        title={requests.fetchActionMovies.title}
        fetchUrl={requests.fetchActionMovies.url}
      />{" "}
      <Row
        title={requests.fetchComedyMovies.title}
        fetchUrl={requests.fetchComedyMovies.url}
      />{" "}
      <Row
        title={requests.fetchHorrorMovies.title}
        fetchUrl={requests.fetchHorrorMovies.url}
      />{" "}
      <Row
        title={requests.fetchRomanceMovies.title}
        fetchUrl={requests.fetchRomanceMovies.url}
      />{" "}
      <Row
        title={requests.fetchMystery.title}
        fetchUrl={requests.fetchMystery.url}
      />{" "}
      <Row
        title={requests.fetchSciFi.title}
        fetchUrl={requests.fetchSciFi.url}
      />{" "}
      <Row
        title={requests.fetchWestern.title}
        fetchUrl={requests.fetchWestern.url}
      />{" "}
      <Row
        title={requests.fetchAnimation.title}
        fetchUrl={requests.fetchAnimation.url}
      />
      <Row title={requests.fetchTV.title} fetchUrl={requests.fetchTV.url} />
    </div>
  );
}

export default HomeScreen;
