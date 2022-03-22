export default function CommaHelper(inMemoryEvaluation, currentDisplay) {
  this.inMemoryEvaluation = inMemoryEvaluation;
  this.currentDisplay = currentDisplay;
  const OPERATORS = ["/", "*", "-", "+"];

  this.canConcatenate = (comma) => {
    if (this.inMemoryEvaluation === null) {
      return true;
    }
    if (this.inMemoryEvaluation.indexOf(comma) < 0) {
      return true;
    }
    if (this.currentDisplay === null) {
      return true;
    }
    if (this.currentDisplay.indexOf(comma) < 0) {
      return true;
    }
    return false;
  };

  this.isCommaFirst = (comma) => {
    return inMemoryEvaluation === null && comma === ",";
  };
  
  this.isCommaFirstAfterLastOperator = (comma) => {
    if (inMemoryEvaluation === null) {
      return false;
    }
    let indices = [];
    for (let operator of OPERATORS) {
      let id = inMemoryEvaluation.lastIndexOf(operator);
      if (id > 0) indices.push(id);
    }
    if (indices.length < 1) {
      return false;
    }
    let lastOperatorId = Math.max(indices);
    let sub = inMemoryEvaluation.substring(lastOperatorId + 1);

    return sub === "";
  };
}
