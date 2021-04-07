import "./App.css";
import { useState } from "react";

function App() {
  // Add states and eventHandlers here
  const [firstName, setFirstName] = useState("");
  const [sureName, setSurName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  function handleChangeFirstName(event) {
    const { value } = event.target;
    setFirstName(value);
    console.log(value);
  }

  function handleChangeSurName(event) {
    const { value } = event.target;
    setSurName(value);
    console.log(value);
  }

  function handleChangeAge(event) {
    const { value } = event.target;
    setAge(value);
    console.log(value);
  }

  function handleChangeEmail(event) {
    const { value } = event.target;
    setEmail(value);
    console.log(value);
  }

  function handleChangeNewsletter(event) {
    const { value } = event.target;
    setNewsletter(value);
    console.log(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted");
  }

  return (
    <div className="App">
      <h1>More USERS!</h1>
      <h2>Enter user credentials below:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">Name:</label>
        <input
          type="text"
          name="firstName"
          onChange={handleChangeFirstName}
          value={firstName}
        />
        <label htmlFor="lastName">Surname:</label>
        <input
          type="text"
          name="lastName"
          onChange={handleChangeSurName}
          value={sureName}
        />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          name="age"
          onChange={handleChangeAge}
          value={age}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          onChange={handleChangeEmail}
          value={email}
        />
        <div className="newsletter">
          <input
            type="checkbox"
            name="newsletter"
            onChange={handleChangeNewsletter}
            value={newsletter}
          />
          <label htmlFor="newsletter">
            Yes, I would like many more emails!
          </label>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
