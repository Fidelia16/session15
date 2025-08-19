let arr = [11, 14, 28, 12, 2, 6, 4, 7];
let max = arr[0];     
let tong = 0;      
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];  
  }
}
for (let i = 1; i < arr.length; i++) {
  tong += arr[i];
}
let trungBinh = tong / arr.length;


console.log(`Phần tử có giá trị lớn nhất trong mảng là: ${max}`);
console.log(`Giá trị trung bình của mảng là: ${trungBinh}`);
