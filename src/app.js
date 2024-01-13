/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
};
let generateExcuse = () => {
  let pronown = ["A", "The"];
  let subject = [
    "some guy",
    "my neighbor ",
    "dog",
    "some asshole on the street",
    "wife",
    "girlfriend"
  ];
  let action = ["stole my", "kicked my", "ate my", "drove over my"];
  let possession = ["homework", "car", "girlfriend", "shoes"];
  let where = [
    "on the freeway",
    "at my place",
    "in the pool",
    "at my girfriends house",
    "on top of my car and i started driving"
  ];

  function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

  function getRandomExcuse(array) {
    return array[getRandomIndex(array)];
  }

  let pronownIndex = getRandomIndex(pronown);
  let subjectIndex = getRandomIndex(subject);
  let actionIndex = getRandomIndex(action);
  let possessionIndex = getRandomIndex(possession);
  let whereIndex = getRandomIndex(where);

  return (
    getRandomExcuse(pronown) +
    " " +
    getRandomExcuse(subject) +
    " " +
    getRandomExcuse(action) +
    " " +
    getRandomExcuse(possession) +
    " " +
    getRandomExcuse(where)
  );
};
