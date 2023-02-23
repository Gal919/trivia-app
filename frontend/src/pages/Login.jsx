import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  return (
    <div>
      <input
        onChange={handleChange}
        placeholder="enter name"
        type="text"
        value={name}
      />
      <Link to={"main"}>Start</Link>
    </div>
  );
};

export default Login;
