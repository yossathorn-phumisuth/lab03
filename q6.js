//เขียนฟังก์ชัน findMax(arr) เพื่อหาค่าตัวเลขที่มากที่สุดในอาร์เรย์ arr
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax([1, 2, 3, 4, 5])); // 5