let mang = [11, 14, 28, 12, 2, 6, 4, 7];
let nhap = parseInt(prompt("Vui lòng nhập số nguyên bạn muốn kiểm tra:"));

if (mang.includes(nhap)) {
  alert(`${nhap} is in the array`);
} else {
  alert(`${nhap} is not in the array`);
}
