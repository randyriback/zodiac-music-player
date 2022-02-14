import { useState, useEffect } from "react";
import axios from "axios";


const useAuth = (code) => {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  const backend = process.env.REACT_APP_BACKEND || "http://localhost:3001"

  useEffect(() => {
    axios
      .post(backend + "/login", {
        code,
      })
      .then((res) => {
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);
        window.history.pushState({}, null, "/");
      })
      .catch(() => {
        window.location = "/";
      });
  }, [code, backend]);

  useEffect(() => {
    if (!refreshToken || !expiresIn) return;
    const interval = setInterval(() => {
      axios
        .post(backend + "/refresh", {
          refreshToken,
        })
        .then((res) => {
          setAccessToken(res.data.accessToken)
          setExpiresIn(res.data.expiresIn)
        })
        .catch(() => {
          window.location = "/";
        });
    }, (expiresIn - 60) * 1000)

    return () => clearInterval(interval)
  }, [refreshToken, expiresIn, backend]);

  return accessToken;
};

export default useAuth;
