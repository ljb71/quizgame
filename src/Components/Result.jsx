import React, { useEffect, useRef, useState } from 'react';
import './Result.css';
import happyStar from "../Assets/happyStar.jpeg";
import sad from "../Assets/sad.jpg";

function ResultPage() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    console.log(queryParams.get('message'));
    setMessage(queryParams.get('message'));
  }, []);

  const isCorrect = message === 'Correct Answer';
  

  function resetGame() {
    window.location.href = '/';
  }

  return (
    <div className="body">
      <div className="container">
        <div>
          {isCorrect ? (
            <div className="correct">
              <img src={happyStar}
               width="150px" height="100px">          
               </img>
              <p className="result-message">
                {message}
              </p>
            </div>
          ) : (
            <div className="wrong">
              <img src={sad}
               width="150px" height="150px">          
               </img>
              <p className="result-message">{message}</p>
            </div>
          )}
        </div>
        <button className="reset-button" onClick={resetGame}>
          Reset Game
        </button>
      </div>
    </div>
  );
}

export default ResultPage;
