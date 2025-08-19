let mangKyTu = ['c', 's', 'c', '2', '6', '1','3','5','0','9'];
let m = [];

for (let i = 0; i < mangKyTu.length; i++) {
    let kyTu = mangKyTu[i];
if(kyTu >= '0' && kyTu <= '9'){
    m.push(kyTu);
}
}  
console.log(`ky tu la so trong mang la ${m}`);
