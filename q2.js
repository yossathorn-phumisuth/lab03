//เขียนฟังก์ชัน countCharacter(str, char) เพื่อหาว่าในข้อความ str มีตัวอักษร char อยู่กี่ตัว
function countCharacter(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
console.log(countCharacter("hello world", "h"));