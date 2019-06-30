import { useState, useEffect, createContext } from "react";
// 전체 상태관리를 해주는 context api 입니다.

const MyContext = createContext();

// RiotAPI 라는 스토어를 만들어 줍니다.
const RiotAPI = () => {
  const [URL, setURL] = useState("");
  const [RiotKey, setRiotKey] = useState("");

  useEffect(() => {
    setRiotKey("?api_key=RGAPI-a0dc5074-1daa-467c-86ca-f127110633cd");
    setURL(
      "https://cors-anywhere.herokuapp.com/https://kr.api.riotgames.com/lol/"
    );
  }, []);

  // URI과 RiotKey를 관리합니다.
  return { URL, RiotKey };
};

export { MyContext, RiotAPI };
