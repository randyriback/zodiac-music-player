import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import SpotifyWebApi from "spotify-web-api-node";
import SpotifyPlayer from "react-spotify-web-playback";
import useAuth from "./useAuth";
import { useModal } from "react-hooks-use-modal";

const spotifyApi = new SpotifyWebApi({
  clientId: "cad88e9871c64b1097fd0794f17fa7a0",
});

const Sign = ({ foo }) => {
  const accessToken = useAuth(foo);
  const [playingTrack, setPlayingTrack] = useState();
  // const [play, setPlay] = useState(false);
  const [currentSign, setCurrentSign] = useState("");
  const [linkAvail, setLinkAvail] = useState("");
  const [link, setLink] = useState(false);
  const [number, setNumber] = useState(0)
  // const [Modal, open, close, isOpen] = useModal("root", {
  //   preventScroll: true,
  //   closeOnOverlayClick: false,
  // });


  const signs = {
    virgo: "2T490l53FCFMMNwH3UNcoY",
    libra: "5Cg9oGB1CrOp9kQKarVHyL",
    scorpio: "4toj8Lx2vvIjBljDEq5WZh",
    sagittarius: "1VtFDaLuq6r7cmguIRYe1l",
    capricorn: "3J1EsxEHPxpjqFiY8lP2Bn",
    aquarius: "3d6ajAnNcL4yPyOEkqDk8H",
    pisces: "710HeuN5dDjL1v9kc4ouCE",
    aries: "0niSJoA95g5Pz2NqPpELjP",
    taurus: "0IpV6kzt1FPssRebnlOlVP",
    gemini: "21pg2wJxnyOeTEHQ5pvS1J",
    cancer: "2n8mCoR94S8nkKnDLHIKI8",
    leo: "76ZJXlJQG9iYutyIJW53nK",
  };

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  // useEffect(() => open(), []);

  // const closeModal = () => {
  //   close();
  //   setPlayingTrack();
  //   spotifyApi.getPlaylist(signs.pisces).then(
  //     function (data) {
  //       const items = data.body.tracks.items;
  //       const item = items[Math.floor(Math.random() * items.length)];
  //       console.log(data.body);
  //       setPlayingTrack(item.track.uri);
  //       setCurrentSign("pisces");
  //       spotifyApi.resume()      },
  //     function (err) {
  //       console.log("Something went wrong!", err);
  //     }
  //   );

  //   const getIDClick = () => {
  //     if (play) {
  //       setPlayingTrack();
  //       setPlay(false);
  //       console.log("paused!");
  //     }
  //     if (!play) {
  //       spotifyApi.getUserPlaylists("ozpb5dba2y49pslou4beoev9x").then(
  //         function (data) {
  //           const items = data.body.uri;
  //           console.log(data.body);
  //           setPlayingTrack(items);
  //           setCurrentSign("aries");
      
  //         },
  //         function (err) {
  //           console.log("Something went wrong!", err);
  //         }
  //       );
  //     }
  // };

  const piscesClick = () => {
    setLink(false);
    setPlayingTrack();
    spotifyApi.getPlaylist(signs.pisces).then(
      function (data) {
        const items = data.body.tracks.items;
        const item = items[Math.floor(Math.random() * items.length)];
        const num = Math.floor(Math.random() * items.length) 
        setNumber(num)
        const url = item.track.external_urls.spotify;
        setPlayingTrack(data.body.uri);
        setCurrentSign("pisces");
        setLinkAvail(url);
        setLink(true);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  };

  const ariesClick = () => {
    setLink(false);
    setPlayingTrack();
    spotifyApi.getPlaylist(signs.aries).then(
      function (data) {
        const items = data.body.tracks.items;
        const item = items[Math.floor(Math.random() * items.length)];
        const num = Math.floor(Math.random() * items.length) 
        setNumber(num)
        const url = item.track.external_urls.spotify;
        setPlayingTrack(data.body.uri);
        setCurrentSign("aries");
        setLinkAvail(url);
        setLink(true);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  };

  const taurusClick = () => {
    setLink(false);
    setPlayingTrack();
    spotifyApi.getPlaylist(signs.taurus).then(
      function (data) {
        const items = data.body.tracks.items;
        const item = items[Math.floor(Math.random() * items.length)];
        const num = Math.floor(Math.random() * items.length) 
        setNumber(num)
        const url = item.track.external_urls.spotify;
        setPlayingTrack(data.body.uri);
        setCurrentSign("taurus");
        setLinkAvail(url);
        setLink(true);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  };

  const geminiClick = () => {
    setLink(false);
    setPlayingTrack();
    spotifyApi.getPlaylist(signs.gemini).then(
      function (data) {
        const items = data.body.tracks.items;
        const item = items[Math.floor(Math.random() * items.length)];
        const num = Math.floor(Math.random() * items.length) 
        setNumber(num)
        const url = item.track.external_urls.spotify;
        setPlayingTrack(data.body.uri);
        setCurrentSign("gemini");
        setLinkAvail(url);
        setLink(true);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  };

  const cancerClick = () => {
    setLink(false);
    setPlayingTrack();
    spotifyApi.getPlaylist(signs.cancer).then(
      function (data) {
        const items = data.body.tracks.items;
        const item = items[Math.floor(Math.random() * items.length)];
        const num = Math.floor(Math.random() * items.length) 
        setNumber(num)
        const url = item.track.external_urls.spotify;
        setPlayingTrack(data.body.uri);
        setCurrentSign("cancer");
        setLinkAvail(url);
        setLink(true);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  };

  const leoClick = () => {
    setLink(false);
    setPlayingTrack();
    spotifyApi.getPlaylist(signs.leo).then(
      function (data) {
        const items = data.body.tracks.items;
        const item = items[Math.floor(Math.random() * items.length)];
        const num = Math.floor(Math.random() * items.length) 
        setNumber(num)
        const url = item.track.external_urls.spotify;
        setPlayingTrack(data.body.uri);
        setCurrentSign("leo");
        setLinkAvail(url);
        setLink(true);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  };

  const virgoClick = () => {
    setLink(false);
    setPlayingTrack();
    spotifyApi.getPlaylist(signs.virgo).then(
      function (data) {
        const items = data.body.tracks.items;
        const item = items[Math.floor(Math.random() * items.length)];
        const num = Math.floor(Math.random() * items.length) 
        setNumber(num)
        const url = item.track.external_urls.spotify;;
        setPlayingTrack(data.body.uri);
        setCurrentSign("virgo");
        setLinkAvail(url);
        setLink(true);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  };

  const libraClick = () => {
    setLink(false);
    setPlayingTrack();
    spotifyApi.getPlaylist(signs.libra).then(
      function (data) {
        const items = data.body.tracks.items;
        const item = items[Math.floor(Math.random() * items.length)];
        const num = Math.floor(Math.random() * items.length) 
        setNumber(num)
        const url = item.track.external_urls.spotify;
        setPlayingTrack(data.body.uri);
        setCurrentSign("libra");
        setLinkAvail(url);
        setLink(true);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  };

  const scorpioClick = () => {
    setLink(false);
    setPlayingTrack();
    spotifyApi.getPlaylist(signs.scorpio).then(
      function (data) {
        const items = data.body.tracks.items;
        const item = items[Math.floor(Math.random() * items.length)];
        const num = Math.floor(Math.random() * items.length) 
        setNumber(num)
        const url = item.track.external_urls.spotify;
        setPlayingTrack(data.body.uri);
        setCurrentSign("scorpio");
        setLinkAvail(url);
        setLink(true);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  };

  const sagClick = () => {
    setLink(false);
    setPlayingTrack();
    console.log("paused!");
    spotifyApi.getPlaylist(signs.sagittarius).then(
      function (data) {
        const items = data.body.tracks.items;
        const item = items[Math.floor(Math.random() * items.length)];
        const num = Math.floor(Math.random() * items.length) 
        setNumber(num)
        const url = item.track.external_urls.spotify;
        console.log(data.body);
        setPlayingTrack(data.body.uri);
        setCurrentSign("sag");
        setLinkAvail(url);
        setLink(true);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  };

  const capClick = () => {
    setLink(false);
    setPlayingTrack();
    console.log("paused!");
    spotifyApi.getPlaylist(signs.capricorn).then(
      function (data) {
        const items = data.body.tracks.items;
        const item = items[Math.floor(Math.random() * items.length)];
        const num = Math.floor(Math.random() * items.length) 
        setNumber(num)
        const url = item.track.external_urls.spotify;
        setPlayingTrack(data.body.uri);
        setCurrentSign("capricorn");
        setLinkAvail(url);
        setLink(true);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  };

  const aquariusClick = () => {
    setLink(false);
    setPlayingTrack();
    console.log("paused!");
    spotifyApi.getPlaylist(signs.aquarius).then(
      function (data) {
        const items = data.body.tracks.items;
        const item = items[Math.floor(Math.random() * items.length)];
        const url = item.track.external_urls.spotify;
        console.log(data.body);
        setPlayingTrack(data.body.uri);
        setCurrentSign("aquarius");
        setLinkAvail(url);
        setLink(true);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  };

  return (
    <div className="content">
       {/* <div>
      <Modal>
        <div>
          <div className="center">
          <button onClick={closeModal}>Select Zodiac Sign</button>
          </div>
        </div>
      </Modal>
    </div> */}
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
            onClick={ariesClick}
            style={{ cursor: "pointer" }}
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
            onClick={taurusClick}
            style={{ cursor: "pointer" }}
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
            onClick={geminiClick}
            style={{ cursor: "pointer" }}
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
            onClick={cancerClick}
            style={{ cursor: "pointer" }}
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
            onClick={leoClick}
            style={{ cursor: "pointer" }}
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
            onClick={virgoClick}
            style={{ cursor: "pointer" }}
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
            onClick={libraClick}
            style={{ cursor: "pointer" }}
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
            onClick={scorpioClick}
            style={{ cursor: "pointer" }}
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
            onClick={sagClick}
            style={{ cursor: "pointer" }}
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
            onClick={capClick}
            style={{ cursor: "pointer" }}
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
            onClick={aquariusClick}
            style={{ cursor: "pointer" }}
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
            onClick={piscesClick}
            style={{ cursor: "pointer" }}
          />
        </Container>
      </div>
      <div className="open">
        {link ? (
          <a href={linkAvail} target="_blank" rel="noreferrer">
            <img alt="spotify" src="/images/Spotify-button.png" />{" "}
          </a>
        ) : (
          <div></div>
        )}
      </div>
      <div className="players">
        <div>
          {currentSign === "aquarius" && (
            <SpotifyPlayer
              className="player"
              styles={{
                height: "3em",
              }}
              token={accessToken}
              autoPlay={false}
              offset={number}
              uris={playingTrack ? [playingTrack] : []}
            />
          )}
        </div>
        <div>
          {currentSign === "pisces" && (
            <SpotifyPlayer
              className="player"
              styles={{
                height: "3em",
              }}

              token={accessToken}
              autoPlay={false}
              offset={number}
              uris={playingTrack ? [playingTrack] : []}
            />
          )}
        </div>

        <div>
          {currentSign === "taurus" && (
            <SpotifyPlayer
              className="player"
              token={accessToken}
              styles={{
                height: "3em",
              }}
              autoPlay={false}
              offset={number}
              uris={playingTrack ? [playingTrack] : []}
            />
          )}
        </div>
        <div>
          {currentSign === "aries" && (
            <SpotifyPlayer
              className="player"
              styles={{
                height: "3em",
              }}
              token={accessToken}
              autoPlay={false}
              offset={number}
              uris={playingTrack ? [playingTrack] : []}
            />
          )}
        </div>
        <div>
          {currentSign === "cancer" && (
            <SpotifyPlayer
              className="player"
              styles={{
                height: "3em",
              }}
              token={accessToken}
              autoPlay={false}
              offset={number}
              uris={playingTrack ? [playingTrack] : []}
            />
          )}
        </div>
        <div>
          {currentSign === "virgo" && (
            <SpotifyPlayer
              className="player"
              styles={{
                height: "3em",
              }}
              token={accessToken}
              autoPlay={false}
              offset={number}
              uris={playingTrack ? [playingTrack] : []}
            />
          )}
        </div>
        <div>
          {currentSign === "gemini" && (
            <SpotifyPlayer
              className="player"
              styles={{
                height: "3em",
              }}
              token={accessToken}
              autoPlay={false}
              offset={number}
              uris={playingTrack ? [playingTrack] : []}
            />
          )}
        </div>
        <div>
          {currentSign === "scorpio" && (
            <SpotifyPlayer
              className="player"
              styles={{
                height: "3em",
              }}
              token={accessToken}
              autoPlay={false}
              offset={number}
              uris={playingTrack ? [playingTrack] : []}
            />
          )}
        </div>
        <div>
          {currentSign === "libra" && (
            <SpotifyPlayer
              className="player"
              styles={{
                height: "3em",
              }}
              token={accessToken}
              autoPlay={false}
              offset={number}
              uris={playingTrack ? [playingTrack] : []}
            />
          )}
        </div>
        <div>
          {currentSign === "sag" && (
            <SpotifyPlayer
              className="player"
              styles={{
                height: "3em",
              }}
              token={accessToken}
              autoPlay={false}
              offset={number}
              uris={playingTrack ? [playingTrack] : []}
            />
          )}
        </div>
        <div>
          {currentSign === "leo" && (
            <SpotifyPlayer
              className="player"
              styles={{
                height: "3em",
              }}
              token={accessToken}
              autoPlay={false}
              offset={number}
              uris={playingTrack ? [playingTrack] : []}
            />
          )}
        </div>
        <div>
          {currentSign === "capricorn" && (
            <SpotifyPlayer
              className="player"
              styles={{
                height: "3em",
              }}
              token={accessToken}
              autoPlay={false}
              offset={number}
              uris={playingTrack ? [playingTrack] : []}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Sign;
