interface Props {
  children: string;
  color?: "light" | "primary" | "dark";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button
      style={{ margin: "20px" }}
      className={"btn btn-" + color}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
