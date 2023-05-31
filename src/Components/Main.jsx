import { useEffect, useState, useRef } from "react";
import "./Main.css";
import Typewriter from "typewriter-effect"
import { useNavigate } from "react-router-dom";

function Main() {
  const [options, setOptions] = useState([]);
  const [inputs, setInputs] = useState([]);
  const navigate = useNavigate();
  const optionsRef = useRef(null);
  const optionsContainerRef = useRef(null);

  useEffect(() => {    
    const randomNos = []
    for(var i=0;i<5;i++)
    {
      randomNos.push(Math.floor(Math.random() * 100))
    }
    setOptions(randomNos);
    setInputs(Array(5).fill(null));
  },[]);
  
  const [dragValue, setDragValue] = useState(null);
  const [dragArea, setDragArea] = useState(null);
  const [dragIndex, setDragIndex] = useState(null);

  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDragStart = (event, value, area, index) => {
      setDragValue(value);
      setDragArea(area);
      setDragIndex(index);
  };
  const nullifyDragParams = () =>{
    setDragValue(null);
    setDragArea(null);
    setDragIndex(null);
  }
  const handleDropAtInput = (event, index) => {
    event.preventDefault();
    if (dragValue !== null && dragArea === 'options' && dragIndex !== null) {
        if (inputs[index] === null) {
            var updatedInputs = [...inputs];
            updatedInputs[index] = dragValue;
            setInputs(updatedInputs);

            var updatedOptions = [...options];
            updatedOptions[dragIndex] = null;
            setOptions(updatedOptions);
        } 
    }
    nullifyDragParams()
};

  const handleDropAtOption = (event, index) => {
  event.preventDefault();
  if (dragValue !== null && dragArea === 'inputs' && dragIndex !== null) {
      if (options[index] === null) {
          var updatedOptions = [...options];
          updatedOptions[index] = dragValue;
          setOptions(updatedOptions);

          var updatedInputs = [...inputs];
          updatedInputs[dragIndex] = null;
          setInputs(updatedInputs);
      } 
  }
    nullifyDragParams()
  };

  const checkAnswer = () => {
    const values = inputs.map((value) => parseInt(value) || 0);
    const sortedValues = values.slice().sort((a, b) => a - b);
    // console.log(values);
    // console.log(sortedValues);
    const message =
    JSON.stringify(values) === JSON.stringify(sortedValues)
    ? "Correct Answer"
    : "Wrong Answer! Please try again.";

    navigate(`/result?message=${message}`);
  }

  return (
    <div className="main">
      <h1>
        <Typewriter 
          options={{
            autoStart: true,
            loop: true,
            delay: 80,
            strings: ["Arrange the numbers in ascending order"]
          }}
        />
      </h1>

      <div className="input-div">
        {inputs.map((input, index) => (
          <div
              key={index}
              className="star"
              draggable="true"
              onDragStart={(event) => handleDragStart(event, input, 'inputs', index)}
              onDragOver={handleDragOver}
              onDrop={(event) => handleDropAtInput(event, index)}
          >
            {input !== null ? input : 'Drop'}
        </div>
    ))}
      </div>

      <div className="options-container" ref={optionsContainerRef}>
        {options.map((option, index) => (
          <div
              key={index}
              className="option"
              draggable="true"
              onDragStart={(event) => handleDragStart(event, option, 'options', index)}
              onDragOver={handleDragOver}
              onDrop={(event) => handleDropAtOption(event, index)}
          >
          <div>
           {option}
          </div>
          </div>
      ))}
      </div>
      <button
        className="check-button"
        onClick={checkAnswer}
        disabled={inputs.includes(null)}
      >
        Check 
      </button>
    </div>
  );
}
export default Main;
