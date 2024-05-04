function checkBrackets(str) {
  const stack = [];
  const openingBrackets = ['(', '{', '['];
  const closingBrackets = [')', '}', ']'];
  const bracketPairs = {
      ')': '(',
      '}': '{',
      ']': '['
  };

  for (let char of str) {
      if (openingBrackets.includes(char)) {
          stack.push(char);
      } else if (closingBrackets.includes(char)) {
          const lastOpeningBracket = stack.pop();
          if (lastOpeningBracket !== bracketPairs[char]) {
              return false;
          }
      }
  }

  return stack.length === 0;
}

const sometext = ``;

console.log(checkBrackets(someFn));
