/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {
  // разбивает строку на массив слов
  const words = str.split(' ');

  // map для преобразования каждого слова
  const capitalizedWords = words.map(word => {
      // первая буква заглавной и добавляет остальные буквы
      return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // объединяет массив обратно в строку
  return capitalizedWords.join(' ');
}

console.log(capitalizeWords("hello world from javascript")); // вывод: "Hello World From Javascript"