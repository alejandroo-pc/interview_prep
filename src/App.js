import React, { useState, useEffect } from "react";

export default function App() {
  /*
 find first non-repeating character in a string
 return number of vouwels in a string
 find two numbers from an array to add to a specific number
*/

  function nonRepeatingChar(str) {
    let charCounter = {};

    // iterate through phrase and count char
    for (let char of str) {
      if (charCounter[char]) {
        charCounter[char]++;
      } else {
        charCounter[char] = 1;
      }
    }

    console.log("char counter", charCounter);
    // iterate again and check if char is there
    for (let char of str) {
      if (charCounter[char] === 1) {
        console.log("char counter", charCounter);
        return char;
      }
    }
    return null;
  }

  let result = nonRepeatingChar("javascript");

  console.log(result);

  return (
    <main>
      <h1>Question 1: </h1>
    </main>
  );
}
