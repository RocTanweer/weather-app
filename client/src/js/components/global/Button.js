function Button({ children, type, active, handleClick, isLoading }) {
  return (
    <button
      onClick={handleClick}
      data-type={type}
      className={`btn btn--${type} ${active ? "btn--active" : ""}`}
      disabled={isLoading ? true : false}
    >
      {children}
    </button>
  );
}

export default Button;
