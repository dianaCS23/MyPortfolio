import { useState } from "react";

const ThemeSwitcher = () => {
  const [darkMode, setDarkmode] = useState(false);
  //funcion para cambiar el valor del estado darkmode cada vez que se ejecuta
  const toggleTheme = () => setDarkmode(!darkMode); //!darkmode operador not logico en JS, invierte el valor de darkmode

  return (
    <div
      style={{
        background: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#000",
      }}
    >
      <button onClick={toggleTheme}>
        Cambiar a {darkMode ? "Modo Claro" : "Modo Oscuro"}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
