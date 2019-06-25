import { useState, useEffect, createContext } from "react";

const MyContext = createContext();

const RiotAPI = () => {
  const [URL, setURL] = useState("");

  useEffect(() => {
    setURL("URL");
  }, []);

  return { URL };
};

export { MyContext, RiotAPI };
