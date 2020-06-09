import React, { useState } from "react";
import styled from "styled-components";

function App() {
  const [contagem, setContagem] = useState(0);

  const botaoAction = () => {
    setContagem(contagem + 1);
  };

  return (
    <container>
      <div>{contagem} vezes</div>
      <button onClick={botaoAction}>Clique aqui para aumentar</button>
    </container>
  );
}

export default App;
