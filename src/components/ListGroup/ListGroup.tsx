import { useState } from "react";
import "./ListGroup.css";

interface ListGroupProps {
  items?: string[];
  heading?: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items = [], heading, onSelectItem }: ListGroupProps) {
  const [selectItem, setSelectItem] = useState(-1);

  if (items.length === 0) return <p> No items found</p>;

  return (
    <>
      <h4>{heading}</h4>
      <ul className="list-group mylistGroup">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectItem(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
