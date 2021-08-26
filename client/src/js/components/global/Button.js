function Button({ children, type }) {
  return <button className={`btn btn--${type}`}>{children}</button>;
}

export default Button;
