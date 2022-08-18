import { memo } from "react";
// Bastante util en componentes mas Complejos
// En Componentes pequeños no mejora el rendimiento

export const Small = memo(({ counter }) => {
  console.log("Me volvi a dibujar :(");
  return <small>{counter}</small>;
});
