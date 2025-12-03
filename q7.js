//เขียนฟังก์ชัน isPalindrome(word) เพื่อเช็คว่าคำ word เป็น Palindrome หรือไม่
// (คำที่อ่านจากซ้ายไปขวาและขวาไปซ้ายเหมือนกัน เช่น &quot;madam&quot;, &quot;racecar&quot;)
function isPalindrome(word) {
    const reversedWord = word.split("").reverse().join("");
    return word === reversedWord;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false