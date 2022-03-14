import { query, QuerySnapshot } from "@firebase/firestore";
import React, { useState, useEffect } from "react";
import './App.css';
import firebase from './firebase';

function App() {
  const [skills, setSkills] = useState([]);
  const [gpa, setGPA] = useState();
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("Website");

  function getSkills() {
    ref.doc("skillDoc").get().then((querySnapshot) => {
      const items = [];
      Object.values(querySnapshot.data()).forEach((field) => {
        items.push(field);
      });
      setSkills(items);
    });
  }

  function getGPA() {
    ref.doc("gpaDoc").get().then((querySnapshot) => {
      setGPA(querySnapshot.data().gpa);
    });
  }

  useEffect(() => {
    getSkills();
    getGPA();
  }, []); 

  if (loading) {
    return;
  }

  return (
    <div className="App">
      <div class="grid-2">
            <div class="section-1">
                <img class="animated-gif" src="pikachu.gif" />
                <h2>brian nguyen</h2>
                <p>calgary, alberta</p>
                <a href="https://www.linkedin.com/in/nguyennbrian"><i class="fab fa-linkedin"></i></a>
                <a href="https://github.com/brian-ngyn"><i class="fab fa-github"></i></a>
                <a href="https://drive.google.com/file/d/1Dz8O-aOeLunV0lyCCh2b7P0-G5LpOUOo/view?usp=sharing"><i class="far fa-file-word"></i></a>
            </div>
            <div class="section-2">
                <h2>about</h2>
                <p>hey! my name is brian :)</p>
                <h2>education</h2>
                <b>university of calgary (2020-2025)</b>
                <p>
                    major in software engineering<br />
                    minor in data science<br />
                    gpa: {gpa}
                </p>
                <h2>skills</h2>
                {skills.map((skill) => (
                  <ul class="no-bullets" key={skill.id}>
                    <li>{skill}</li>
                  </ul>
                ))}
                <h2>contact</h2>
                <p>brian.nguy1en@gmail.com</p>
            </div>
        </div>
    </div>
  );
}

export default App;
