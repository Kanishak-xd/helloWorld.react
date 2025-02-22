import { Fragment } from "react";

function ListGroup() {
  const items = ["New York", "Tokyo", "Seoul", "London"];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
