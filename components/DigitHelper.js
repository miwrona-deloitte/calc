export default function DigitHelper(inMemoryEvaluation, currentDisplay) {
  this.inMemoryEvaluation = inMemoryEvaluation;
  this.currentDisplay = currentDisplay;
  const OPERATORS = ["/", "*", "-", "+"];

  this.getCurrentDisplay = (digit) => {
    if (this.currentDisplay === null) {
      return digit;
    } else {
      return this.currentDisplay + digit;
    }
  };

  this.isOperatorInMemory = () => {
    if (this.inMemoryEvaluation === null) {
      return false;
    }
    for (let sign of OPERATORS) {
      if (String(this.inMemoryEvaluation).indexOf(sign) > 0) {
        return true;
      }
    }
    return false;
  };
}
