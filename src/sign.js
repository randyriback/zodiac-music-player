import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import SpotifyWebApi from "spotify-web-api-node";
import SpotifyPlayer from "react-spotify-web-playback";
import useAuth from "./useAuth";

const spotifyApi = new SpotifyWebApi({
  clientId: "cad88e9871c64b1097fd0794f17fa7a0",
});

const Sign = ({ code }) => {
  const accessToken = useAuth(code);
  const [playingTrack, setPlayingTrack] = useState();
  const [currentSign, setCurrentSign] = useState("");
  const [linkAvail, setLinkAvail] = useState("");
  const [link, setLink] = useState(false);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  const signs = {
    aries: { id: "0niSJoA95g5Pz2NqPpELjP", img: "/images/aries.jpg" },
    taurus: { id: "0IpV6kzt1FPssRebnlOlVP", img: "/images/taurus.jpg" },
    gemini: { id: "21pg2wJxnyOeTEHQ5pvS1J", img: "/images/gemini.jpg" },
    cancer: { id: "2n8mCoR94S8nkKnDLHIKI8", img: "/images/cancer.jpg" },
    leo: { id: "76ZJXlJQG9iYutyIJW53nK", img: "/images/leo.jpg" },
    virgo: { id: "2T490l53FCFMMNwH3UNcoY", img: "/images/virgo.jpg" },
    libra: { id: "5Cg9oGB1CrOp9kQKarVHyL", img: "/images/libra.jpg" },
    scorpio: { id: "4toj8Lx2vvIjBljDEq5WZh", img: "/images/scorpio.jpg" },
    sag: { id: "1VtFDaLuq6r7cmguIRYe1l", img: "/images/sag.jpg" },
    capricorn: { id: "3J1EsxEHPxpjqFiY8lP2Bn", img: "/images/capricorn.jpg" },
    aquarius: { id: "3d6ajAnNcL4yPyOEkqDk8H", img: "/images/aquarius.jpg" },
    pisces: { id: "710HeuN5dDjL1v9kc4ouCE", img: "/images/pisces.jpg" },
  };

  const signClick = (signPlaylist, signString) => {
    return () => {
      setLink(false);
      setPlayingTrack();
      spotifyApi.getPlaylist(signPlaylist).then(
        function (data) {
          const items = data.body.tracks.items;
          const item = items[Math.floor(Math.random() * items.length)];
          const num = Math.floor(Math.random() * items.length);
          setNumber(num);
          const url = item.track.external_urls.spotify;
          setPlayingTrack(data.body.uri);
          setCurrentSign(signString);
          setLinkAvail(url);
          setLink(true);
        },
        function (err) {
          console.log("Something went wrong!", err);
        }
      );
    };
  };

  return (
    <div className="content">
      <div className="circle">
        {Object.keys(signs).map((sign, index) => {
          const { img, id } = signs[sign];

          return (
            <Container
              key={id}
              className={"deg" + index * 30}
              style={{
                height: "100vg",
              }}
            >
              <img
                src={img}
                alt="starsign"
                onClick={signClick(id, sign)}
                style={{ cursor: "pointer" }}
              />
            </Container>
          );
        })}
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
          {Object.keys(signs).map((sign) => {
            return (
              currentSign === sign && (
                <SpotifyPlayer
                  key={signs[sign].id}
                  className="player"
                  styles={{
                    height: "3em",
                  }}
                  token={accessToken}
                  autoPlay={false}
                  offset={number}
                  uris={playingTrack ? [playingTrack] : []}
                />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sign;
