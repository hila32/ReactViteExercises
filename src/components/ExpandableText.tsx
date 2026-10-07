import { useState } from "react";

interface Prop {
  maxLetters?: number;
  children: string;
}

const ExpandableText = ({ children, maxLetters = 50 }: Prop) => {
  const [isExpanded, setExpanded] = useState(false); 
  
  const text = isExpanded ? children : children.slice(0, maxLetters) + "...";

  const handleClick = () => {
    setExpanded(!isExpanded);
  };

  return (
    <>
      <p>
        {text}
        <button className="btn btn-primary" onClick={handleClick}>
          {isExpanded ? "Less" : "More"}
        </button>
      </p>
    </>
  );
};

export default ExpandableText;
