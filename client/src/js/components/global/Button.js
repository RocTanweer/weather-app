function Button({ children, type, active, handleClick }) {
  return (
    <button
      onClick={handleClick}
      data-type={type}
      className={`btn btn--${type} ${active ? "btn--active" : ""}`}
    >
      {children}
    </button>
  );
}

export default Button;
