<?php
  // Установка локали и выбор значений даты 
  setlocale(LC_ALL, 'ru_RU.utf8');
  date_default_timezone_set('Europe/Moscow');
  $day = strftime('%d'); 
  // $mon = strftime('%B'); я не знаю почему месяц пишется на английском, мб из-за Docker поэтому используем массив
  $year = strftime('%Y');

  // Массив русских месяцев
  $months = [
      1 => 'январь', 2 => 'февраль', 3 => 'март', 4 => 'апрель',
      5 => 'май', 6 => 'июнь', 7 => 'июль', 8 => 'август',
      9 => 'сентябрь', 10 => 'октябрь', 11 => 'ноябрь', 12 => 'декабрь'
  ];
  $mon = $months[(int)date('n')];


  /* 
   Получаем текущий час в виде строки от 00 до 23 
   и приводим строку к целому числу от 0 до 23 
   */ 
  $hour = (int) strftime('%H'); 
  $welcome = ''; // Инициализируем переменную для приветствия 

  if ($hour <= 6) {
      $welcome = 'Доброй ночи';
  } elseif ($hour <= 12) {
      $welcome = 'Доброе утро';
  } elseif ($hour <= 18) {
      $welcome = 'Добрый день';
  } elseif ($hour <= 23) {
      $welcome = 'Добрый вечер';
  } else {
      $welcome = 'Доброй ночи';
  }

  // Инициализация массива
  $leftMenu = [ 
    ['link'=>'Домой', 'href'=>'index.php'], 
    ['link'=>'О нас', 'href'=>'index.php?id=about'], 
    ['link'=>'Контакты', 'href'=>'index.php?id=contact'],
    ['link'=>'Таблица умножения', 'href'=>'index.php?id=table'], 
    ['link'=>'Калькулятор', 'href'=>'index.php?id=calc'] 
  ];
?> 