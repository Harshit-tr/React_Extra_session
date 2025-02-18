import { useState } from "react";

export default function UserDefinedFunction() {
  const [name, setName] = useState("hellow");
  const [age, setAge] = useState(45);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      name is : {name}
      <br />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(Number(e.target.value)))}
      />
      <br />
      age is : {age}
    </div>
  );
}
