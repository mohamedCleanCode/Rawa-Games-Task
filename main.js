// Task One
const separateWords = (sentence) => {
  let newSentence = "";
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].toUpperCase() === sentence[i]) {
      newSentence += " " + sentence[i].toLowerCase();
    } else {
      newSentence += sentence[i];
    }
  }
  return newSentence;
};

console.log(separateWords("computerScience"));

console.log("=============");

// Task Two
const tribonacci = (n) => {
  let seq = [1, 1, 1];
  if (n <= 3) {
    return seq.slice(0, n);
  }
  for (let i = 3; i < n; i++) {
    seq[i] = seq[i - 1] + seq[i - 2] + seq[i - 3]; // 1 + 1 + 1 = 3, 3 + 1 + 1 = 5
  }
  return seq.slice(0, n);
};

console.log(tribonacci(9));

console.log("=============");

// Task Three
function convertTime(time) {
  if (time.includes("am") || time.includes("pm")) {
    // 12-hour format to 24-hour format
    let [hour, minute] = time.slice(0, -3).split(":");
    if (time.includes("pm") && hour !== "12") {
      hour = String(parseInt(hour) + 12);
    } else if (time.includes("am") && hour === "12") {
      hour = "00";
    }
    return `${hour}:${minute}`;
  } else {
    // 24-hour format to 12-hour format
    let [hour, minute] = time.split(":");
    hour = parseInt(hour);
    if (hour === 0) {
      return `12:${minute} am`;
    } else if (hour < 12) {
      return `${hour}:${minute} am`;
    } else if (hour === 12) {
      return `12:${minute} pm`;
    } else {
      return `${hour - 12}:${minute} pm`;
    }
  }
}

console.log(convertTime("10:30 am")); // Output: '10:30'
console.log(convertTime("7:13 pm")); // Output: '19:13'
console.log(convertTime("19:00")); // Output: '7:00 pm'
console.log(convertTime("12:00 am")); // Output: '0:00'

console.log("=============");
// Task Four
function convertToOctal(binary) {
  // Convert binary to decimal
  let decimal = parseInt(binary, 2);
  // Convert decimal to octal
  let octal = decimal.toString(8);
  // Convert decimal to hexadecimal
  let hexadecimal = decimal.toString(16);
  return octal;
}

console.log(convertToOctal("101010101010")); // '5252'
console.log(convertToOctal("1000000000")); // '1000'
console.log(convertToOctal("10101111000")); // '2570'
console.log(convertToOctal("1")); // '1'

console.log("=============");

// Task Five
function convertToWords(num) {
  var ones = new Array(
    "",
    " one",
    " two",
    " three",
    " four",
    " five",
    " six",
    " seven",
    " eight",
    " nine",
    " ten",
    " eleven",
    " twelve",
    " thirteen",
    " fourteen",
    " fifteen",
    " sixteen",
    " seventeen",
    " eighteen",
    " nineteen"
  );
  var tens = new Array(
    "",
    "",
    " twenty",
    " thirty",
    " forty",
    " fifty",
    " sixty",
    " seventy",
    " eighty",
    " ninety"
  );
  var hundred = " hundred";
  var output = "";
  var numString = num.toString();

  if (num == 0) {
    return "dontAddBigSufix";
  }
  //the case of 10, 11, 12 ,13, .... 19
  if (num < 20) {
    output = ones[num];
    return output;
  }

  //100 and more
  if (numString.length == 3) {
    output = ones[parseInt(numString.charAt(0))] + hundred;
    output += tens[parseInt(numString.charAt(1))];
    output += ones[parseInt(numString.charAt(2))];
    return output;
  }

  output += tens[parseInt(numString.charAt(0))];
  output += ones[parseInt(numString.charAt(1))];

  return output;
}

console.log(convertToWords(703));
console.log(convertToWords(999));
console.log(convertToWords(460));
console.log(convertToWords(20));

console.log("=============");

// Task Six
function checkOddOrEven(num) {
  let oddSum = 0;
  let evenSum = 0;

  // Loop over each digit in the number
  while (num > 0) {
    let digit = num % 10;
    if (digit % 2 === 0) {
      evenSum += digit;
    } else {
      oddSum += digit;
    }
    num = Math.floor(num / 10);
  }

  if (oddSum > evenSum) {
    return "odd";
  } else if (evenSum > oddSum) {
    return "even";
  } else {
    return "equal";
  }
}

console.log(checkOddOrEven(97428)); // 'odd'
console.log(checkOddOrEven(81961)); // 'even'
console.log(checkOddOrEven(54870)); // 'equal'
console.log(checkOddOrEven(26341)); // 'even'

console.log("=============");

// Task Seven
function checkOrder(a, b, c) {
  let i = 0,
    j = 0,
    k = 0;
  while (k < c.length) {
    if (i < a.length && c[k] === a[i]) {
      i++;
      k++;
    } else if (j < b.length && c[k] === b[j]) {
      j++;
      k++;
    } else {
      return false;
    }
  }
  return i === a.length && j === b.length;
}

console.log(checkOrder("wysn", "showus", "shwysowuns")); // true
console.log(checkOrder("hsbxib", "ywssg", "hsywbxsisgb")); // true
console.log(checkOrder("zh2g", "wts", "shwt2gs")); // false
console.log(checkOrder("hsyhag", "2b12", "hsy2bhag1")); // false

console.log("=============");

// Task Eight
function postfixEval(expr) {
  const stack = [];
  const tokens = expr.split(" ");

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (!isNaN(token)) {
      stack.push(parseInt(token));
    } else {
      const operand2 = stack.pop();
      const operand1 = stack.pop();

      switch (token) {
        case "+":
          stack.push(operand1 + operand2);
          break;
        case "-":
          stack.push(operand1 - operand2);
          break;
        case "*":
          stack.push(operand1 * operand2);
          break;
        case "/":
          stack.push(Math.floor(operand1 / operand2));
          break;
        default:
          throw new Error("Invalid operator");
      }
    }
  }

  return stack.pop();
}

console.log(postfixEval("6 2 / 3 +"));
console.log(postfixEval("10 4 - 3 / 2 *"));
console.log(postfixEval("4 2 /"));
console.log(postfixEval("10 1 + 11 /"));

console.log("=============");

// Task Nine
function isMathExpr(expr) {
  // Regular expression that matches a valid mathematical expression
  const regex = /^\s*\d+(\.\d+)?\s*([-+\/*]\s*\d+(\.\d+)?\s*)*$/;
  return regex.test(expr);
}
console.log(isMathExpr("8-6")); // Output: true
console.log(isMathExpr("q-3")); // Output: false
console.log(isMathExpr("7#4")); // Output: false
console.log(isMathExpr("6/1")); // Output: true

console.log("=============");

// Task Ten
function extractVowels(phrase, n) {
  const vowels = ["a", "e", "i", "o", "u"];
  let extractedVowels = "";
  let vowelCount = 0;

  for (let i = 0; i < phrase.length; i++) {
    const char = phrase[i].toLowerCase();
    if (vowels.includes(char)) {
      extractedVowels += phrase[i];
      vowelCount++;
    }
  }

  if (n > vowelCount) {
    return "invalid";
  } else {
    return extractedVowels.slice(0, n);
  }
}

console.log(extractVowels("Queen", 3)); // 'uee'
console.log(extractVowels("First Time", 3)); // 'iie'
console.log(extractVowels("Apple", 2)); // 'Ae'
console.log(extractVowels("Riyadh", 2)); // 'ia'
console.log(extractVowels("Hello", 10)); // 'invalid'
