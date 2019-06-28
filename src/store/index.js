import { useState, useEffect, createContext } from "react";

const MyContext = createContext();

const RiotAPI = () => {
  const [URL, setURL] = useState("");
  const [RiotKey, setRiotKey] = useState("");

  useEffect(() => {
    setRiotKey("?api_key=RGAPI-343e51ac-0c51-4591-b8c0-de1faf7046e4");
    setURL(
      "https://cors-anywhere.herokuapp.com/https://kr.api.riotgames.com/lol/"
    );
  }, []);

  return { URL, RiotKey };
};

export { MyContext, RiotAPI };
