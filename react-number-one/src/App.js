import React from "react";

function Avatar(props) {
  return (
    <div style={{ backgroundColor: "red", padding: 20, width: 150 }}>
      <img
        style={{ width: 50, height: 50 }}
        src={props.user.url}
        alt={props.user.name}
      />
      <br />
      <span>{props.user.name}</span>
    </div>
  );
}

function App() {
  let user = {
    url: "https://www.google.com.br/google.jpg",
    name: "Sam Silper Jay",
  };
  return (
    <>
      <Avatar user={user} />
    </>
  );
}

export default App;
