import React, { useState } from "react";
import chipsImg from "./Chips.png";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./Chips.css";


function Chips() {
  const [bags, setBags] = useState([]);

  function handleClick() {
    const x = window.innerWidth * Math.random();
    const y = window.innerHeight * Math.random();
    setBags(prevBags => [...prevBags, {x, y} ]);
  }
}