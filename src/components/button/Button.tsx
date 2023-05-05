type ButtonProps = {
  content: string;
  color: string;
}

const Button = ({content, color}: ButtonProps) => {
  return (
    <button>{content}</button>
  )
}

export default Button