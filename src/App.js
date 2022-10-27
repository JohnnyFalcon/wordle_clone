import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { options } from "./words-options";
function App() {
  const [randomWord, setRandomWord] = useState("");

  useEffect(() => {
    const getWord = async () => {
      const response = await axios.request(options);
      setRandomWord(response.data);

      console.log(response.data);
    };

    getWord();
  }, []);

  return (
    <div className="App">
      <h1>{randomWord.word}</h1>
    </div>
  );
}

export default App;
