import { renderHook, act } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe("Pruebas en useForm", () => {
  const initialForm = {
    name: "Luis",
    email: "lukkhan40@gmail.com",
  };

  test("Debe de regresar los valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      inputChange: expect.any(Function),
      onReset: expect.any(Function),
    });
  });

  test("Debe de cambiar el nombre del formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { inputChange } = result.current;

    const newName = "Jose Luis";
    const e = {
      target: {
        value: newName,
        name: "name",
      },
    };

    act(() => {
      inputChange(e);
    });

    expect(result.current.name).toBe(newName);
  });

  test("Debe de resetear el formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onReset, inputChange } = result.current;

    const newName = "Jose Luis";
    const e = {
      target: {
        value: newName,
        name: "name",
      },
    };

    act(() => {
      inputChange(e);
      onReset();
    });

    expect(result.current.name).toBe(initialForm.name);
  });
});
