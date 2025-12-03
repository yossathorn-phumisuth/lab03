// เขียนฟังก์ชัน isEvenOrOdd(num) เพื่อตรวจสอบว่าตัวเลข num เป็น &quot;Even&quot; (เลขคู่) หรือ &quot;Odd&quot; (เลขคี่)
// ตัวอย่าง:
//     isEvenOrOdd(7) =&gt; Odd
// isEvenOrOdd(4) =&gt; Even
function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(isEvenOrOdd(7)); // Odd
console.log(isEvenOrOdd(4)); // Even