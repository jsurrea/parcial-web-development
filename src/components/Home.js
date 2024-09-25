import { Container } from "react-bootstrap";
import "./Home.css";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

function Home() {
  const [data, setData] = useState({
    username: "",
    full_name: "",
    short_description: "",
    url: "",
    post_count: 0,
    follower_count: 0,
    following_count: 0,
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetch("https://api.mockaroo.com/api/6f2d0590?count=1&key=bd347220")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <Container className="home-container">
        <Container className="row">
          <Container className="col-4 profile-image">
            <img src="https://picsum.photos/350" alt="placeholder" />
          </Container>
          <Container className="column col-8 profile-info">
            <Link to={`/profile/${data.username}`}>
              <h1>{data.username}</h1>
            </Link>
            <p>
              <span className="span-bolded">{data.full_name} ·</span>
              &nbsp;
              {data.short_description}
              <br />
              <a href="#">{data.url}</a>
            </p>
            <Container className="counts-container">
              <p>
                <span className="span-bolded">{data.post_count}</span>
                &nbsp; <FormattedMessage id="post_count" />
              </p>

              <p>
                <span className="span-bolded">{data.follower_count}</span>
                &nbsp; <FormattedMessage id="follower_count" />
              </p>

              <p>
                <span className="span-bolded">{data.following_count}</span>
                &nbsp; <FormattedMessage id="following_count" />
              </p>
            </Container>
          </Container>
        </Container>
        <Container className="posts">
          {Array.from({ length: 12 }).map((_, index) => (
            <img
              src="https://picsum.photos/350"
              alt="placeholder"
              onClick={handleShow}
            />
          ))}
        </Container>
      </Container>
      <Modal show={show} onHide={handleClose} centered>
        <img src="https://picsum.photos/800" alt="placeholder" />
      </Modal>
    </>
  );
}

export default Home;
