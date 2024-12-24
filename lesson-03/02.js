// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(num) {
    if (num%2 === 0) return true;
    return false
}

const number = isEven(144)
console.log(number);
