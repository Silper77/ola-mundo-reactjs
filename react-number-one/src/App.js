import React from "react";

function formatName(user) {
  return user.name + " " + user.surname;
}

function App() {
  let image = "https://www.google.com.br/google.jpg";

  return (
    <>
      <img src={image} />
    </>
  );
}

export default App;
