import { useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([
    { id: 1, username: "bret" },
    { id: 2, username: "samantha" },
    { id: 3, username: "elvis" },
    { id: 4, username: "bunny" },
    { id: 5, username: "jon" },
    { id: 6, username: "fish" },
    { id: 7, username: "watson" }
  ]);

  const handleDelete = (id) => {
    const newdata = data.filter((item) => item.id !== id);
    setData(newdata);
  };

  return (
    <div className="App">
      {data.map((item, i) => (
        <div>
          {item.id} {item.username}
          <button onClick={() => handleDelete(item.id)}>delete</button>
        </div>
      ))}
    </div>
  );
}
