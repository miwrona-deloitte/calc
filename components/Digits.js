import Button from "./Button";
const Digits = ({ handleDigit }) => {
  const getButtons = () => {
    const digits = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ","];
    const buttons = [];
    digits.forEach((digit) => {
      buttons.push(
        <Button onButtonClick={handleDigit} sign={digit} key={digit} />
      );
    });
    return buttons;
  };
  return <div className="digits">{getButtons()}</div>;
};

export default Digits;
