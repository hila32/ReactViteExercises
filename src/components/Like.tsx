import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggel = () => {
    setStatus(!status);
    onClick();
  };

  if (status) return <AiFillHeart color="#f33955ff" size={30} onClick={toggel} />;
  return <AiOutlineHeart size={30} onClick={toggel} />;
};

export default Like;
