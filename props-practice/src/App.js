import React from 'react';
import Joke from "./Jokes/Joke"
function App() {
  return (
    <div>
      <h1>App.JS</h1>
      <Joke  all = {{question: "what is your name", answer: "George"}} /> 
      <Joke  all = {{question: "how old are you",answer: "30"}} /> 
      <Joke  all = {{question: "where are you",answer: "Cairo"}} /> 
      <Joke  all = {{question: "What do you do",answer: "studying"}} /> 
      <Joke  all = {{question: "what is your dream country",answer: "Canada"}} /> 
    </div>
  );
}

export default App;
