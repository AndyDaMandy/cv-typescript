import React from 'react';
import './App.css';
import { useState } from "react";

function App() {

  return (
    <div className="App">
        <Cv />

    </div>
  );
}

function Cv() {
  const [bio, setBio] = useState(
      {
        id: 0,
        name: "blank",
        address1: "address 1",
        address2: "",
        city: "city",
        state: "state",
        country: "country"
      }
  )
    const handleClick = (e) => {
        setBio({
            id: 0,
            name: e.name,
            address1: e.address1,
            address2: e.address2,
            city: e.city,
            state: e.state,
            country: e.country
        })
    }
  return (
      <>
          <div className="text-2xl font-bold content-center mx-auto flex block w-full">
            <ul>
                <li>Current Info:</li>
                <li>{bio.name}</li>
                <li>{bio.address1}</li>
                <li>{bio.address2}</li>
                <li>{bio.city}</li>
                <li>{bio.state}</li>
                <li>{bio.country}</li>
            </ul>
          </div>
          <button onClick={handleClick({

          })}></button>
      </>
  )
}

export default App;
