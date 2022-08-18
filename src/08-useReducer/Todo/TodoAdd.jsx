import { useForm } from "../../hooks";

export const TodoAdd = ({ handleNewTodo }) => {
  const { description, inputChange, onReset } = useForm({
    description: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime() * 3,
      description,
      done: false,
    };

    handleNewTodo(newTodo);
    onReset();
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Que hay que hacer?"
        className="form-control"
        name="description"
        value={description}
        onChange={inputChange}
      />
      <button className="btn btn-outline-primary mt-1" type="submit">
        Agregar
      </button>
    </form>
  );
};
