/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function findUniqueElements(array) {
     // Используем Set для получения уникальных элементов (Конструктор Set принимает массив и автоматически удаляет все дубликаты, оставляя только уникальные значения.)
    const uniqueElements = new Set(array);
    
     // Возвращаем массив из уникальных элементов
    return Array.from(uniqueElements);
    }
    
 // Пример использования
 console.log(findUniqueElements([1, 2, 3, 2, 1, 4])); // Вывод: [1, 2, 3, 4]


// findUniqueElements ([1, 2, 3, 2, 1, 4])