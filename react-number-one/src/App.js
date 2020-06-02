import React from "react";
import "./App.css";

function Avatar(props) {
  return (
    <div className="avatar">
      <img src={props.user.url} alt={props.user.name} className="avatar img" />
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
