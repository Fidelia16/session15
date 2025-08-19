function countNegativeNumbers(str) {
  let matches = str.match(/-\d+/g);
  
  return matches ? matches.length : 0;
}

let text = "Trong chuỗi này có -1, -2 và -35";
console.log("Số lượng số nguyên âm:", countNegativeNumbers(text));
