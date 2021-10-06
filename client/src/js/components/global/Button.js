function Button({ children, type, active, setTemp }) {
  return (
    <button
      onClick={(e) => (type === "degC" ? setTemp(true) : setTemp(false))}
      className={`btn btn--${type} ${active ? "btn--active" : ""}`}
    >
      {children}
    </button>
  );
}

export default Button;
