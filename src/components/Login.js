import { Container } from "react-bootstrap";

const redirect = window.location.origin

console.log(redirect, "hello")

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=cad88e9871c64b1097fd0794f17fa7a0&response_type=code&redirect_uri=${redirect}&scope=streaming%20user-read-email%20user-read-private%20user-read-playback-state%20user-modify-playback-state`

const Login = () => {

    return (
        <div className="loginPage">
          <div className="login">
          <h3>
     <a href={AUTH_URL}>Login to Spotify</a>
     </h3>

    </div>
  <div className="loginContent">
      <div className="circle">
        <Container
          className="deg0"
          style={{
            height: "100vg",
          }}
        >
          <img
            src="/images/aries.jpg"
            alt="starsign"
          />
        </Container>
        <Container
          className="deg30"
          style={{
            height: "100vg",
          }}
        >
          <img
            src="/images/taurus.jpg"
            alt="starsign"
          />
        </Container>
        <Container
          className="deg60"
          style={{
            height: "100vg",
          }}
        >
          <img
            src="/images/gemini.jpg"
            alt="starsign"
          />
        </Container>
        <Container
          className="deg90"
          style={{
            height: "100vg",
          }}
        >
          <img
            src="/images/cancer.jpg"
            alt="starsign"
          />
        </Container>
        <Container
          className="deg120"
          style={{
            height: "100vg",
          }}
        >
          <img
            src="/images/leo.jpg"
            alt="starsign"
          />
        </Container>
        <Container
          className="deg150"
          style={{
            height: "100vg",
          }}
        >
          <img
            src="/images/virgo.jpg"
            alt="starsign"
          />
        </Container>
        <Container
          className="deg180"
          style={{
            height: "100vg",
          }}
        >
          <img
            src="/images/libra.jpg"
            alt="starsign"
          />
        </Container>
        <Container
          className="deg210"
          style={{
            height: "100vg",
          }}
        >
          <img
            src="/images/scorpio.jpg"
            alt="starsign"
          />
        </Container>
        <Container
          className="deg240"
          style={{
            height: "100vg",
          }}
        >
          <img
            src="/images/sag.jpg"
            alt="starsign"
          />
        </Container>
        <Container
          className="deg270"
          style={{
            height: "100vg",
          }}
        >
          <img
            src="/images/capricorn.jpg"
            alt="starsign"
          />
        </Container>
        <Container
          className="deg300"
          style={{
            height: "100vg",
          }}
        >
          <img
            src="/images/aquarius.jpg"
            alt="starsign"
          />
        </Container>
        <Container
          className="deg330"
          style={{
            height: "100vg",
          }}
        >
          <img
            src="/images/pisces.jpg"
            alt="starsign"
          />
        </Container>
      </div>
    </div>
    </div>
    );
}
 
export default Login;