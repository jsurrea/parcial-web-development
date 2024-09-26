import { Container } from "react-bootstrap";
import "./Home.css";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import Card from "react-bootstrap/Card";

function formatTime(minutes) {
  const hours = Math.floor(minutes / 60);
  let minutesLeft = Math.floor(minutes % 60);
  if (minutesLeft < 10) {
    minutesLeft = `0${minutesLeft}`;
  }
  return `${hours}:${minutesLeft}`;
}

function Home() {
  const [data, setData] = useState({
    full_name: "",
    best_running_time: 0,
    best_swimming_time: 0,
    best_cycling_time: 0,
    profile_image: "",
    best_running_dist: 0,
    best_swimming_dist: 0,
    best_cycling_dist: 0,
    city: "",
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (data) => setShow(data);

  useEffect(() => {
    fetch("https://api.mockaroo.com/api/6ecd53d0?count=1&key=bd347220")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const sports = ["Cycling", "Running", "Swimming"];
  const best_times = [
    data.best_cycling_time,
    data.best_running_time,
    data.best_swimming_time,
  ];
  const best_dists = [
    data.best_cycling_dist,
    data.best_running_dist,
    data.best_swimming_dist,
  ];
  const imageUrls = [
    "https://media.istockphoto.com/id/1402134774/photo/professional-road-cyclist-on-a-training-ride.jpg?s=612x612&w=0&k=20&c=CB2o_DXMgH15MLa1CEqWwZVtVb3rpRgejV3UFnUwF_U=",
    "https://www.sundried.com/cdn/shop/articles/c27ddca5b9550a6940dfef2581b6c38d_1100x.jpg?v=1557744738",
    "https://plus.unsplash.com/premium_photo-1664475361436-e37f6f2ba407?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3dpbW1pbmd8ZW58MHx8MHx8fDA%3D",
  ];

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div>
          <img
            src={data.profile_image}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          <span className="navbar-brand mb-0 h1">{data.full_name}</span>
        </div>
        <div>
          <span className="navbar-brand mb-0 h1">Swim</span>
          <span className="navbar-brand mb-0 h1">
            {formatTime(data.best_swimming_time)}
          </span>
        </div>
        <div>
          <span className="navbar-brand mb-0 h1">Run</span>
          <span className="navbar-brand mb-0 h1">
            {formatTime(data.best_running_time)}
          </span>
        </div>
        <div>
          <span className="navbar-brand mb-0 h1">Cycle</span>
          <span className="navbar-brand mb-0 h1">
            {formatTime(data.best_cycling_time)}
          </span>
        </div>
      </nav>
      <Container className="home-container">
        {Array.from({ length: 3 }).map((_, index) => (
          <Sport
            key={index}
            sport={sports[index]}
            city={data.city}
            dist={best_dists[index]}
            time={best_times[index]}
            imageUrl={imageUrls[index]}
            handleShow={handleShow}
          ></Sport>
        ))}
      </Container>
      <Modal show={show} onHide={handleClose} centered>
        <SportCard {...show}></SportCard>
      </Modal>
    </>
  );
}

function Sport({ sport, imageUrl, handleShow, city, dist, time }) {
  return (
    <div>
      <h2>{sport}</h2>
      <div className="sports">
        {Array.from({ length: 10 }).map((_, index) => (
          <SportCard
            key={index}
            sport={sport}
            city={city}
            handleShow={handleShow}
            dist={dist}
            time={time}
            imageUrl={imageUrl}
          ></SportCard>
        ))}
      </div>
    </div>
  );
}

function SportCard({ sport, city, dist, time, imageUrl, handleShow }) {
  return (
    <Card
      onClick={() =>
        handleShow({
          sport,
          city,
          dist,
          time,
          imageUrl,
          handleShow,
        })
      }
      className="sports-card"
    >
      <Card.Img src={imageUrl} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>{sport} Session</Card.Title>
        <Card.Text>Recorrido alrededor de la bahía de {city}</Card.Text>
        <Card.Text>
          {dist} - {time}
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Home;
