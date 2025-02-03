/*
Напишите свою версию метода `filter`.
Ваша задача — создать функцию `filter`, которая принимает два параметра:

- `array` (массив, над которым выполняется операция),
- `callback` (функция, которая вызывается для каждого элемента массива).

Функция `callback` должна принимать два параметра:

- `element` (текущий элемент массива)
- `index` (индекс текущего элемента)

Функция `filter` должна возвращать новый массив, содержащий только те элементы `array`, для которых `callback` возвращает `true`.
*/

/* Пример использования:
const numbers = [1, 2, 3, 4, 5]

const oddNumbers = filter(numbers, (element, index) => {
  return element % 2 !== 0
});

console.log(oddNumbers) // Должен вывести: [1, 3, 5]
*/


function filter(array, callback) {
  const result = []; // Создаем новый массив для хранения отфильтрованных элементов

  for (let i = 0; i < array.length; i++) {
    const element = array[i]; // Получаем текущий элемент массива
    if (callback(element, i)) { // Вызываем коллбэк с элементом и его индексом
      result.push(element); // Если коллбэк вернул true, добавляем элемент в новый массив
    }
  }

  return result; // Возвращаем новый массив
}

// Пример использования:
const numbers = [1, 2, 3, 4, 5];

const oddNumbers = filter(numbers, (element, i) => {
  return element % 2 !== 0; // Фильтруем нечетные числа
});

console.log(oddNumbers); // Должен вывести: [1, 3, 5]