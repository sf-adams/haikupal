import "./button.css";

type ButtonProps = {
  content: string;
  color: string;
};

const Button = ({ content, color }: ButtonProps) => {
  return <button className="button">{content}</button>;
};

export default Button;
