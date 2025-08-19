function countCharacters(str) {
  let arr = str.split("");
  return arr.length;
}

let text = prompt (`Nhập chuỗi`);
console.log("Số ký tự trong chuỗi:", countCharacters(text));
