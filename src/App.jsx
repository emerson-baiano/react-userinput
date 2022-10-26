import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [value, setValue] = useState("");
  const [person, setPerson] = useState("");

  useEffect(() => {
    async function getData() {
      if (value === "") return setPerson("");
      await fetch(`${url}/${value}`)
        .then((res) => res.json())
        .then((data) => setPerson(data));
    }
    getData();
  }, [value]);

  const handleChange = (e) => {
    const value = e.target.value;
    if (Number(value) || value === "") setValue(e.target.value);
  };
  return (
    <div className="App">
      <div className="card">
        <input type="text" onChange={handleChange} value={value} />
      </div>
      {person && (
        <div className="">
          <p>Name: {person.name}</p>
          <p>Surname: {person.username}</p>
          <p>Phone Number: {person.phone}</p>
        </div>
      )}
    </div>
  );
}

export default App;
