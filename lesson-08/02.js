/*
Задание: Реализация интерактивного отсчёта запуска ракеты

Цель задания: Написать код для обработки событий нажатия на кнопки "Старт" и "Отмена", реализуя обратный отсчёт с помощью JavaScript.

Задача:

1. Добавить обработчик событий для кнопки "Старт":

- При нажатии на кнопку "Старт" должен начаться обратный отсчёт с 3 до 1. Значение счётчика должно отображаться в элементе countdownDisplay. Цифра 3 должна отобразиться немедленно.
- Каждую секунду значение счётчика должно уменьшаться на 1.
- Когда счётчик достигнет 0, вместо 0 должен отображаться эмодзи ракеты "🚀" и таймер должен быть остановлен. Пользователь видит: 3 -> 2 -> 1 -> 🚀


2. Добавить обработчик событий для кнопки "Отмена":

- При нажатии на кнопку "Отмена" таймер должен быть остановлен
- В элементе отображения счётчика (countdownDisplay) должно появиться сообщение "Отменено".
- Отмена таймера возможна только во время его работы
- После отмены таймера возможен повторный запуск ракеты

Обратите внимание на корректность работы таймера: повторное нажатие на "Старт" не должно приводить к нескольким одновременно работающим таймерам.

Подсказки:
- 🧙‍♂️ Для выполнения этого задания нужно познакомиться с браузерными функциями setInterval (https://doka.guide/js/setinterval/) и clearInterval(https://doka.guide/js/clearinterval/). Они очень похоже на setTimeout и clearTimeout.
 */

const startButton = document.getElementById('start')
const cancelButton = document.getElementById('cancel')
const countdownDisplay = document.getElementById('countdown')

let isTimerStarted = false
let timerId

startButton.addEventListener('click', () => {
  if (isTimerStarted) return; // Если таймер уже запущен, ничего не делаем

  isTimerStarted = true; // Устанавливаем флаг, что таймер запущен
  let counter = 3;
  countdownDisplay.textContent = counter; // Отображаем начальное значение

  timerId = setInterval(() => {
    counter--; // Уменьшаем счётчик на 1
    if (counter > 0) {
      countdownDisplay.textContent = counter; // Обновляем отображение счётчика
    } else {
      countdownDisplay.textContent = '🚀'; // Отображаем ракету
      clearInterval(timerId); // Останавливаем таймер
      isTimerStarted = false; // Сбрасываем флаг
    }
  }, 1000); // Интервал 1 секунда
});

cancelButton.addEventListener('click', () => {
  if (!isTimerStarted) return; // Если таймер не запущен, ничего не делаем

  clearInterval(timerId); // Останавливаем таймер
  countdownDisplay.textContent = 'Отменено'; // Отображаем сообщение об отмене
  isTimerStarted = false; // Сбрасываем флаг
});