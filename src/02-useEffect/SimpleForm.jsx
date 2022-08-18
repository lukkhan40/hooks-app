import { useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "LuisAcosta",
    email: "lukkhan40@gmail.com",
  });
  const { username, email } = formState;

  const inputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  //   useEffect(() => {
  //     console.log("UE [] una sola vez");
  //   }, []);

  //   useEffect(() => {
  //     console.log("UE formState");
  //   }, [formState]);

  //   useEffect(() => {
  //     console.log("UE email");
  //   }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={inputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="lukkhan40@gmail.com"
        name="email"
        value={email}
        onChange={inputChange}
      />
      {username === "LuisAcosta2" && <Message />}
    </>
  );
};
