import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await axios.get("https://api.quotable.io/random");
      const { content, author } = response.data;
      setQuote(content);
      setAuthor(author);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="app">
      <div className="quote-box">
        <p className="quote">{quote}</p>
        <p className="author">- {author}</p>
        <button onClick={fetchQuote}>Get New Quote</button>
      </div>
    </div>
  );
};

export default App;
