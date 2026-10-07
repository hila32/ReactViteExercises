import "./HeartLine.css"
interface Props {
  count: number;
}
const HeartLine = ({ count }: Props) => {
  return <div className="alert alert-light sticky-sm-bottom myStyle">{count}</div>;
};

export default HeartLine;
