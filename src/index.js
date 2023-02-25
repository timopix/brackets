function check(str, bracketsConfig) {
  const stack = [];
  const brackets = {};
  const openBrackets = [];

  for (const [open, close] of bracketsConfig) {
    openBrackets.push(open);
    brackets[close] = open;
  }

  function isOpenBracket(ch) {
    return openBrackets.includes(ch);
  }

  for (const ch of str) {
    const topElement = stack[stack.length - 1];
    if (isOpenBracket(ch) && brackets[ch] !== ch) {
      stack.push(ch);
    } else if (isOpenBracket(ch) && brackets[ch] === ch) {
      if (brackets[ch] === topElement) {
        stack.pop();
      } else {
        stack.push(ch);
      }
    } else {
      if (brackets[ch] === topElement) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}

module.exports = check;
