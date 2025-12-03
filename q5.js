// เขียนฟังก์ชัน printStars(rows) เพื่อพิมพ์ดาวตามจำนวนแถวที่กำหนด
// ตัวอย่าง:
//     printStars(3)
// ผลลัพธ์:
// *
// **
// ***
function printStars(rows) {
    for (let i = 1; i <= rows; i++) {
        console.log('*'.repeat(i));
    }
}
printStars(5);