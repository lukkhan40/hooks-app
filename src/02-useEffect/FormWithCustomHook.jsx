import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { username, email, password, inputChange, onReset } = useForm({
    username: "",
    email: "",
    password: "",
  });

  return (
    <>
      <h1>Formulario con custom Hook</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Nombre de Usuario"
        name="username"
        value={username}
        onChange={inputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="Correo"
        name="email"
        value={email}
        onChange={inputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={inputChange}
      />
      <button className="btn btn-primary mt-2" onClick={onReset}>
        Reset
      </button>
    </>
  );
};
