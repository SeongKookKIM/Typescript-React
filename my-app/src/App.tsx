import React, { useState } from "react";
import "./App.css";

function App() {
  let [user, setuser] = useState<(string | number)[]>(["kim"]);

  return (
    <div>
      <h4>안녕하세요!</h4>
      <Profile name="철수" age="20" />
    </div>
  );
}

function Profile(props: { name: string; age: string }): JSX.Element {
  return (
    <div>
      {props.name}프로필{props.age}
    </div>
  );
}

export default App;
