import { useCallback, useState , useEffect } from "react";

export default function Test() {
  const [id, setId] = useState("Loading...");
  const [name, setName] = useState("Loading...");
  const fetchUser = useCallback(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: 1, name: "John Doe" });
      }, 5000);
    });
  }, []);
  useEffect(() => {
    fetchUser().then((data) => {
      setId(data.id);
      setName(data.name);
    });
  });
  return (
    <div>
      Id: {id}
      <br />
      Name: {name}
    </div>
  );
}
