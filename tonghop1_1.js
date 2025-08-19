let arr = [11, 14, 28, 12, 2, 6, 4, 7];
let phanTulon = [];

for (let i = 0; i < arr.length; i++) {
  let phanTu = arr[i];
  if (phanTu >= 10) {
    phanTulon.push(phanTu);
  }
}

console.log(`Các phần tử lớn hơn hoặc bằng 10 là: ${phanTulon.join(', ')}`);
console.log(`Số phần tử lớn hơn hoặc bằng 10 là: ${phanTulon.length}`);
