function Button({ sign, onButtonClick}) {
  return (
    <button
      onClick={onButtonClick}
      type="button"
      className="button"
      value={sign}
    >
      {sign}
    </button>
  );
}

export default Button;
