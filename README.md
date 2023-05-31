# Quiz Game

## Introduction

This is a quiz game that asks the user to sort a series of five numbers in ascending order. Each time a series of five random numbers are generated for the user. Drag and drop functionality is provided for arranging the numbers. Finally, the user can check if their solution is correct or wrong and reset the game.
&nbsp;

A live demo is available on the following link: [https://quizgame-beta.vercel.app/](https://quizgame-beta.vercel.app/)

## Installation

1. Clone the repository or download the source code.
2. Navigate to the project repository.
3. Install the dependencies and run the project by using the following commands:&nbsp;

`npm install` \
`npm start`

## Functionalities

#### User is given 5 random values and he/she has to sort it. 

For every new session, five random numbers/options are generated through the `Math.random()` method for the user to sort.
This functionality is implemented within the `useEffect` hook.

#### 5 random options are draggable and these need to be dropped in input buckets. Can drag and drop from options to input and vice-versa.

The game utilizes HTML5 drag and drop APIs for the drag and drop functionality. 

All the option and input fields are made draggable. A number in the options can be dropped into an empty input box. Similarly, if the user wants to change one of their input field, they can drag the entered number and drop it into any of the empty option boxes.

Three state variables `dragValue`, `dragArea` and `dragIndex` respectively takes into account- 
- the value of the dragged object,
- whether the dragged object belong to 'inputs' or 'options' area,
- the index of the dragged object in their respective area.


Following are the functions involved in implementing the drag-drop functionality:

- `handleDragStart`: This function is called when a field is dragged. It sets the `dragValue`, `dragArea` and `dragIndex` values.
- `handleDragOver`: This function is called  in order to prevent the default dragged over behavior when a field is dragged over a valid drop target.

- `handleDropAtInput`: This function  is called when a field is dropped into an input box. It checks if the `dragArea` is `options` and the respective input field is `null`. If both the conditions are satisfied, the input field is filled with `dragValue`.

- `handleDropAtOption`: Similar to the previous function, this is called when a field is dropped into any option box. It checks if the `dragArea` is `inputs` and the respective option field is empty or `null`. If both the conditions are satisfied, the option field is filled with `dragValue`.

- `nullifyDragParams`: This function is called after each drop operation. It sets the `dragValue`, `dragArea` and `dragIndex` values to `null`.

#### After sorting the user would be able to check if the answer is correct or wrong.

In order to verify their solution, the user can click on the "Check" button. This calls the `checkAnswer` function. It checks whether the numbers entered are in ascending order and navigates the user to a result page with a relevant message. 

#### Post result, users can reset the game and try again with different random numbers.

Along with displaying the results, the result page also provides a "Reset Game" button. It brings the user back to the home page and restarts the game with new random numbers.

### Technologies 

The project is build using React.js as the frontend framework and Visual studio code as the code editor.
